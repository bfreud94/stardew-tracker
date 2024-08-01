import { CSSProperties } from 'react'
import { SxProps } from '@mui/material'
import { SetShowAffinitiesAction, Villager } from '../../../../types'

export interface BirthdaySectionProps {
	showAffinities: boolean
	setShowAffinities: SetShowAffinitiesAction
	villager: Villager
}

export interface BirthdaySectionStyles {
	affinitiesButton: CSSProperties
	affinitiesButtonSx: SxProps
	birthdaySection: CSSProperties
	birthdayText: CSSProperties
	leftContainer: CSSProperties
	villagerIcon: CSSProperties
}
