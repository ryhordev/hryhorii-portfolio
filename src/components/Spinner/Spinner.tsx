import { FC } from "react";
import './index.css'

interface ISpinnerProps {
    variant?: 'large' | 'medium'
}

export const Spinner: FC<ISpinnerProps> = ({ variant }) => {
    return (<div className={`spinner spinner-${variant ?? 'medium'}`} />);
}