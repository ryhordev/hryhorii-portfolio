import { FC } from "react";
import './index.css'

interface ButtonProps {
    id?: string;
    text: string;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'default'
}

export const Button: FC<ButtonProps> = ({ id, text, className, variant, onClick }) => {
    return (
        <button id={id} className={`${variant ?? 'default'}-btn ${className ?? ''}`} onClick={onClick}>
            {text}
        </button>
    );
}