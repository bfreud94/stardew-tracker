import { FC } from 'react'
import Calendar from '../../Calendar/Calendar'
import CalendarHeader from '../CalendarHeader/CalendarHeader'
import makeStyles from './CalendarContainer.styles'
import { CalendarContainerProps } from './CalendarContainer.types'

const CalendarContainer: FC<CalendarContainerProps> = ({
	season,
	setSeason
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.container}>
			<CalendarHeader season={season} setSeason={setSeason} />
			<Calendar season={season} />
		</div>
	)
}

export default CalendarContainer
