import { FC, useState } from "react";
import './index.css'
import { Panel } from "../../Panel";
import { PrimaryButton } from "../PrimaryButton";

export const ContactButton: FC = () => {
    const [isPanelOpen, setPanelOpen] = useState<boolean>(false);

    return (
        <>
            <div className="contact-btn-container">
                <PrimaryButton
                    id="contact-btn"
                    text="Contact"
                    onClick={() => setPanelOpen(true)}
                />
            </div>

            <Panel isOpen={isPanelOpen}>

            </Panel>
        </>
    );
}