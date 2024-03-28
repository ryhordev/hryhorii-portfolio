import { FC } from "react";
import './index.css';
import React from "react";


interface IActivityProps {
    data: Map<Date, number>;
}

const Activity: FC<IActivityProps> = ({ data }) => {
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 1);

    const sundays: JSX.Element[] = [<td></td>];
    const mondays: JSX.Element[] = [<td className="activity-day"><span className="day-name">Mon</span></td>];
    const tuesdays: JSX.Element[] = [<td></td>];
    const wednesdays: JSX.Element[] = [<td className="activity-day"><span className="day-name">Wed</span></td>];
    const thursdays: JSX.Element[] = [<td></td>];
    const fridays: JSX.Element[] = [<td className="activity-day"><span className="day-name">Fri</span></td>];
    const saturdays: JSX.Element[] = [<td></td>];
    const months: string[] = [];

    const daysOfWeek: [string, JSX.Element[]][] = [
        ["Sunday", sundays],
        ["Monday", mondays],
        ["Tuesday", tuesdays],
        ["Wednesday", wednesdays],
        ["Thursday", thursdays],
        ["Friday", fridays],
        ["Saturday", saturdays]
    ];

    // Move currentDate to the first day of the week (Monday)
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1);

    // If the first day of the week is not Monday, insert empty <td> elements for preceding days
    for (let i = 0; i < currentDate.getDay(); i++) {
        daysOfWeek[i][1].push(<td key={i} className="activity-day"></td>);
    }

    // Loop through dates from one year ago up to the current date
    while (currentDate <= new Date()) {
        const element = <td key={currentDate.toISOString()} className="activity-day fill" aria-label={currentDate.toDateString()}></td>;

        daysOfWeek[currentDate.getDay()][1].push(element);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return (
        <div className="activity-container">
            <table className="activity-table">
                <thead>
                    <tr>
                        <th></th>
                        {months.map(m =>
                            <th key={m} colSpan={4} className="header-month"><span className="month-name">{m}</span></th>
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
    );
}

export const MemorizedActivity = React.memo((props: IActivityProps) => <Activity data={props.data} />)
