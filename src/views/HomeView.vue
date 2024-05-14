<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import TodoItem from '@/components/TodoItem.vue'
import ContentContainer from '@/components/ContentContainer.vue'
import PageContainer from '@/components/PageContainer.vue'
import useTodos from '@/stores/todo.store'

const todoStore = useTodos()
</script>

<template>
  <PageContainer>
    <PageHeader title="Задачи" />

    <ContentContainer>
      <div class="flex flex-col gap-2">
        <TodoItem v-for="todo in todoStore.getTodos" :todo="todo" :key="todo.id" />
      </div>
    </ContentContainer>
  </PageContainer>
</template>
