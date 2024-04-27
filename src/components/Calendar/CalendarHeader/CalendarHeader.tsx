import { FC } from 'react'
import makeStyles from './CalendarHeader.styles'

const CalendarHeader: FC = () => {
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

export default CalendarHeader
