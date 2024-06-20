import { FC } from 'react'
import { createMonthWithWeeks } from '../../../util'
import CalendarRow from '../CalendarRow/CalendarRow'
import { CalendarBodyProps } from './CalendarBody.types'

const CalendarBody: FC<CalendarBodyProps> = ({
	season
}) => {
	const months = createMonthWithWeeks()
	return (
		<>
			{months.map((week, index) => (
				<CalendarRow key={index} season={season} week={week} />
			))}
		</>
	)
}

export default CalendarBody
