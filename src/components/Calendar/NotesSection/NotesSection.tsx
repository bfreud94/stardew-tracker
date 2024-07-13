import { FC } from 'react'
import { getNotesForDay } from '../../../util'
import makeStyles from './NotesSection.styles'
import { NotesSectionProps } from './NotesSection.types'

const NotesSection: FC<NotesSectionProps> = ({
	day,
	season
}) => {
	const styles = makeStyles()
	const savedNotes = getNotesForDay(day, season)
	return (
		<div>
			{savedNotes.map((savedNote: string, index: number) => (
				<p key={index} style={styles.noteText}>
					{savedNote}
				</p>
			))}
		</div>
	)
}

export default NotesSection
