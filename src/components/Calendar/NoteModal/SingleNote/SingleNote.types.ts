import { CSSProperties } from 'react'
import { Season, SetNoteEditIndexStateAction, SetNoteStateAction } from '../../../../types'

export interface SingleNoteProps {
	day: number
	index: number
	note: string
	noteEditIndex: number
	season: Season
	setNote: SetNoteStateAction
	setNoteEditIndex: SetNoteEditIndexStateAction
}

export interface SingleNoteStyles {
	note: CSSProperties
	noteContainer: CSSProperties
	noteDeleteIcon: CSSProperties
	noteEditIcon: CSSProperties
}