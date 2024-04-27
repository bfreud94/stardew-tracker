
import { FC } from 'react'
import makeStyles from './Calendar.styles'
import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarBody from './CalendarBody/CalendarBody'

const Calendar: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.calendar}>
			<CalendarHeader />
			<CalendarBody />
		</div>
	)
}

export default Calendar
