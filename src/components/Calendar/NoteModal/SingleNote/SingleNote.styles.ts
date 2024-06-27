import { SingleNoteStyles } from './SingleNote.types'

const makeStyles = (): SingleNoteStyles => ({
	note: {
		margin: '0px 0px 0px 10px'
	},
	noteContainer: {
		alignItems: 'center',
		display: 'flex'
	},
	noteDeleteIcon: {
		cursor: 'pointer',
		fontSize: '16px'
	}
})

export default makeStyles
