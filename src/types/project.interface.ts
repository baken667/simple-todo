import type { Nullable } from './nullable.type'

export interface IProject {
  id: string
  name: string
  description: Nullable<string>
}
