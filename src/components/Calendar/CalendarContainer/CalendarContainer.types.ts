import { CSSProperties } from 'react'
import { Season, SetSeasonStateAction } from '../../../types'

export interface CalendarContainerProps {
	season: Season
	setSeason: SetSeasonStateAction
}

export interface CalendarContainerStyles {
	container: CSSProperties
}