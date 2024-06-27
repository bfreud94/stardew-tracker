import { CSSProperties } from 'react'
import { SetNoteStateAction } from '../../../../types'

export interface NoteInputProps {
	note: string
	setNote: SetNoteStateAction
}

export interface NoteInputStyles {
	noteInput: CSSProperties
}
