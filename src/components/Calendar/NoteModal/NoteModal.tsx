import { FC } from 'react'
import { Modal, Box } from '@mui/material'
import NoteModalBody from './NoteModalBody/NoteModalBody'
import NoteModalHeader from './NoteModalHeader/NoteModalHeader'
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
		<Modal disableAutoFocus open={open} onClose={() => setOpen(false)}>
			<Box sx={styles.noteModal}>
				<NoteModalHeader day={day} season={season} />
				<NoteModalBody day={day} season={season} />
			</Box>
		</Modal>
	)
}

export default NoteModal
