import { FC } from 'react'
import { data } from '../../api'
import makeStyles from './RandomEvents.styles'

const RandomEvents: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.randomEventsContainer}>
			{data.randomEvents.map((event) => (
				<div key={event.name}>
					<h2 style={styles.randomEventsHeader}>{event.name}</h2>
					<p>{event.description}</p>
					<p style={styles.randomEventsOdds}>Odds: {event.odds}</p>
				</div>
			))}
		</div>
	)
}

export default RandomEvents
