import { CSSProperties } from 'react'
import { Variant } from '@mui/material/styles/createTypography'
import { Affinity, Villager } from '../../../../types'

export interface AffinitiesSectionProps {
	affinity: Affinity
	headerVariant: Variant
	variant: Variant
	villager: Villager
}

export interface AffinitiesSectionStyles {
	affinitiesContainer: (affinities: Affinity) => CSSProperties
	text: CSSProperties
}
