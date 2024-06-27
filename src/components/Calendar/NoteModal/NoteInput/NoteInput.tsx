import { FC } from 'react'
import makeStyles from './NoteInput.styles'
import { NoteInputProps } from './NoteInput.types'

const NoteInput: FC<NoteInputProps> = ({
	note,
	setNote
}) => {
	const styles = makeStyles()
	return (
		<input type='text'
			placeholder='Enter your note here'
			style={styles.noteInput} value={note}
			onChange={(e) => setNote(e.target.value)}
		/>
	)
}

export default NoteInput
