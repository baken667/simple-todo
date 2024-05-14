<script setup lang="ts">
import router from '@/router'
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
  icon: string
  label: string
  isProject?: boolean
}>()
</script>
<template>
  <div class="w-full">
    <RouterLink :to="to" custom v-slot="{ navigate, isExactActive }">
      <button
        class="flex w-full flex-row items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-1"
        :class="{ 'bg-gray-2 hover:bg-gray-3': isExactActive }"
        @click="navigate"
      >
        <div class="" :class="icon"></div>
        <div class="grow-1 text-start text-overflow-hidden truncate">
          {{ label }}
        </div>
        <div v-if="$slots.append" @click.stop>
          <slot name="append" />
        </div>
      </button>
    </RouterLink>
  </div>
</template>
