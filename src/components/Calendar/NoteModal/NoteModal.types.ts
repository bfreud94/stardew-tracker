import { CSSProperties, Dispatch, SetStateAction } from 'react'
import { Season } from '../../../constants'

export interface NoteModalProps {
	day: number
	open: boolean
	season: Season
	setOpen: Dispatch<SetStateAction<boolean>>
}

export interface NoteModalStyles {
	noteModal: {
		position: CSSProperties['position']
		top: CSSProperties['top']
		left: CSSProperties['left']
		transform: CSSProperties['transform']
		height: CSSProperties['height']
		width: CSSProperties['width']
		bgcolor: string
		border: CSSProperties['border']
		boxShadow: CSSProperties['boxShadow']
		p: number
	}
}
