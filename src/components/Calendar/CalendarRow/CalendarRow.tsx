import { FC } from 'react'
import CalendarDay from '../CalendarDay/CalendarDay'
import { CalendarRowProps } from './CalendarRow.types'
import makeStyles from './CalendarRow.styles'

const CalendarRow: FC<CalendarRowProps> = ({
	season,
	week
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.row}>
			{week.map((day: number) => (
				<CalendarDay key={day} day={day} season={season} />
			))}
		</div>
	)
}

export default CalendarRow
