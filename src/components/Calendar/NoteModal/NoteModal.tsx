import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ImageComponent from '../../ImageComponent/ImageComponent'
import Modal from '@mui/material/Modal'
import makeStyles from './NoteModal.styles'
import { NoteModalProps } from './NoteModal.types'

const NoteModal: FC<NoteModalProps> = ({
	open,
	handleClose
}) => {
	const styles = makeStyles()
	return (
		<div>
			<Modal open={open} onClose={handleClose}>
				<Box sx={styles.noteModal}>
					<Typography style={{ fontFamily: 'SVFont' }} id='modal-modal-title' variant='h6' component='h2'>
						<ImageComponent altText='Birthday' fileName='/Birthday.png' height='37px' width='29px' />
						<ImageComponent altText='Stardrop' fileName='/Stardrop.png' height='36px' width='36px' />
						<ImageComponent altText='Gold' fileName='/Gold.png' height='36px' width='36px' />
						<ImageComponent altText='Secret Note' fileName='/SecretNote.png' height='36px' width='36px' />
						<ImageComponent altText='Flag' fileName='/Flag.png' height='32px' width='32px' />
					</Typography>
				</Box>
			</Modal>
		</div>
	)
}

export default NoteModal
