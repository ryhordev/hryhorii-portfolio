import { FC } from "react";
import './index.css'

interface ButtonProps {
    id?: string;
    text: string;
    onClick?: () => void;
    className?: string;
}

export const Button: FC<ButtonProps> = ({ id, text, className, onClick }) => {
    return (
        <button id={id} className={`btn ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}