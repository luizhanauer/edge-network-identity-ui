<script setup lang="ts">
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const props = defineProps<{
  latitude: string;
  longitude: string;
}>();

const mapContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!mapContainer.value) return;

  const lat = parseFloat(props.latitude);
  const lng = parseFloat(props.longitude);

  const isInvalidCoordinates = isNaN(lat) || isNaN(lng);
  if (isInvalidCoordinates) return;

  const map = L.map(mapContainer.value, {
    zoomControl: false,
    attributionControl: false
  }).setView([lat, lng], 12);

  // Utilizando os Tiles "Dark Matter" nativos da CartoDB para o Dark Mode
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
  }).addTo(map);

  // Marcador customizado com efeito de Neon Verde Pulsante
  const customMarker = L.divIcon({
    html: `<div class="w-4 h-4 bg-emerald-500 rounded-full border-2 border-zinc-950 shadow-[0_0_12px_rgba(16,185,129,0.9)] animate-pulse"></div>`,
    className: 'bg-transparent',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  L.marker([lat, lng], { icon: customMarker }).addTo(map);
});
</script>

<template>
  <div class="mt-4 overflow-hidden rounded-lg border border-zinc-700/60 relative z-0 shadow-inner">
    <div ref="mapContainer" class="w-full h-48 bg-zinc-900"></div>
    
    <div class="absolute bottom-2 right-2 bg-zinc-950/70 backdrop-blur-sm text-[9px] text-zinc-500 px-2 py-1 rounded border border-zinc-800/50 z-[400] pointer-events-none">
      OpenStreetMap contributors
    </div>
  </div>
</template>

<style>
/* Sobrescreve estilos nativos do Leaflet que podem piscar branco 
  durante o carregamento inicial no tema escuro.
*/
.leaflet-container {
  background: #18181b !important; /* zinc-900 */
}
</style>