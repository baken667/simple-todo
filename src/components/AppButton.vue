<script setup lang="ts">
defineProps<{
  ariaLabel: string
  icon?: string
  size?: string
  variant?: 'primary'
}>()
</script>
<template>
  <button
    :aria-label="ariaLabel"
    class="flex items-center px-1 py-1 rounded-lg outline-none"
    :class="[
      size ? size : 'text-sm',
      variant === 'primary' ? 'bg-indigo-500 hover:bg-indigo-400 text-white' : 'hover:bg-gray-3'
    ]"
  >
    <div class="" :class="[size ? size : 'text-2xl', icon]" v-if="icon"></div>
    <slot />
  </button>
</template>
