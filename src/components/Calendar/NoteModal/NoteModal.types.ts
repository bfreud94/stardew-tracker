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
		height: CSSProperties['height']
		left: CSSProperties['left']
		overflow: CSSProperties['overflow']
		p: number
		position: CSSProperties['position']
		top: CSSProperties['top']
		transform: CSSProperties['transform']
		width: CSSProperties['width']
	}
}
