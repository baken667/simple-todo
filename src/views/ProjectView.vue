<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import useProjects from '@/stores/projects.store'
import PageContainer from '@/components/PageContainer.vue'

const projectStore = useProjects()
</script>
<template>
  <PageContainer>
    <PageHeader
      :title="projectStore.getProject($route.params.project as string)?.name ?? ''"
    ></PageHeader>
    <div>
      This is a {{ projectStore.getProject($route.params.project as string)?.name }} project
    </div>
    <div>
      <button @click="$router.push({ name: 'home' })">GO home</button>
    </div>
  </PageContainer>
</template>
