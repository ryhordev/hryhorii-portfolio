import { FC, useEffect, useState } from "react";
import me from "../../assets/me.jpg";

import './index.css'
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons/Button";
import { Text } from "../../components/Text";

const START_YEAR = 2022;

export const Main: FC = () => {
    const [expYears, setExpYears] = useState<number>();

    useEffect(() => {
        setExpYears(new Date().getFullYear() - START_YEAR)
    }, []);

    return (
        <div className="main">
            <img src={me} className="main-me-image" />
            <Text text="Hryhorii Petrenko" variant='large' className="main-text" />
            <Text text="Full Stack Developer | .NET + React" variant="medium" />
            <Text text={`Over ${expYears} years of professional experience`} variant="medium" />

            <div className="main-btn-container">
                <Link to='/projects'>
                    <Button text="Projects" />
                </Link>
                <Link to='/articles'>
                    <Button text="Articles" />
                </Link>
            </div>
        </div>
    );
}