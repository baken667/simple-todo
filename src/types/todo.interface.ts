import type { Nullable } from './nullable.type'

export interface ITodo {
  id: string
  done: boolean
  title: string
  favorite: boolean
  description: Nullable<string>
  deadline: Nullable<Date>
  project_id: Nullable<string>
}
