import { FC } from "react"
//import gitIcon from './assets/github.svg';

import "./App.css"

export const App: FC = () => {
  return (
    <>
      {/* <div className="header">
        <button className="btn btn-icon">
          {gitIcon}
        </button>
      </div> */}

      <div className="main">
        <h1 className="main-text">Hryhorii Petrenko</h1>
        <h2>Full Stack Developer | .NET + React</h2>
        <h2>More then 2 years of commercial experience</h2>

        <button className="btn btn-primary m-2">Ask Question</button>
        <div className="contact-button-container">
          <button className="contact-button btn-primary btn">
            Contact
          </button>
        </div>
      </div>
    </>

  )
}

export default App
