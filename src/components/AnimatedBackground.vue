<script setup lang="ts">
// Componente puramente visual (Apresentação)
</script>

<template>
  <div class="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-50">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style="background-color: transparent;">
      <defs>
        <filter id="neon-glow-green" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="neon-glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="fade-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stop-color="white" stop-opacity="1" />
          <stop offset="100%" stop-color="black" stop-opacity="0" />
        </radialGradient>
        <mask id="edge-fade">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#fade-gradient)" />
        </mask>

        <pattern id="fine-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#39FF14" stroke-width="0.5" opacity="0.05" />
        </pattern>

        <g id="cube-green">
          <polygon points="0,-8 9,-4 0,0 -9,-4" fill="#8aff73"/>
          <polygon points="0,0 9,-4 9,6 0,10" fill="#39FF14"/>
          <polygon points="0,0 0,10 -9,6 -9,-4" fill="#1e9e07"/>
        </g>

        <g id="cube-cyan">
          <polygon points="0,-8 9,-4 0,0 -9,-4" fill="#73ffff"/>
          <polygon points="0,0 9,-4 9,6 0,10" fill="#00FFFF"/>
          <polygon points="0,0 0,10 -9,6 -9,-4" fill="#008b8b"/>
        </g>

        <g id="glowing-cube-green">
          <animate attributeName="opacity" values="1; 0.8; 1" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
          <use href="#cube-green" filter="url(#neon-glow-green)"/>
        </g>
        <g id="glowing-cube-cyan">
          <animate attributeName="opacity" values="1; 0.8; 1" dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0; 0.5; 1" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
          <use href="#cube-cyan" filter="url(#neon-glow-cyan)"/>
        </g>

        <g id="snake-right-g">
          <use href="#glowing-cube-green" />
          <g opacity="0.75" transform="translate(-18, 0) scale(0.8)"><use href="#cube-green"/></g>
          <g opacity="0.5" transform="translate(-34, 0) scale(0.6)"><use href="#cube-green"/></g>
          <g opacity="0.3" transform="translate(-48, 0) scale(0.4)"><use href="#cube-green"/></g>
          <g opacity="0.15" transform="translate(-60, 0) scale(0.2)"><use href="#cube-green"/></g>
        </g>
        <g id="snake-left-g">
          <use href="#glowing-cube-green" />
          <g opacity="0.75" transform="translate(18, 0) scale(0.8)"><use href="#cube-green"/></g>
          <g opacity="0.5" transform="translate(34, 0) scale(0.6)"><use href="#cube-green"/></g>
          <g opacity="0.3" transform="translate(48, 0) scale(0.4)"><use href="#cube-green"/></g>
          <g opacity="0.15" transform="translate(60, 0) scale(0.2)"><use href="#cube-green"/></g>
        </g>
        <g id="snake-down-g">
          <use href="#glowing-cube-green" />
          <g opacity="0.75" transform="translate(0, -18) scale(0.8)"><use href="#cube-green"/></g>
          <g opacity="0.5" transform="translate(0, -34) scale(0.6)"><use href="#cube-green"/></g>
          <g opacity="0.3" transform="translate(0, -48) scale(0.4)"><use href="#cube-green"/></g>
          <g opacity="0.15" transform="translate(0, -60) scale(0.2)"><use href="#cube-green"/></g>
        </g>
        <g id="snake-up-g">
          <use href="#glowing-cube-green" />
          <g opacity="0.75" transform="translate(0, 18) scale(0.8)"><use href="#cube-green"/></g>
          <g opacity="0.5" transform="translate(0, 34) scale(0.6)"><use href="#cube-green"/></g>
          <g opacity="0.3" transform="translate(0, 48) scale(0.4)"><use href="#cube-green"/></g>
          <g opacity="0.15" transform="translate(0, 60) scale(0.2)"><use href="#cube-green"/></g>
        </g>
        <g id="snake-left-c">
          <use href="#glowing-cube-cyan" />
          <g opacity="0.75" transform="translate(18, 0) scale(0.8)"><use href="#cube-cyan"/></g>
          <g opacity="0.5" transform="translate(34, 0) scale(0.6)"><use href="#cube-cyan"/></g>
          <g opacity="0.3" transform="translate(48, 0) scale(0.4)"><use href="#cube-cyan"/></g>
        </g>
        <g id="snake-down-c">
          <use href="#glowing-cube-cyan" />
          <g opacity="0.75" transform="translate(0, -18) scale(0.8)"><use href="#cube-cyan"/></g>
          <g opacity="0.5" transform="translate(0, -34) scale(0.6)"><use href="#cube-cyan"/></g>
          <g opacity="0.3" transform="translate(0, -48) scale(0.4)"><use href="#cube-cyan"/></g>
        </g>
      </defs>

      <g mask="url(#edge-fade)">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#fine-grid)" />
        
        <g stroke="#39FF14" stroke-width="1" stroke-dasharray="4 6" opacity="0.08" fill="none">
          <path d="M -100 150 L 1100 150" />
          <path d="M -100 350 L 1100 350" />
          <path d="M -100 450 L 1100 450" />
          <path d="M 250 -100 L 250 700" />
          <path d="M 550 -100 L 550 700" />
          <path d="M 800 -100 L 800 700" />
        </g>

        <use href="#snake-right-g"><animateMotion dur="18s" repeatCount="indefinite" path="M -150 150 L 1150 150" /></use>
        <use href="#snake-left-g"><animateMotion dur="19s" begin="3s" repeatCount="indefinite" path="M 1150 350 L -150 350" /></use>
        <use href="#snake-left-g" transform="scale(0.85)"><animateMotion dur="19s" begin="3.8s" repeatCount="indefinite" path="M 1150 350 L -150 350" /></use>
        <use href="#snake-left-c"><animateMotion dur="16s" begin="7s" repeatCount="indefinite" path="M 1150 450 L -150 450" /></use>
        <use href="#snake-down-g"><animateMotion dur="15s" begin="1s" repeatCount="indefinite" path="M 250 -150 L 250 750" /></use>
        <use href="#snake-down-c" transform="scale(0.9)"><animateMotion dur="17s" begin="10s" repeatCount="indefinite" path="M 800 -150 L 800 750" /></use>
        <use href="#snake-up-g"><animateMotion dur="16s" begin="0.5s" repeatCount="indefinite" path="M 550 750 L 550 -150" /></use>
        <use href="#snake-up-g"><animateMotion dur="20s" begin="12s" repeatCount="indefinite" path="M 250 750 L 250 -150" /></use>
      </g>
    </svg>
  </div>
</template>