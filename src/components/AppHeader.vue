<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <div class="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-20">
      <RouterLink :to="{ name: 'home' }" class="text-4xl font-bold hover:opacity-80">
        To<span class="text-indigo-500">Do.</span>
      </RouterLink>
    </div>
  </header>
</template>
