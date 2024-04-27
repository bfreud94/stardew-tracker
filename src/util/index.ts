export const createMonthWithWeeks = (): Array<Array<number>> => {
    let day = 1
    return Array.from({ length: 4 }, () => Array.from({ length: 7 }, () => day++))
}