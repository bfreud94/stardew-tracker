import { FC } from 'react'
import { DAYS } from '../../../constants'
import makeStyles from './CalendarWeekHeader.styles'

const CalendarWeekHeader: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.header}>
			{DAYS.map((day: string) => (
				<div key={day} style={styles.row}>
					{day}
				</div>
			))}
		</div>
	)
}

export default CalendarWeekHeader
