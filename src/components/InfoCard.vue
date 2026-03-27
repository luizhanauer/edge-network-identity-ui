<script setup lang="ts">
defineProps<{
  title: string;
  icon?: string;
}>();
</script>

<template>
  <div class="relative bg-zinc-900/60 backdrop-blur-md border border-zinc-800 shadow-xl rounded-xl p-6 flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_0_20px_rgba(57,255,20,0.05)]">
    <div class="flex items-center mb-4 pb-4 border-b border-zinc-800/80">
      <span v-if="icon" class="text-2xl mr-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">{{ icon }}</span>
      <h2 class="text-lg font-semibold text-zinc-100 tracking-wide">{{ title }}</h2>
    </div>
    <div class="space-y-3 flex-grow relative z-10">
      <slot></slot>
    </div>
  </div>
</template>