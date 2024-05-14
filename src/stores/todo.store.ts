import type { PartialBy } from '@/types/partial-by.type'
import type { ITodo } from '@/types/todo.interface'
import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

interface IState {
  _todos: ITodo[]
}

const useTodos = defineStore('todos', {
  state: (): IState => ({
    _todos: []
  }),
  actions: {
    addTodo(todo: PartialBy<ITodo, 'id'>) {
      this._todos.push({
        id: nanoid(),
        ...todo
      })
    },
    updateTodo(todo: ITodo) {
      this._todos[this._todos.findIndex((item) => item.id === todo.id)] = { ...todo }
    },
    removeTodo(id: string) {
      this._todos.splice(
        this._todos.findIndex((i) => i.id === id),
        1
      )
    }
  },
  getters: {
    getTodos: (state): ITodo[] => state._todos,
    getTodo: (state) => {
      return (id: string): ITodo | undefined => state._todos.find((todo) => todo.id === id)
    }
  },
  persist: {
    paths: ['_todos']
  }
})

export default useTodos
