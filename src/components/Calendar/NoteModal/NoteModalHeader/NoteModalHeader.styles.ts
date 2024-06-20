import { NoteModalHeaderStyles } from './NoteModalHeader.types'

const makeStyles = (): NoteModalHeaderStyles => ({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '20px'
	},
	notesText: {
		fontFamily: 'SVFont',
		fontSize: '24px'
	}
})

export default makeStyles
