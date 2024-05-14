<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppButton from './AppButton.vue'
import useProjects from '@/stores/projects.store'
import useTodos from '@/stores/todo.store'
import { useRoute } from 'vue-router'

const visible = defineModel<boolean>()
const dialog = ref<HTMLDialogElement>()
const projectsStore = useProjects()
const todoStore = useTodos()

const formState = reactive<{
  title: string
  description: string
  project: null | string
  deadline: string
  favorite: boolean
}>({
  title: '',
  description: '',
  project: null,
  deadline: '',
  favorite: false
})
const route = useRoute()

const showModal = () => {
  dialog.value?.showModal()
  if (route.name === 'project') {
    formState.project = route.params.project as string
  }
  visible.value = true
}

const formSubmit = () => {
  todoStore.addTodo({
    title: formState.title,
    description: formState.description ?? null,
    done: false,
    favorite: formState.favorite,
    deadline: formState.deadline ? new Date(formState.deadline) : null,
    project_id: formState.project
  })

  formState.deadline = ''
  formState.title = ''
  formState.project = null
  formState.description = ''
  formState.favorite = false

  dialog.value?.close()
}

defineExpose({
  show: showModal,
  close: (returnVal?: string): void => dialog.value?.close(returnVal),
  visible
})
</script>
<template>
  <dialog
    ref="dialog"
    @close="visible = false"
    class="outline-none max-w-2xl w-full p-6 rounded-2xl"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-semibold text-indigo-500">Добавить задачу</h2>
      <AppButton
        ariaLabel="close dialog"
        icon="i-material-symbols:close-rounded"
        @click="dialog?.close()"
      />
    </div>
    <div class="mt-4">
      <form @submit.prevent="formSubmit" class="flex flex-col gap-4">
        <input
          type="text"
          class="w-full bg-gray-2 rounded-lg px-4 py-2 outline-none border-2 focus:border-indigo-500"
          placeholder="Название"
          name="title"
          v-model="formState.title"
          required
          maxlength="40"
        />
        <textarea
          class="w-full bg-gray-2 rounded-lg px-4 py-2 outline-none border-2 focus:border-indigo-500"
          rows="4"
          placeholder="Описание (необязательно)"
          v-model="formState.description"
        ></textarea>
        <div>
          <div class="flex flex-row gap-4">
            <select
              class="w-full bg-gray-2 rounded-lg px-4 py-2 outline-none border-2 focus:border-indigo-500 appearance-none"
              v-model="formState.project"
            >
              <option :value="null">Не выбрано</option>
              <option
                v-for="project in projectsStore.getProjects"
                :value="project.id"
                :key="project.id"
              >
                {{ project.name }}
              </option>
            </select>
            <input
              type="date"
              class="w-full bg-gray-2 rounded-lg px-4 py-2 outline-none border-2 focus:border-indigo-500 appearance-none"
              v-model="formState.deadline"
            />
          </div>
        </div>
        <div class="flex justify-between">
          <label class="flex items-center gap-2 select-none cursor-pointer">
            <input type="checkbox" name="favorite" v-model="formState.favorite" class="w-5 h-5" />
            Добавить в избранное
          </label>

          <AppButton ariaLabel="submit task" variant="primary" class="px-3" size="text-lg">
            Сохранить
          </AppButton>
        </div>
      </form>
    </div>
  </dialog>
</template>
