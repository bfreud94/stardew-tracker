import { FC } from 'react'
import ImageComponent from '../../ImageComponent/ImageComponent'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import makeStyles from './NoteModal.styles'
import { NoteModalProps } from './NoteModal.types'
import { Typography } from '@mui/material'

const BirthdaySection = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between'}}>
			<ImageComponent altText='Birthday' fileName='/Birthday.png' height='37px' width='29px' />
			<Typography style={{ alignSelf: 'center', textAlign: 'center', fontSize: '18px', fontFamily: 'SVFont' }} variant='h6'>Birthday</Typography>
		</div>
	)
}

const NoteModal: FC<NoteModalProps> = ({
	birthday,
	open,
	handleClose
}) => {
	const styles = makeStyles()
	const images = ['Birthday', 'Stardrop', 'Gold', 'SecretNote', 'Flag']
	return (
		<div>
			<Modal open={open} onClose={handleClose}>
				<Box sx={styles.noteModal}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						{images.map((image, index) => (
							<ImageComponent style={{ margin: '0px 0px 40px 0px' }} altText={image} fileName={`/${image}.png`} height='36px' width='36px' key={index} />
						))}
					</div>
				</Box>
			</Modal>
		</div>
	)
}

export default NoteModal
