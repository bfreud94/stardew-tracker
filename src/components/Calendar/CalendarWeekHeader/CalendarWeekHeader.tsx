import { FC } from 'react'
import { DAYS } from '../../../constants'
import makeStyles from './CalendarWeekHeader.styles'

const CalendarWeekHeader: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.header}>
			{DAYS.map((day, index) => (
				<div key={index} style={styles.row}>
					{day}
				</div>
			))}
		</div>
	)
}

export default CalendarWeekHeader
