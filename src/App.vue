<script setup lang="ts">
import { onMounted } from 'vue';
import { useNetworkIdentity } from './composables/useNetworkIdentity';
import AnimatedBackground from './components/AnimatedBackground.vue';
import InfoCard from './components/InfoCard.vue';
import CopyableField from './components/CopyableField.vue';
import MapViewer from './components/MapViewer.vue';
import NetMirrorLinks from './components/NetMirrorLinks.vue';
import NetScopePromo from './components/NetScopePromo.vue';

const { profile, isLoading, error, fetchIdentity } = useNetworkIdentity();

onMounted(() => {
  fetchIdentity();
});
</script>

<template>
  <AnimatedBackground />

  <div class="relative z-10 min-h-screen font-sans selection:bg-emerald-500/30 selection:text-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto space-y-8">
      
      <header class="text-center space-y-3">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]">
          Edge Network Identity
        </h1>
        <p class="text-zinc-400 font-medium tracking-wide uppercase text-sm">
          Análise de conectividade e observabilidade na borda
        </p>
      </header>

      <div v-if="isLoading" class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
      </div>

      <div v-if="error" class="bg-red-950/50 backdrop-blur-md border border-red-500/50 p-4 rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.2)]">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p class="text-sm text-red-400">{{ error }}</p>
          <button 
            @click="fetchIdentity" 
            class="text-xs font-semibold px-4 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 rounded-md transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>

      <main v-if="profile" class="space-y-6">
        
        <div class="bg-zinc-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-800/80 p-6 md:p-8 transition-all hover:border-zinc-700">
          <CopyableField label="Endereço IP Público" :value="profile.ip" :highlight="true" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <InfoCard title="Provedor (ISP)" icon="🏢">
            <CopyableField label="Organização" :value="profile.provider.isp" />
            <CopyableField label="Número de Sistema Autónomo" :value="`AS${profile.provider.asn}`" />
            
            <NetMirrorLinks :asn="profile.provider.asn" />
            <NetScopePromo />
          </InfoCard>

          <InfoCard title="Localização Edge" icon="🌍">
            <CopyableField label="País / Região" :value="`${profile.location.country} - ${profile.location.region}`" />
            <CopyableField label="Cidade" :value="profile.location.city" />
            
            <MapViewer 
              v-if="profile.location.latitude && profile.location.longitude"
              :latitude="profile.location.latitude" 
              :longitude="profile.location.longitude" 
            />
          </InfoCard>

          <InfoCard title="Conexão e Performance" icon="⚡">
            <CopyableField label="Datacenter de Roteamento" :value="profile.connection.datacenter" />
            <CopyableField label="Latência Nativa (RTT)" :value="`${profile.connection.latencyMs} ms`" />
            <CopyableField label="Protocolo" :value="profile.connection.protocol" />
          </InfoCard>

          <InfoCard title="Cliente" icon="💻">
            <CopyableField label="Plataforma" :value="profile.client.platform" />
            <CopyableField label="Navegador (User-Agent)" :value="profile.client.userAgent" />
          </InfoCard>

        </div>
      </main>

    </div>
  </div>
</template>