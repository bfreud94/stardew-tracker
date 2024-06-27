import { CSSProperties } from 'react'
import { SetNoteStateAction } from '../../../../types'

export interface SubmitNoteButtonProps {
	day: number
	note: string
	setNote: SetNoteStateAction
	season: string
}

export interface SubmitNoteButtonStyles {
	noteButton: CSSProperties
}
