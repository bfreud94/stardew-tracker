import { CSSProperties, Dispatch, SetStateAction } from 'react'
import { Season } from '../../../../constants'
import { SetNoteStateAction } from '../../../../types'

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