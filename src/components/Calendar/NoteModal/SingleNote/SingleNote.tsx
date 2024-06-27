import { FC } from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { deleteNote } from '../../../../util'
import makeStyles from './SingleNote.styles'
import { SingleNoteProps } from './SingleNote.types'

const SingleNote: FC<SingleNoteProps> = ({
	day,
	note,
	season,
	setNote
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.noteContainer}>
			<RemoveCircleOutlineIcon color='error' sx={styles.noteDeleteIcon} onClick={() => deleteNote(day, note, season, setNote)} />
			<p style={styles.note}>{note}</p>
		</div>
	)
}


export default SingleNote
