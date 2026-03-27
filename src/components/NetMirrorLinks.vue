<script setup lang="ts">
const props = defineProps<{
  asn: number;
}>();

const baseUrl = import.meta.env.VITE_NETMIRROR_URL || 'https://luizhanauer.github.io/netmirror';

const getUrl = (format: 'site' | 'json' | 'txt') => {
  const isSite = format === 'site';
  
  if (isSite) return baseUrl;
  
  return `${baseUrl}/api/asn/${props.asn}.${format}`;
};
</script>

<template>
  <div class="mt-5 pt-4 border-t border-zinc-800/80">
    <div class="flex items-center justify-between mb-2">
      <span class="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
        Roteamento BGP (NetMirror)
      </span>
      <span class="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
    </div>

    <p class="text-[11px] text-zinc-500 mb-3 leading-relaxed">
      API estática de prefixos IPv4/IPv6 do NRO. Fornece dados 'mastigados' para automação de firewalls e filtros de rede.
    </p>

    <div class="flex flex-col sm:flex-row gap-2">
      <a 
        :href="getUrl('site')" 
        target="_blank" 
        rel="noopener noreferrer"
        class="px-3 py-2 text-xs font-semibold bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 rounded-md transition-all flex-1 text-center border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        Acessar Interface Web
      </a>
      
      <div class="flex gap-2 flex-1">
        <a 
          :href="getUrl('json')" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-3 py-2 text-xs font-semibold bg-zinc-800/60 text-zinc-300 hover:bg-zinc-700 hover:text-emerald-400 border border-zinc-700 rounded-md transition-colors flex-1 text-center flex items-center justify-center"
          title="Ver payload JSON completo"
        >
          JSON
        </a>
        <a 
          :href="getUrl('txt')" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-3 py-2 text-xs font-semibold bg-zinc-800/60 text-zinc-300 hover:bg-zinc-700 hover:text-emerald-400 border border-zinc-700 rounded-md transition-colors flex-1 text-center flex items-center justify-center"
          title="Ver lista de prefixos puros (CIDR)"
        >
          TXT
        </a>
      </div>
    </div>
  </div>
</template>