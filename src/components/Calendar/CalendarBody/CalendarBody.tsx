import { FC } from 'react'
import CalendarRow from '../CalendarRow/CalendarRow'
import { createMonthWithWeeks } from '../../../util'
import { CalendarBodyProps } from './CalendarBody.types'

const CalendarBody: FC<CalendarBodyProps> = ({
	season
}) => {
	const months = createMonthWithWeeks()
	return (
		<>
			{months.map((week: Array<number>) => (
				<CalendarRow key={week[0]} season={season} week={week} />
			))}
		</>
	)
}

export default CalendarBody
