import { FC, useEffect, useState } from "react";
import { Button } from "../Button";
import './index.css'

export const StatisticButton: FC = () => {
    const [isPanelOpen, setPanelOpen] = useState<boolean>(false);
    const [openPercentage, setOpenPercentage] = useState<string>('');

    useEffect(() => {
        setOpenPercentage(window.screen.width < 600 ? '80%' : '40%');
    }, [])

    const onClick = () => {
        if (isPanelOpen) {
            document.getElementById("panel-overlay")?.remove();
        }
        else {
            const el = document.createElement('div')
            el.id = "panel-overlay";
            document.body.append(el);
        }

        setPanelOpen(!isPanelOpen)
    }

    return (
        <div className={`panel-container`} style={{ width: isPanelOpen ? openPercentage : '0' }}>
            <div className="statistic-btn-container">
                <Button
                    className="statistic-btn"
                    text="Statistics"
                    onClick={onClick}
                    variant="primary"
                />
            </div>
        </div>
    );
}