import { CSSProperties } from 'react'

export interface CalendarRowProps {
	season: string
	week: Array<number>
}

export interface CalendarRowStyles {
	row: CSSProperties
}
