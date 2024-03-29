import { create } from 'zustand'
import { getFirstDate } from '../utils';

interface IGitRepo {
  id: number;
  name: string;
  created_at: string;
  pushed_at: string;
  commits_url: string;
  html_url: string;
}

interface GitState {
  gitRepos: IGitRepo[];
  gitStats: Map<number, number>;
  isGitDataFetched: boolean;

  fetchGitData: () => Promise<void>
}

export const useGitStore = create<GitState>()((set) => ({
  gitRepos: [],
  gitStats: new Map<number, number>(),
  isGitDataFetched: false,

  async fetchGitData() {
    const init: RequestInit = { headers: { "Authorization": `Bearer ${import.meta.env.VITE_GIT_TOKEN}` } };
    const gitRepos: IGitRepo[] = await (await fetch('https://api.github.com/users/ryhordev/repos', init)).json();

    const sinceDate = getFirstDate();
    const isoDate = sinceDate.toISOString();

    const filteredRepos = gitRepos.filter(r => new Date(r.pushed_at).valueOf() >= sinceDate.valueOf());
    const requests = filteredRepos.map(r => {
      const url = r.commits_url.replace('{/sha}', '')
      return fetch(`${url}?since=${isoDate}`, init)
    });

    const responses = await Promise.all(requests)
    const gitStats = new Map<number, number>();

    await Promise.all(responses.map(async (r) => {
      if (r.status === 200) {
        const body: any[] = await r.json();
        body.forEach((c) => {
          const commitDate = new Date(c.commit.committer.date);
          commitDate.setHours(0, 0, 0, 0);
          const dataValue = commitDate.valueOf();
          const value = (gitStats.get(dataValue) ?? 0) + 1;
          gitStats.set(dataValue, value);
        });
      } else {
        console.error(r);
      }
    }));

    set({ gitStats, isGitDataFetched: true, gitRepos })
  },
}))