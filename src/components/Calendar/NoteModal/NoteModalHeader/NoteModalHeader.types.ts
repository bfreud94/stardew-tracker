import { CSSProperties } from 'react'
import { Season } from '../../../../types'

export interface NoteModalHeaderProps {
	day: number
	season: Season
}

export interface NoteModalHeaderStyles {
	header: CSSProperties
	notesText: CSSProperties
}
