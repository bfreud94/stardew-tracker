import { FC } from 'react'
import { AFFINITIES, UNIVERSAL_AFFINITIES } from '../../constants'
import { Affinity } from '../../types'
import { getAffinityLabel } from '../../util'
import makeStyles from './UniversalAffinities.styles'

const UniversalAffinities: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.affinitiesContainer}>
			{AFFINITIES.map((affinity: Affinity) => (
				<div key={affinity}>
					<h3>{getAffinityLabel(affinity)}</h3>
					{UNIVERSAL_AFFINITIES[affinity].map((item: string) => (
						<div key={item}>
							{item}
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default UniversalAffinities
