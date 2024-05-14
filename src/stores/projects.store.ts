import type { PartialBy } from '@/types/partial-by.type'
import type { IProject } from '@/types/project.interface'
import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'

interface IState {
  _projects: IProject[]
}

const useProjects = defineStore('projects', {
  state: (): IState => ({
    _projects: []
  }),
  actions: {
    addProject(project: PartialBy<IProject, 'id'>) {
      this._projects.push({
        id: nanoid(),
        ...project
      })
    },
    removeProject(id: string) {
      this._projects.splice(
        this._projects.findIndex((i) => i.id === id),
        1
      )
    }
  },
  getters: {
    getProjects: (state): IProject[] => state._projects,
    getProject: (state) => {
      return (id: string): IProject | undefined =>
        state._projects.find((project) => project.id === id)
    }
  },
  persist: {
    paths: ['_projects']
  }
})

export default useProjects
