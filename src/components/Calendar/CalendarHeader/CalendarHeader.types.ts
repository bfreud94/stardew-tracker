import { CSSProperties } from 'react'
import { SxProps } from '@mui/material'
import { Season, SetSeasonStateAction } from '../../../types'

export interface CalendarHeaderProps {
	season: Season
	setSeason: SetSeasonStateAction
}

export interface CalendarHeaderStyles {
	changeSeasonButton: CSSProperties
	changeSeasonButtonSx: SxProps
	header: CSSProperties
}
