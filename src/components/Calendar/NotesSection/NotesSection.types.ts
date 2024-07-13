import { CSSProperties } from 'react'
import { Season } from '../../../types'

export interface NotesSectionProps {
	day: number
	season: Season	
}

export interface NotesSectionStyles {
	noteText: CSSProperties
}
