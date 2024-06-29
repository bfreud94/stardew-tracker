import { CSSProperties } from 'react'
import { Season } from '../../../types'

export interface CalendarRowProps {
	season: Season
	week: Array<number>
}

export interface CalendarRowStyles {
	row: CSSProperties
}
