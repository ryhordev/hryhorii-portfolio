import { FC } from "react";
import './index.css'

interface PrimaryButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    id?: string;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({ id, text, className, onClick }) => {
    return (
        <button id={id} className={`btn-primary ${className ?? ''}`} onClick={onClick}>
            {text}
        </button>
    );
}