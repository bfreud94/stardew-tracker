import { CSSProperties } from 'react'
import { SxProps } from '@mui/material'
import { Villager } from '../../../../types'

export interface BirthdaySectionProps {
	villager: Villager
}

export interface BirthdaySectionStyles {
	affinitiesButton: CSSProperties
	affinitiesButtonSx: SxProps
	affinitiesContainer: CSSProperties
	birthdaySection: CSSProperties
	birthdayText: CSSProperties
	leftContainer: CSSProperties
}
