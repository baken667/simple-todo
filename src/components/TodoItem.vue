<script setup lang="ts">
import type { ITodo } from '@/types/todo.interface'
import AppButton from './AppButton.vue'
import useTodos from '@/stores/todo.store'

const props = defineProps<{
  todo: ITodo
}>()

const todoStore = useTodos()

const toggleFavorite = () => {
  todoStore.updateTodo({
    ...props.todo,
    favorite: !props.todo.favorite
  })
}
const toggleDone = () => {
  todoStore.updateTodo({
    ...props.todo,
    done: !props.todo.done
  })
}
</script>
<template>
  <div class="bg-gray-1 rounded-2xl p-6 flex flex-row items-center gap-4">
    <div class="flex items-center">
      <AppButton
        ariaLabel="todo done"
        :class="todo.done ? 'text-indigo-500' : 'text-gray-5'"
        :icon="
          todo.done
            ? 'i-material-symbols:check-circle-outline-rounded'
            : 'i-material-symbols:radio-button-unchecked'
        "
        @click="toggleDone"
      />
    </div>
    <div class="grow truncate" :class="{ 'line-through': todo.done }">
      <h3>{{ todo.title }}</h3>
    </div>
    <div class="flex items-center">
      <AppButton
        ariaLabel="todo favorite"
        :class="todo.favorite ? 'text-rose-500' : 'text-gray-5'"
        :icon="
          todo.favorite
            ? 'i-material-symbols:favorite-rounded'
            : 'i-material-symbols:favorite-outline-rounded'
        "
        @click="toggleFavorite"
      />
    </div>
  </div>
</template>
