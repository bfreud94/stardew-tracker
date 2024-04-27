import { FC } from 'react'
import { CalendarDayProps } from './CalendarDay.types'
import makeStyles from './CalendarDay.styles'

const CalendarDay: FC<CalendarDayProps> = ({ day }) => {
	const styles = makeStyles()
	return (
		<div style={styles.day}>
			<p style={styles.dayNumber}>{day}</p>
		</div>
	)
}

export default CalendarDay
