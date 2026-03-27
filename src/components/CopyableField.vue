<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  label: string;
  value: string | number;
  highlight?: boolean;
}>();

const isCopied = ref(false);

const copyToClipboard = async () => {
  if (!props.value) return;
  try {
    await navigator.clipboard.writeText(String(props.value));
    isCopied.value = true;
    setTimeout(() => { isCopied.value = false; }, 2000);
  } catch (err) {
    console.error('Falha ao copiar', err);
  }
};
</script>

<template>
  <div 
    class="flex items-center justify-between p-3 rounded-lg border transition-all duration-300 group cursor-pointer"
    :class="highlight 
      ? 'bg-emerald-950/40 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:bg-emerald-900/40' 
      : 'bg-zinc-800/40 border-zinc-700/50 hover:border-emerald-500/30 hover:bg-zinc-800/60'"
    @click="copyToClipboard"
    title="Clique para copiar"
  >
    <div class="flex flex-col overflow-hidden">
      <span class="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1">{{ label }}</span>
      <span 
        class="truncate font-mono"
        :class="highlight ? 'text-2xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'text-sm text-zinc-200 group-hover:text-emerald-300 transition-colors'"
      >
        {{ value }}
      </span>
    </div>
    <div class="ml-4 flex-shrink-0">
      <div v-if="isCopied" class="text-emerald-400 flex items-center text-xs font-bold px-2 py-1 bg-emerald-500/10 rounded-md border border-emerald-500/20">
        Copiado!
      </div>
      <button v-if="!isCopied" class="text-zinc-500 group-hover:text-emerald-400 transition-colors p-2 rounded-md hover:bg-zinc-700/50">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
        </svg>
      </button>
    </div>
  </div>
</template>