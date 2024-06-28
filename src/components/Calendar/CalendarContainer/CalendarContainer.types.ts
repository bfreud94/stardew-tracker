import { CSSProperties } from 'react'
import { Season } from '../../../constants'
import { SetSeasonStateAction } from '../../../types'

export interface CalendarContainerProps {
	season: Season
	setSeason: SetSeasonStateAction
}

export interface CalendarContainerStyles {
	container: CSSProperties
}