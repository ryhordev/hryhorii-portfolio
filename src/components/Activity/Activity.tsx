import { FC } from "react";
import React from "react";
import './index.css';


interface IActivityProps {
    data: Map<Date, number>;
    description: string;
}

const Activity: FC<IActivityProps> = ({ data, description }) => {
    const sundays: JSX.Element[] = [<td key='sun' className="week-td"></td>];
    const mondays: JSX.Element[] = [<td key='mon' className="week-td"><span className="week-span">Mon</span></td>];
    const tuesdays: JSX.Element[] = [<td key='tue' className="week-td"></td>];
    const wednesdays: JSX.Element[] = [<td key='wed' className="week-td"><span className="week-span">Wed</span></td>];
    const thursdays: JSX.Element[] = [<td key='thu' className="week-td"></td>];
    const fridays: JSX.Element[] = [<td key='fri' className="week-td"><span className="week-span">Fri</span></td>];
    const saturdays: JSX.Element[] = [<td key='sat' className="week-td"></td>];

    const daysOfWeek: JSX.Element[][] = [sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays];

    const nextYearFirstDate = new Date();
    nextYearFirstDate.setFullYear(nextYearFirstDate.getFullYear() + 1);
    nextYearFirstDate.setMonth(0);
    nextYearFirstDate.setDate(1);
    nextYearFirstDate.setHours(0, 0, 0, 0);

    let date = new Date(nextYearFirstDate);
    date.setFullYear(date.getFullYear() - 1);

    for (let i = 0; i < date.getDay(); i++) {
        daysOfWeek[i].push(<td key={`${i}-empty`} className="activity-day"></td>);
    }

    const dataValues = new Map<number, number>([...data.entries()].map(([k, v]) => [k.setHours(0, 0, 0, 0).valueOf(), v]));

    while (date <= nextYearFirstDate) {
        const value = dataValues.get(date.valueOf()) ?? 0;
        const lvl = value > 3 ? 3 : value;
        const element = <td key={date.toISOString()} className={`activity-day fill-lvl${lvl}`} aria-label={date.toDateString()}></td>;

        daysOfWeek[date.getDay()].push(element);
        date.setDate(date.getDate() + 1);
    }

    const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="activity-container">
            <div className="activity-table-container">
                <table className="activity-table">
                    <thead>
                        <tr>
                            <th colSpan={1} />
                            {shortMonths.map((m, i) =>
                                <th colSpan={i % 2 === 0 ? 4 : 5} key={`month-${i}`}>
                                    <span className="activity-month-span">{m}</span>
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="activity-day-row">{sundays}</tr>
                        <tr className="activity-day-row">{mondays}</tr>
                        <tr className="activity-day-row">{tuesdays}</tr>
                        <tr className="activity-day-row">{wednesdays}</tr>
                        <tr className="activity-day-row">{thursdays}</tr>
                        <tr className="activity-day-row">{fridays}</tr>
                        <tr className="activity-day-row">{saturdays}</tr>
                    </tbody>
                </table>
            </div>

            <div className="legend">
                <div className="legend-desc-container">
                    <span className="legend-description">{description}</span>
                </div>
                <div className="example">
                    <span className="example-lvl-span mr-2">Less</span>
                    <div className="example-lvl-container fill-lvl0" />
                    <div className="example-lvl-container fill-lvl1" />
                    <div className="example-lvl-container fill-lvl2" />
                    <div className="example-lvl-container fill-lvl3" />
                    <span className="example-lvl-span ml-2">More</span>
                </div>
            </div>
        </div>
    );
}

export const MemorizedActivity = React.memo((props: IActivityProps) => <Activity data={props.data} description={props.description} />)
