import { FC } from "react";
import './index.css'

interface TextProps {
    id?: string;
    text: string;
    className?: string;
    variant?: "medium" | "large"
}

export const Text: FC<TextProps> = ({ id, text, className, variant }) => {
    return (
        <span id={id} className={`${variant ?? ''} ${className ?? ''}`}>
            {text}
        </span>
    );
}