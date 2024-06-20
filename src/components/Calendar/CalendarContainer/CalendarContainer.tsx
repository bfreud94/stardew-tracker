import { FC } from 'react'
import { getCurrentSeason } from '../../../util'
import Header from '../../Header/Header'
import Calendar from '../../Calendar/Calendar'
import makeStyles from './CalendarContainer.styles'

const CalendarContainer: FC = () => {
	const styles = makeStyles()
	const season = getCurrentSeason()
	return (
		<div style={styles.container}>
			<Header season={season} />
			<Calendar season={season} />
		</div>
	)
}

export default CalendarContainer
