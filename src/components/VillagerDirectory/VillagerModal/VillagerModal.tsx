import { FC } from 'react'
import { Box, Modal } from '@mui/material'
import VillagerAffinitiesContainer from '../VillagerAffinitiesContainer/VillagerAffinitiesContainer'
import VillagerScheduleContainer from '../VillagerScheduleContainer/VillagerScheduleContainer'
import VillagerMetaData from '../VillagerMetaData/VillagerMetaData'
import makeStyles from './VillagerModal.styles'
import { VillagerModalProps } from './VillagerModal.types'

const VillagerModal: FC<VillagerModalProps> = ({
	open,
	setOpen,
	villager
}) => {
	const styles = makeStyles()
	return (
		<Modal disableAutoFocus open={open} onClose={() => setOpen(false)}>
			<Box sx={styles.villagerModal}>
				<VillagerMetaData villager={villager} />
				<VillagerAffinitiesContainer villager={villager} />
				<VillagerScheduleContainer villager={villager} />
			</Box>
		</Modal>
	)
}

export default VillagerModal
