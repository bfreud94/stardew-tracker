import { CSSProperties } from 'react'
import { Season } from '../../../types'

export interface CalendarDayProps {
	day: number
	season: Season
}

export interface CalendarDayStyles {
	day: CSSProperties
	dayNumber: CSSProperties
}
