import { create } from 'zustand'

interface IGitRepo {

}

interface GitState {
  gitRepos: IGitRepo[];
  gitStats: Map<Date, number>;
  isGitDataFetched: boolean;

  fetchGitData: () => Promise<void>
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const useGitStore = create<GitState>()((set) => ({
  gitRepos: [],
  gitStats: new Map<Date, number>(),
  isGitDataFetched: false,

  async fetchGitData() {
    await delay(5000)
    set({ gitStats: new Map([[new Date(), 1]]), isGitDataFetched: true })
  },
}))