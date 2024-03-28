import { create } from 'zustand'

interface DevState {
  bears: number
  increase: (by: number) => void
}

export const useDevStore = create<DevState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))