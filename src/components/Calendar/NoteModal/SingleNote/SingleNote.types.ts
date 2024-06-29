import { CSSProperties } from 'react'
import { Season, SetNoteStateAction } from '../../../../types'

export interface SingleNoteProps {
	day: number
	note: string
	season: Season
	setNote: SetNoteStateAction
}

export interface SingleNoteStyles {
	note: CSSProperties
	noteContainer: CSSProperties
	noteDeleteIcon: CSSProperties
}