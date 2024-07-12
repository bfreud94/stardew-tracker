import { CSSProperties } from 'react'
import { Affinity, Villager } from '../../../../types'

export interface AffinitiesSectionProps {
	affinity: Affinity
	villager: Villager
}

export interface AffinitiesSectionStyles {
	affinitiesContainer: (affinities: Affinity) => CSSProperties
	text: CSSProperties
}
