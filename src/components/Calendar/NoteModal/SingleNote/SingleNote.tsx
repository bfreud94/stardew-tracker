import { FC } from 'react'
import {
	Edit as EditIcon,
	RemoveCircleOutline as RemoveCircleOutlineIcon
} from '@mui/icons-material'
import { deleteNote, editNote } from '../../../../util'
import makeStyles from './SingleNote.styles'
import { SingleNoteProps } from './SingleNote.types'

const SingleNote: FC<SingleNoteProps> = ({
	day,
	index,
	note,
	season,
	setNote,
	setNoteEditIndex
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.noteContainer}>
			<RemoveCircleOutlineIcon color='error' sx={styles.noteDeleteIcon} onClick={() => deleteNote(day, index, false, season, setNote)} />
			<EditIcon sx={styles.noteEditIcon} onClick={() => editNote(day, index, note, season, setNote, setNoteEditIndex)} />
			<p style={styles.note}>{note}</p>
		</div>
	)
}

export default SingleNote
