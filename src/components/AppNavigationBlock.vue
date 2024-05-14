<script setup lang="ts">
defineProps<{
  title: string
  overflowNone?: boolean
}>()
</script>
<template>
  <div class="flex flex-col gap-2 relative" :class="{ 'overflow-hidden': !overflowNone }">
    <div class="sticky top-0 bg-white z-1 p-1">
      <div class="flex justify-between items-center">
        <h2 class="text-indigo-500 text-xl font-semibold">{{ title }}</h2>
        <div>
          <slot name="tool" />
        </div>
      </div>
      <div v-if="$slots.sub">
        <slot name="sub" />
      </div>
    </div>
    <div
      class="flex flex-col gap-2 relative overflow-x-hidden scrollbar scrollbar-rounded scrollbar-w-2 scrollbar-p-2 p-1"
      :class="{ 'overflow-y-auto': !overflowNone }"
    >
      <slot />
    </div>
  </div>
</template>
