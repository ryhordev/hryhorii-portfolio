import { FC } from "react";
import me from "../../assets/me.jpg";

import './index.css'

export const Welcome: FC = () => {
    return (
        <div className="main">
            <img src={me} className="main-me-image"></img>
            <h1 className="main-text">Hryhorii Petrenko</h1>
            
            <h2>Full Stack Developer | .NET + React</h2>
            <h2>Over 2 years of professional experience</h2>

            <button className="btn btn-primary main-button">Discover Projects & Articles</button>
        </div>
    );
}