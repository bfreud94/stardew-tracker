import { NoteModalStyles } from './NoteModal.types'

const makeStyles = (): NoteModalStyles => ({
	noteModal: {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		height: 600,
		width: 600,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: '24',
		p: 4
	}
})

export default makeStyles
