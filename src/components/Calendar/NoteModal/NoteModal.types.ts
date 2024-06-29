import { CSSProperties } from 'react'
import { Season, SetOpenStateAction } from '../../../types'

export interface NoteModalProps {
	day: number
	open: boolean
	season: Season
	setOpen: SetOpenStateAction
}

export interface NoteModalStyles {
	noteModal: {
		bgcolor: string
		border: CSSProperties['border']
		boxShadow: CSSProperties['boxShadow']
		height: CSSProperties['height']
		left: CSSProperties['left']
		p: number
		position: CSSProperties['position']
		top: CSSProperties['top']
		transform: CSSProperties['transform']
		width: CSSProperties['width']
	}
}
