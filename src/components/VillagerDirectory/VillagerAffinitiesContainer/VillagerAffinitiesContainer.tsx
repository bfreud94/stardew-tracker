import { FC, useState } from 'react'
import { Button } from '@mui/material'
import { getAffinitiesButtonText } from '../../../util'
import AffinitiesContainer from '../../Calendar/NoteModal/AffinitiesContainer/AffinitiesContainer'
import makeStyles from './VillagerAffinitiesContainer.styles'
import { VillagerAffinitiesContainerProps } from './VillagerAffinitiesContainer.types'

const VillagerAffinitiesContainer: FC<VillagerAffinitiesContainerProps> = ({
	villager
}) => {
	const [showAffinities, setShowAffinities] = useState(false)
	const styles = makeStyles()
	return (
		<>
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
		</>
	)
}

export default VillagerAffinitiesContainer