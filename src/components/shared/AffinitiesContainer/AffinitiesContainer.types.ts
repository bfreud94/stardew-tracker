import { CSSProperties } from 'react'
import { Variant } from '@mui/material/styles/createTypography'
import { Villager } from '../../../types'

export interface AffinitiesContainerProps {
	headerVariant?: Variant
	variant?: Variant
	villager: Villager
}

export interface AffinitiesContainerStyles {
	affinitiesContainer: CSSProperties
	affinitiesScrollableContainer: CSSProperties
}
