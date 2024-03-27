import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Main } from "./pages/Main"
import { NotFound } from "./pages/NotFound"
import { Header } from "./components/Header"
import { ContactButton } from "./components/buttons/ContactButton"

import "./App.css"

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <ContactButton />
    </BrowserRouter>
  )
}

export default App
