import { create } from 'zustand'

interface GitState {
  bears: number
  increase: (by: number) => void
}

export const useGitStore = create<GitState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))