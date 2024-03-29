export const getFirstDate = () => {
    const firstJanuaryPrevYear = new Date();
    firstJanuaryPrevYear.setMonth(0);
    firstJanuaryPrevYear.setDate(1);
    firstJanuaryPrevYear.setHours(0, 0, 0, 0);

    return firstJanuaryPrevYear;
}