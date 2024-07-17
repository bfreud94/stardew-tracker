import { FC } from 'react'
import { AFFINITIES } from '../../constants'
import { UNIVERSAL_AFFINITIES } from '../../constants'
import { Affinity } from '../../types'
import { getAffinityLabel } from '../../util'
import makeStyles from './UniversalAffinities.styles'

const UniversalAffinities: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.affinitiesContainer}>
			{AFFINITIES.map((affinity: Affinity, index: number) => (
				<div key={index}>
					<h3>{getAffinityLabel(affinity)}</h3>
					{UNIVERSAL_AFFINITIES[affinity].map((item: string, i: number) => (
						<div key={i}>
							{item}
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default UniversalAffinities
