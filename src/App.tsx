import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Welcome } from "./components/Welcome"
import { Header } from "./components/Header"
import { ContactButton } from "./components/ContactButton"

import "./App.css"

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Welcome} />
      </Routes>
      <ContactButton />
    </BrowserRouter>
  )
}

export default App
