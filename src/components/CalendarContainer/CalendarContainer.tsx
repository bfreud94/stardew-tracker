import { FC } from 'react'
import Header from '../Header/Header'
import Calendar from '../Calendar/Calendar'
import makeStyles from './CalendarContainer.styles'

const CalendarContainer: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.container}>
			<Header />
			<Calendar />
		</div>
	)
}

export default CalendarContainer
