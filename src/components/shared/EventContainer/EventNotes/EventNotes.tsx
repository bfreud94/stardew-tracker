import { FC } from 'react'
import ImageComponent from '../../../ImageComponent/ImageComponent'
import makeStyles from './EventNotes.styles'
import { EventNotesProps } from './EventNotes.types'

const EventNotes: FC<EventNotesProps> = ({
	event
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.eventNoteContainer}>
			<span>Notes:</span>
			{event.notes.map((note: string, index: number) => (
				note.includes('IMAGE') ? (
					<ImageComponent
						key={index}
						altText='Egg Hunt Map'
						fileName={note.split(':')[1]}
						height='600px'
						width='600px'
					/>
				) : (
					<pre key={index} style={styles.note}>{note}</pre>
				)
			))}
		</div>
	)
}

export default EventNotes
