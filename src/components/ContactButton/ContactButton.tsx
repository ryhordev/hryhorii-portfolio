import { FC } from "react";
import './index.css'

export const ContactButton: FC = () => {
    return (
        <div className="contact-btn-container">
            <button id='contact-btn' className="btn-primary">
                Contact
            </button>
        </div>
    );
}