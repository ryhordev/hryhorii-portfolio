import { FC } from "react";
import { Link } from "react-router-dom";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import './index.css'

export const NotFound: FC = () => {
    return (
        <div className="main not-found-page">
            <Text text="Even the things we love break sometimes" variant="large" />
            <Link to='/'>
                <Button text="Get me out"/>
            </Link>
        </div>
    );
}