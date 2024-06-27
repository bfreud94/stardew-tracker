import { CSSProperties, Dispatch, SetStateAction } from 'react'

export interface SingleNoteProps {
	day: number
	note: string
	season: string
	setNote: Dispatch<SetStateAction<string>>
}

export interface SingleNoteStyles {
	note: CSSProperties
	noteContainer: CSSProperties
	noteDeleteIcon: CSSProperties
}