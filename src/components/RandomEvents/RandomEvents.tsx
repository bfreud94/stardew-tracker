import { FC } from 'react'
import { data } from '../../api'
import makeStyles from './RandomEvents.styles'

const RandomEvents: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.randomEventsContainer}>
			{data.randomEvents.map((event) => (
				<div key={event.name}>
					<h2>{event.name}</h2>
					<p>{event.description}</p>
					<p>Odds: {event.odds}</p>
				</div>
			))}
		</div>
	)
}

export default RandomEvents
