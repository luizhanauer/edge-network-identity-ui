import { ref, readonly } from 'vue';
import type { NetworkProfile } from '../types/network';

export function useNetworkIdentity() {
  const profile = ref<NetworkProfile | null>(null);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  const fetchIdentity = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const url = import.meta.env.VITE_API_URL || '/';
      const response = await fetch(url);
      
      const isFailed = !response.ok;
      if (isFailed) {
        throw new Error('Falha ao obter dados da rede Edge.');
      }

      profile.value = await response.json();
    } catch (err: unknown) {
      const errorInstance = err as Error;
      error.value = errorInstance.message;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    profile: readonly(profile),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchIdentity
  };
}