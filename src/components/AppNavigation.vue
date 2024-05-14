<script setup lang="ts">
import useProjects from '@/stores/projects.store'
import AppButton from './AppButton.vue'
import AppNavigationBlock from './AppNavigationBlock.vue'
import AppNavigationItem from './AppNavigationItem.vue'
import AddProjectForm from './AddProjectForm.vue'
import { ref } from 'vue'

const projectsStore = useProjects()
const addProjectFormVisible = ref(false)
</script>

<template>
  <nav class="bg-white w-sm rounded-2xl shadow-xl shadow-gray-2 p-6 flex flex-col gap-4">
    <AppNavigationBlock title="Фильтры" :overflowNone="true">
      <template #default>
        <AppNavigationItem icon="i-material-symbols:all-inbox" label="Все" :to="{ name: 'home' }" />
        <!-- <AppNavigationItem
          icon="i-material-symbols:favorite-outline-rounded"
          label="Избранное"
          :to="{ name: 'favorite' }"
        /> -->
      </template>
    </AppNavigationBlock>
    <AppNavigationBlock title="Проекты" h-full>
      <template #tool>
        <AppButton
          ariaLabel="Add project"
          icon="i-material-symbols:add-rounded outline-none"
          @click="addProjectFormVisible = !addProjectFormVisible"
        />
      </template>
      <template #sub>
        <AddProjectForm v-model="addProjectFormVisible" mt-2 />
      </template>
      <template #default>
        <TransitionGroup name="projects">
          <AppNavigationItem
            v-for="project in projectsStore.getProjects"
            icon="i-material-symbols:folder-copy-outline"
            :label="project.name"
            :to="{ name: 'project', params: { project: project.id } }"
            :key="project.id"
          >
            <template #append>
              <div>
                <AppButton
                  ariaLabel="remove project"
                  icon="i-material-symbols:delete-outline-rounded"
                  size="text-lg"
                  @click="projectsStore.removeProject(project.id)"
                />
              </div>
            </template>
          </AppNavigationItem>
        </TransitionGroup>
      </template>
    </AppNavigationBlock>
  </nav>
</template>
<style>
.projects-move,
.projects-enter-active,
.projects-leave-active {
  transition: all 0.3s ease;
}
.projects-enter-from,
.projects-leave-to {
  opacity: 0;
  transform: translateX(-10rem);
}
</style>
