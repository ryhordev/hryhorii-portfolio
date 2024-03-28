import { FC } from "react";
import React from "react";
import './index.css';


interface IActivityProps {
    data: Map<Date, number>;
}

const Activity: FC<IActivityProps> = ({ data }) => {
    const sundays: JSX.Element[] = [<td key='sun' className="week-td"></td>];
    const mondays: JSX.Element[] = [<td key='mon' className="week-td"><span className="week-span">Mon</span></td>];
    const tuesdays: JSX.Element[] = [<td key='tue' className="week-td"></td>];
    const wednesdays: JSX.Element[] = [<td key='wed' className="week-td"><span className="week-span">Wed</span></td>];
    const thursdays: JSX.Element[] = [<td key='thu' className="week-td"></td>];
    const fridays: JSX.Element[] = [<td key='fri' className="week-td"><span className="week-span">Fri</span></td>];
    const saturdays: JSX.Element[] = [<td key='sat' className="week-td"></td>];

    const daysOfWeek: [string, JSX.Element[]][] = [
        ["Sunday", sundays],
        ["Monday", mondays],
        ["Tuesday", tuesdays],
        ["Wednesday", wednesdays],
        ["Thursday", thursdays],
        ["Friday", fridays],
        ["Saturday", saturdays]
    ];

    let date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    date.setHours(0, 0, 0, 0);

    for (let i = 0; i < date.getDay(); i++) {
        daysOfWeek[i][1].push(<td key={`${i}-empty`} className="activity-day"></td>);
    }

    const dataValues = new Map<number, number>([...data.entries()].map(([k, v]) => [k.setHours(0, 0, 0, 0).valueOf(), v]));

    while (date <= new Date()) {
        const value = dataValues.get(date.valueOf());
        const element = <td key={date.toISOString()} className={`activity-day fill-lvl${value ?? 0}`} aria-label={date.toDateString()}></td>;
        daysOfWeek[date.getDay()][1].push(element);
        date.setDate(date.getDate() + 1);
    }

    return (
        <div className="activity-container">
            <table className="activity-table">
                <thead></thead>
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
    );
}

export const MemorizedActivity = React.memo((props: IActivityProps) => <Activity data={props.data} />)
