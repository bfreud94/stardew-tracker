import { CSSProperties } from 'react'
import { Season, SetNoteEditIndexStateAction, SetNoteStateAction } from '../../../../types'

export interface SubmitNoteButtonProps {
	day: number
	note: string
	noteEditIndex: number
	setNote: SetNoteStateAction
	season: Season
	setNoteEditIndex: SetNoteEditIndexStateAction
}

export interface SubmitNoteButtonStyles {
	noteButton: CSSProperties
}
