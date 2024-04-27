import { FC } from 'react'
import { createMonthWithWeeks } from '../../../util'
import CalendarRow from '../CalendarRow/CalendarRow'

const CalendarBody: FC = () => {
	const months = createMonthWithWeeks()
	return (
		<>
			{months.map((week, index) => (
				<CalendarRow key={index} week={week} />
			))}
		</>
	)
}

export default CalendarBody
