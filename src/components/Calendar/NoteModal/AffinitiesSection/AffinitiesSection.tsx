import { FC } from 'react'
import { Typography } from '@mui/material'
import { getAffinityLabel } from '../../../../util'
import makeStyles from './AffinitiesSection.styles'
import { AffinitiesSectionProps } from './AffinitiesSection.types'

const AffinitiesSection: FC<AffinitiesSectionProps> = ({
	affinity,
	villager
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.affinitiesContainer(affinity)}>
			<Typography style={styles.text} variant='h6'>{getAffinityLabel(affinity)}</Typography>
			{villager[affinity].map((like: string, index: number) => (
				<Typography key={index} style={styles.text} variant='h6'>{like}</Typography>
			))}
		</div>
	)
}

export default AffinitiesSection
