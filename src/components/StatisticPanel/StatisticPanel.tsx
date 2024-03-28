import { FC, useState } from "react";
import { Button } from "../Button";
import { MemorizedActivity } from "../Activity";
import { Spinner } from "../Spinner";
import { Text } from "../Text";

import './index.css'

interface IPanelStats {
    git: Map<Date, number>;
    article: Map<Date, number>;
}

export const StatisticPanel: FC = () => {
    const [isPanelOpen, setPanelOpen] = useState<boolean>(false);
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const [stats, setStats] = useState<IPanelStats>();

    const onClick = async () => {
        if (isPanelOpen) {
            document.getElementById("panel-overlay")?.remove();
        }
        else {
            if (!isFetched) {
                await fetchStatistic();
            }

            const el = document.createElement('div')
            el.id = "panel-overlay";
            document.body.append(el);
        }

        setPanelOpen(!isPanelOpen)
    }

    const fetchStatistic = async () => {
        Promise.all([getGitStats(), getArticleStats()]).then(v => {
            setStats({ git: v[0], article: v[1] })
            setIsFetched(true)
        })
    }

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const getGitStats = async (): Promise<Map<Date, number>> => {
        await delay(2000);
        return new Map<Date, number>();
    }

    const getArticleStats = async (): Promise<Map<Date, number>> => {
        const map = new Map<Date, number>();
        map.set(new Date(), 10);
        return map;
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
                {isPanelOpen && stats &&
                    <div className="panel-stats">
                        <div className="panel-activity">
                            <Text
                                text="Git Activity"
                                variant="large"
                                className="panel-stats-text"
                            />
                            <MemorizedActivity data={stats.git} />
                        </div>
                        <div className="panel-activity">
                            <Text
                                text="Article Activity"
                                variant="large"
                                className="panel-stats-text"
                            />
                            <MemorizedActivity data={stats.article} />
                        </div>
                    </div>
                }

                {isPanelOpen && !isFetched &&
                    <div className="panel-loading">
                        <Spinner variant="large" />
                        <Text
                            text="Loading, please wait"
                            variant="large"
                            className="panel-loading-text"
                        />
                    </div>
                }
            </div>
        </div>
    );
}