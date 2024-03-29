import { FC, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Main } from "./pages/Main"
import { NotFound } from "./pages/NotFound"
import { Header } from "./components/Header"
import { StatisticPanel } from "./components/StatisticPanel"
import { useGitStore } from "./stores/git"
import { useArticleStore } from "./stores/article"

import "./App.css"

export const App: FC = () => {
  const { fetchGitData } = useGitStore();
  const { fetchArticleData } = useArticleStore();

  useEffect(() => {
    fetchGitData();
    fetchArticleData();
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <StatisticPanel />
    </BrowserRouter>
  )
}

export default App
