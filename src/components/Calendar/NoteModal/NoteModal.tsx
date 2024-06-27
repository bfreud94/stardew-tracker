import { FC } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import NoteModalHeader from './NoteModalHeader/NoteModalHeader'
import NoteModalBody from './NoteModalBody/NoteModalBody'
import makeStyles from './NoteModal.styles'
import { NoteModalProps } from './NoteModal.types'

const NoteModal: FC<NoteModalProps> = ({
	day,
	open,
	season,
	setOpen
}) => {
	const styles = makeStyles()
	return (
		<div>
			<Modal open={open} onClose={() => setOpen(false)}>
				<Box sx={styles.noteModal}>
					<NoteModalHeader />
					<NoteModalBody day={day} season={season} />
				</Box>
			</Modal>
		</div>
	)
}

export default NoteModal
