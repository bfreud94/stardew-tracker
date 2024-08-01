import { FC, ReactElement } from 'react'
import AffinitiesSection from '../AffinitiesSection/AffinitiesSection'
import { AFFINITIES } from '../../../constants'
import { Affinity } from '../../../types'
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
				{AFFINITIES.map((affinity: Affinity): ReactElement => (
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
