import { FC } from 'react'
import makeStyles from './NoteInput.styles'
import { NoteInputProps } from './NoteInput.types'

const NoteInput: FC<NoteInputProps> = ({
	note,
	setNote
}) => {
	const styles = makeStyles()
	return (
		<input
			onChange={(e) => setNote(e.target.value)}
			placeholder='Enter your note here'
			style={styles.noteInput}
			value={note}
		/>
	)
}

export default NoteInput
