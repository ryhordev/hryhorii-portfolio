import { FC } from "react"

import "./App.css"

export const App: FC = () => {
  return (
    <div className="main">
      <h1 className="main-text">Hryhorii Petrenko</h1>
      <h2>Full Stack Developer | .NET + React</h2>

      <div className="contact-button-container">
        <button className="contact-button btn-primary btn">
          Contact
        </button>
      </div>
    </div>
  )
}

export default App
