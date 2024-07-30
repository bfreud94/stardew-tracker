import { CSSProperties } from 'react'
import { Season } from '../../../types'

export interface CalendarDayProps {
	day: number
	season: Season
}

export interface CalendarDayStyles {
	birthday: CSSProperties
	day: CSSProperties
	dayNumber: CSSProperties
	event: CSSProperties
	imageContainer: CSSProperties
	seasonalEvent: CSSProperties
}
