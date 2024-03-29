import { create } from 'zustand'

interface IArticle {

}

interface ArticleState {
  articles: IArticle[];
  articlesStats: Map<number, number>;
  isArticleDataFetched: boolean;

  fetchArticleData: () => Promise<void>
}

export const useArticleStore = create<ArticleState>()((set) => ({
  articles: [],
  articlesStats: new Map<number, number>(),
  isArticleDataFetched: false,

  async fetchArticleData() {
    set({ articlesStats: new Map(), isArticleDataFetched: true })
  },
}))