import { FC, useState } from 'react'
import { Button } from '@mui/material'
import EventDetails from './EventDetails/EventDetails'
import ImageComponent from '../../ImageComponent/ImageComponent'
import { getButtonText } from '../../../util'
import makeStyles from './EventContainer.styles'
import { EventContainerProps } from './EventContainer.types'

const EventContainer: FC<EventContainerProps> = ({
	event
}) => {
	const [showEventDetails, setShowEventDetails] = useState<boolean>(false)
	const styles = makeStyles()
	return (
		<div style={styles.eventContainer}>
			<div style={styles.eventInformationContainer}>
				<ImageComponent altText='Event' fileName={event.icon} />
				<p style={styles.eventText}>Today is the {event.name}</p>
				<Button
					color='primary'
					disableRipple
					style={styles.eventButton}
					sx={styles.eventButtonSx}
					variant='outlined'
					onClick={() => setShowEventDetails(!showEventDetails)}
				>
					{getButtonText(showEventDetails, 'Event Details')}
				</Button>
			</div>
			{showEventDetails && <EventDetails event={event} />}
		</div>
	)
}

export default EventContainer
