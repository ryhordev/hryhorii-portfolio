import { FC, useState } from "react";
import { Button } from "../Button";
import { MemorizedActivity } from "../Activity";
import { Text } from "../Text";
import { Spinner } from "../Spinner";
import { useGitStore } from "../../stores/git";
import { useArticleStore } from "../../stores/article";

import './index.css'

export const StatisticPanel: FC = () => {
    const [isPanelOpen, setPanelOpen] = useState<boolean>(false);
    const { gitStats, isGitDataFetched } = useGitStore();
    const { articlesStats, isArticleDataFetched } = useArticleStore();

    const onClick = async () => {
        if (isPanelOpen) {
            document.getElementById("panel-overlay")?.remove();
            document.body.classList.remove("body-overflow-hidden");
        }
        else {
            const el = document.createElement('div')
            el.id = "panel-overlay";
            document.body.classList.add("body-overflow-hidden");
            document.body.append(el);
        }

        setPanelOpen(!isPanelOpen)
    }

    return (
        <div className={`panel-container ${isPanelOpen ? 'panel-open' : 'panel-closed'}`}>
            <div className="statistic-btn-container">
                <Button
                    className="statistic-btn"
                    text="Activity"
                    onClick={onClick}
                    variant="primary"
                />
            </div>

            <div className="panel-content">
                {isPanelOpen && (
                    isGitDataFetched && isArticleDataFetched ?
                        <div className="panel-stats">
                            <Text
                                text={`My stats for ${new Date().getFullYear()}`}
                                variant="large"
                                className="panel-stats-text"
                            />
                            <MemorizedActivity data={gitStats} description='Git commits' />
                            <MemorizedActivity data={articlesStats} description='Articles published' />
                        </div>
                        :
                        <div className="panel-loading">
                            <Spinner variant="large" />
                            <Text
                                text="Loading, please wait"
                                variant="large"
                                className="panel-loading-text"
                            />
                        </div>
                )}
            </div>
        </div>
    );
}