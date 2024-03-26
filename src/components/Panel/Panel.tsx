import { FC } from "react";

interface IPanelProps {
    className?: string;
    isOpen: boolean;
}

export const Panel: FC<IPanelProps> = ({className}) => {
    return (
        <div className={`panel ${className}`}>

        </div>
    );
}