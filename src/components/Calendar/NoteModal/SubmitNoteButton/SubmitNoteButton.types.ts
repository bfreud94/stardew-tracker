import { CSSProperties } from 'react'
import { Season, SetNoteStateAction } from '../../../../types'

export interface SubmitNoteButtonProps {
	day: number
	note: string
	setNote: SetNoteStateAction
	season: Season
}

export interface SubmitNoteButtonStyles {
	noteButton: CSSProperties
}
