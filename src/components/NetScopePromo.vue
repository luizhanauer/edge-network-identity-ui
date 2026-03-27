<script setup lang="ts">
const netScopeUrl = 'https://luizhanauer.github.io/netscope/';
</script>

<template>
  <div class="mt-5 pt-4 border-t border-zinc-800/80">
    <div class="flex items-center justify-between mb-2">
      <span class="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
        Inteligência de Rede (NetScope)
      </span>
      <span class="flex h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
    </div>
    
    <p class="text-[11px] text-zinc-500 mb-3 leading-relaxed">
      Análise de sub-redes IPv4/IPv6, motor VLSM e visualização binária em tempo real.
    </p>
    
    <div class="flex gap-2">
      <a 
        :href="netScopeUrl" 
        target="_blank" 
        rel="noopener noreferrer"
        class="px-3 py-2 text-xs font-semibold bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 rounded-md transition-all flex-1 text-center border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Acessar Interface Web
      </a>
    </div>
  </div>
</template>