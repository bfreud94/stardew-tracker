import { CSSProperties } from 'react'

export interface CalendarDayProps {
	day: number
	season: string
}

export interface CalendarDayStyles {
	day: CSSProperties
	dayNumber: CSSProperties
}
