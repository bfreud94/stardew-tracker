import { FC } from 'react'
import makeStyles from './CalendarWeekHeader.styles'

const CalendarWeekHeader: FC = () => {
	const styles = makeStyles()
	const days = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su']
	return (
		<div style={styles.header}>
			{days.map((day, index) => (
				<div key={index} style={styles.row}>
					{day}
				</div>
			))}
		</div>
	)
}

export default CalendarWeekHeader
