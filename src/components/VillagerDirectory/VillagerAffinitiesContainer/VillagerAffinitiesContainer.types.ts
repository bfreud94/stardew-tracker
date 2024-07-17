import { CSSProperties } from 'react'
import { SxProps } from '@mui/material'
import { Villager } from '../../../types'

export interface VillagerAffinitiesContainerProps {
	villager: Villager
}

export interface VillagerAffinitiesContainerStyles {
	affinitiesButton: CSSProperties
	affinitiesButtonSx: SxProps
	affinitiesContainer: CSSProperties
}
