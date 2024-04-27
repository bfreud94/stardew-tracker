import { FC } from 'react'
import CalendarDay from '../CalendarDay/CalendarDay'
import { CalendarRowProps } from './CalendarRow.types'
import makeStyles from './CalendarRow.styles'

const CalendarRow: FC<CalendarRowProps> = ({ week }) => {
	const styles = makeStyles()
	return (
		<div style={styles.row}>
			{week.map((day, index) => (
				<CalendarDay key={index} day={day} />
			))}
		</div>
	)
}

export default CalendarRow
