<script setup lang="ts">
import useProjects from '@/stores/projects.store'
import { ref, watch } from 'vue'

const visible = defineModel<boolean>()
const projectsStore = useProjects()
const name = ref('')
const inputRef = ref<HTMLInputElement>()

const onSubmit = () => {
  projectsStore.addProject({
    name: name.value,
    description: null
  })

  name.value = ''

  visible.value = false
}

watch(visible, (val) => {
  if (val === true) {
    setTimeout(() => {
      inputRef.value?.focus()
    }, 0)
  }
})
</script>
<template>
  <Transition name="create-project-form">
    <form @submit.prevent="onSubmit" v-show="visible">
      <input
        type="text"
        v-model="name"
        placeholder="Введите название"
        required
        maxlength="40"
        class="w-full bg-gray-2 rounded-lg px-4 py-2 outline-none border-2 focus:border-indigo-500"
        ref="inputRef"
      />
    </form>
  </Transition>
</template>
<style>
.create-project-form-move,
.create-project-form-enter-active,
.create-project-form-leave-active {
  transition: all 0.3s ease;
}
.create-project-form-enter-from,
.create-project-form-leave-to {
  opacity: 0;
  transform: translateX(-10rem);
}
</style>
