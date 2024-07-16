import { FC, useState } from 'react'
import { Box, Button, Modal } from '@mui/material'
import AffinitiesContainer from '../../Calendar/NoteModal/AffinitiesContainer/AffinitiesContainer'
import ImageComponent from '../../ImageComponent/ImageComponent'
import { SEASON_ID_MAP } from '../../../constants'
import { getAffinitiesButtonText } from '../../../util'
import makeStyles from './VillagerModal.styles'
import { VillagerModalProps } from './VillagerModal.types'

const VillagerModal: FC<VillagerModalProps> = ({
	open,
	setOpen,
	villager
}) => {
	const [showAffinities, setShowAffinities] = useState(false)
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
				<div style={styles.affinitiesContainer}>
					<h1>Affinities</h1>
					<Button
						color='primary'
						disableRipple
						style={styles.affinitiesButton}
						sx={styles.affinitiesButtonSx}
						variant='outlined'
						onClick={() => setShowAffinities(!showAffinities)}>
						{getAffinitiesButtonText(showAffinities)}
					</Button>
				</div>
				{showAffinities && <AffinitiesContainer variant='h6' villager={villager} />}
			</Box>
		</Modal>
	)
}

export default VillagerModal
