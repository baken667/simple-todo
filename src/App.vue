<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import useProjects from './stores/projects.store'
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'

const router = useRouter()
const route = useRoute()
const projectsStore = useProjects()
const { getProjects } = storeToRefs(projectsStore)

const createDefault = () => {
  projectsStore.addProject({
    name: 'Default',
    description: null
  })
}

function goHome() {
  router.push('/')
}

watch(
  getProjects,
  async (val, old) => {
    if (val.length === 0) {
      goHome()
      createDefault()
    }
  },
  { deep: true }
)

onMounted(() => {
  if (projectsStore.getProjects.length === 0) {
    createDefault()
  }
})
</script>

<template>
  <RouterView />
</template>
