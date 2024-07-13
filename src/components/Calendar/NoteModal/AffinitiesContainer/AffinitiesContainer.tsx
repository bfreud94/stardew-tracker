import { FC } from 'react'
import { AFFINITIES } from '../../../../constants'
import { Affinity } from '../../../../types'
import AffinitiesSection from '../AffinitiesSection/AffinitiesSection'
import makeStyles from './AffinitiesContainer.styles'
import { AffinitiesContainerProps } from './AffinitiesContainer.types'

const AffinitiesContainer: FC<AffinitiesContainerProps> = ({
	villager
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.affinitiesContainer}>
			{AFFINITIES.map((affinity: Affinity): JSX.Element => (
				<AffinitiesSection key={affinity} affinity={affinity} villager={villager} />
			))}
		</div>
	)
}

export default AffinitiesContainer
