import { FC } from 'react'
import { AFFINITIES } from '../../../../constants'
import { Affinity } from '../../../../types'
import AffinitiesSection from '../AffinitiesSection/AffinitiesSection'
import makeStyles from './AffinitiesContainer.styles'
import { AffinitiesContainerProps } from './AffinitiesContainer.types'

const AffinitiesContainer: FC<AffinitiesContainerProps> = ({
	headerVariant = 'h5',
	variant = 'h6',
	villager
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.affinitiesScrollableContainer}>
			<div style={styles.affinitiesContainer}>
				{AFFINITIES.map((affinity: Affinity): JSX.Element => (
					<AffinitiesSection
						key={affinity}
						affinity={affinity}
						headerVariant={headerVariant}
						variant={variant}
						villager={villager}
					/>
				))}
			</div>
		</div>
	)
}

export default AffinitiesContainer
