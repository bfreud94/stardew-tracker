import { CSSProperties } from 'react'
import { Season } from '../../constants'
import { SetSeasonStateAction } from '../../types'

export interface CalendarHeaderProps {
	season: Season
	setSeason: SetSeasonStateAction
}

export interface CalendarHeaderStyles {
	header: CSSProperties
}
