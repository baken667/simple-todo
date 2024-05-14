<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigation from '@/components/AppNavigation.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>
<template>
  <div class="w-full h-dvh flex flex-col">
    <AppHeader />
    <main class="app-main max-w-screen-xl px-4 mx-auto w-full flex flex-row gap-8">
      <AppNavigation />
      <RouterView />
    </main>
  </div>
</template>
<style scoped>
.app-main {
  height: calc(100vh - 10rem);
}
</style>
