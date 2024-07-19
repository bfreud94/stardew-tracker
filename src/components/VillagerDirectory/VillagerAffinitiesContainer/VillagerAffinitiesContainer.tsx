import { FC, useState } from 'react'
import { Button } from '@mui/material'
import AffinitiesContainer from '../../shared/AffinitiesContainer/AffinitiesContainer'
import { getButtonText } from '../../../util'
import makeStyles from './VillagerAffinitiesContainer.styles'
import { VillagerAffinitiesContainerProps } from './VillagerAffinitiesContainer.types'

const VillagerAffinitiesContainer: FC<VillagerAffinitiesContainerProps> = ({
	villager
}) => {
	const [showAffinities, setShowAffinities] = useState<boolean>(false)
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
					{getButtonText(showAffinities, 'Affinities')}
				</Button>
			</div>
			{showAffinities && <AffinitiesContainer variant='h6' villager={villager} />}
		</>
	)
}

export default VillagerAffinitiesContainer
