import { FC } from 'react'
import { Box, Modal } from '@mui/material'
import ImageComponent from '../../ImageComponent/ImageComponent'
import { SEASON_ID_MAP } from '../../../constants'
import makeStyles from './VillagerModal.styles'
import { VillagerModalProps } from './VillagerModal.types'
import AffinitiesContainer from '../../Calendar/NoteModal/AffinitiesContainer/AffinitiesContainer'

const VillagerModal: FC<VillagerModalProps> = ({
	open,
	setOpen,
	villager
}) => {
	const styles = makeStyles()
	return (
		<Modal disableAutoFocus open={open} onClose={() => setOpen(false)}>
			<Box sx={styles.villagerModal}>
				<div style={styles.villagerModalHeader}>
					<div>
						<ImageComponent
							altText={villager.name}
							fileName={`/villagers/${villager.name}.png`}
							height='96px'
							width='96px'
						/>
						<p style={styles.zeroMargin}>{villager.name}</p>
					</div>
					<div>
						<p style={styles.villagerBirthday}>Birthday</p>
						<p style={styles.zeroMargin}>Season: {SEASON_ID_MAP[villager.birthday.season]}</p>
						<p style={styles.zeroMargin}>Day: {villager.birthday.day}</p>
					</div>
				</div>
				<h1>Affinities</h1>
				<AffinitiesContainer variant='h6' villager={villager} />
			</Box>
		</Modal>
	)
}

export default VillagerModal
