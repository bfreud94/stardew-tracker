import { FC } from 'react'
import { Typography } from '@mui/material'
import { getAffinityLabel } from '../../../util'
import makeStyles from './AffinitiesSection.styles'
import { AffinitiesSectionProps } from './AffinitiesSection.types'

const AffinitiesSection: FC<AffinitiesSectionProps> = ({
	affinity,
	headerVariant,
	variant,
	villager
}) => {
	const styles = makeStyles(affinity)
	return (
		<div style={styles.affinitiesContainer}>
			<Typography style={styles.text} variant={headerVariant}>{getAffinityLabel(affinity)}</Typography>
			{villager[affinity].map((like: string) => (
				<Typography key={like} style={styles.text} variant={variant}>{like}</Typography>
			))}
		</div>
	)
}

export default AffinitiesSection
