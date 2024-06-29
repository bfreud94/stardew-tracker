import { NoteModalStyles } from './NoteModal.types'

const makeStyles = (): NoteModalStyles => ({
	noteModal: {
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: '24',
		height: 600,
		left: '50%',
		p: 4,
		position: 'absolute' as 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: 600
	}
})

export default makeStyles
