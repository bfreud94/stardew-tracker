
import { FC } from 'react'
import makeStyles from './Calendar.styles'
import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarBody from './CalendarBody/CalendarBody'
import { CalendarProps } from './Calendar.types'

const Calendar: FC<CalendarProps> = ({
	season
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.calendar}>
			<CalendarHeader />
			<CalendarBody season={season} />
		</div>
	)
}

export default Calendar
