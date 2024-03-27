import { FC, useEffect, useState } from "react";
import { Button } from "../Button";
import { IGraphicProps } from "../Graphic";
import { Text } from "../Text";

import './index.css'
import { Spinner } from "../Spinner";

interface IStats {
    git: IGraphicProps;
    article: IGraphicProps;
}

export const StatisticPanel: FC = () => {
    const [isPanelOpen, setPanelOpen] = useState<boolean>(false);
    const [openPercentage, setOpenPercentage] = useState<string>('');
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const [stats, setStats] = useState<IStats>();

    useEffect(() => {
        setOpenPercentage(window.screen.width < 600 ? '80%' : '40%');
    }, [])

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

    const getGitStats = async (): Promise<IGraphicProps> => {
        await delay(2000);
        console.log('done')
        return {}
    }

    const getArticleStats = async (): Promise<IGraphicProps> => {
        return {};
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

            <div className="panel-content">
                {isPanelOpen && stats &&
                    <div>
                        Stats
                    </div>
                }

                {isPanelOpen && !isFetched &&
                    <div className="loading">
                        <Spinner variant="large"/>
                        <Text
                            text="Loading, please wait"
                            variant="medium"
                            className="panel-loading-text"
                        />
                    </div>
                }
            </div>
        </div>
    );
}