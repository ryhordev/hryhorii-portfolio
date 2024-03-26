import { FC, useEffect, useState } from "react";
import me from "../../assets/me.jpg";

import './index.css'

const START_YEAR = 2022;

export const Welcome: FC = () => {
    const [expYears, setExpYears] = useState<number>();

    useEffect(() => {
        setExpYears(new Date().getFullYear() - START_YEAR)
    }, []);

    return (
        <div className="main">
            <img src={me} className="main-me-image"></img>
            <h1 className="main-text">Hryhorii Petrenko</h1>

            <h2>Full Stack Developer | .NET + React</h2>
            <h2>Over {expYears} years of professional experience</h2>

            <div className="main-btn-container">
                <button className="btn">Projects</button>
                <button className="btn">Articles</button>
            </div>
        </div>
    );
}