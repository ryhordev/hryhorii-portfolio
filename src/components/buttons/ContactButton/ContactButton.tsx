import { FC, useState } from "react";
import './index.css'
import { Panel } from "../../Panel";
import { Button } from "../Button";

export const ContactButton: FC = () => {
    const [isPanelOpen, setPanelOpen] = useState<boolean>(false);

    return (
        <>
            <div className="contact-btn-container">
                <Button
                    className="contact-btn"
                    text="Contact"
                    onClick={() => setPanelOpen(true)}
                    variant="primary"
                />
            </div>

            <Panel isOpen={isPanelOpen}>

            </Panel>
        </>
    );
}