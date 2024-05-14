<script setup lang="ts">
import AppButton from './AppButton.vue'
import AddTaskDialog from './AddTaskDialog.vue'
import { ref } from 'vue'

defineProps<{
  title: string
}>()

const modal = ref<InstanceType<typeof AddTaskDialog>>()

const showModal = () => modal.value?.show()
</script>
<template>
  <div class="flex items-center justify-between relative">
    <h1 class="text-indigo-500 text-xl font-semibold">{{ title }}</h1>
    <div>
      <AppButton
        ariaLabel="add task"
        size="text-base"
        class="px-2"
        variant="primary"
        @click="showModal"
      >
        Добавить задачу
      </AppButton>
    </div>
  </div>
  <AddTaskDialog ref="modal" />
</template>
