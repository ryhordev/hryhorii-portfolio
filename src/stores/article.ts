import { create } from 'zustand'

interface IArticle {

}

interface ArticleState {
  articles: IArticle[];
  articlesStats: Map<Date, number>;
  isArticleDataFetched: boolean;

  fetchArticleData: () => Promise<void>
}

export const useArticleStore = create<ArticleState>()((set) => ({
  articles: [],
  articlesStats: new Map<Date, number>(),
  isArticleDataFetched: false,

  async fetchArticleData() {
    set({ articlesStats: new Map([[new Date(), 10]]), isArticleDataFetched: true })
  },
}))