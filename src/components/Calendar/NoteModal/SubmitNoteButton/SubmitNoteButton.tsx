import { FC } from 'react'
import { saveNote } from '../../../../util'
import makeStyles from './SubmitNoteButton.styles'
import { SubmitNoteButtonProps } from './SubmitNoteButton.types'

const SubmitNoteButton: FC<SubmitNoteButtonProps> = ({
	day,
	note,
	setNote,
	season
}) => {
	const styles = makeStyles()
	return (
		<button
			style={styles.noteButton}
			onClick={() => saveNote(day, note, season, setNote)}>
			Save
		</button>
	)
}

export default SubmitNoteButton
