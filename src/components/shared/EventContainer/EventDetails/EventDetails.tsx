import { FC } from 'react'
import EventNotes from '../EventNotes/EventNotes'
import makeStyles from './EventDetails.styles'
import { EventDetailsProps } from './EventDetails.types'

const EventDetails: FC<EventDetailsProps> = ({
	event
}) => {
	const styles = makeStyles()
	return (
		<div>
			<p style={styles.zeroMargin}>Location: {event.location}</p>
			<p style={styles.zeroMargin}>Start: {event.time.start}</p>
			<p style={styles.zeroMargin}>End: {event.time.end}</p>
			<EventNotes event={event} />
		</div>
	)
}

export default EventDetails
