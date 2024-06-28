
import { FC } from 'react'
import makeStyles from './Calendar.styles'
import CalendarBody from './CalendarBody/CalendarBody'
import CalendarWeekHeader from './CalendarHeader/CalendarWeekHeader'
import { CalendarProps } from './Calendar.types'

const Calendar: FC<CalendarProps> = ({
	season
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.calendar}>
			<CalendarWeekHeader />
			<CalendarBody season={season} />
		</div>
	)
}

export default Calendar
