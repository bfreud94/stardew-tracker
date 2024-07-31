import { SingleNoteStyles } from './SingleNote.types'

const makeStyles = (): SingleNoteStyles => ({
	note: {
		margin: '0px 0px 0px 10px'
	},
	noteContainer: {
		alignItems: 'center',
		display: 'flex',
		fontFamily: 'SVFont',
		fontSize: '24px'
	},
	noteDeleteIcon: {
		cursor: 'pointer',
		fontSize: '16px'
	},
	noteEditIcon: {
		cursor: 'pointer',
		fontSize: '16px'
	}
})

export default makeStyles
