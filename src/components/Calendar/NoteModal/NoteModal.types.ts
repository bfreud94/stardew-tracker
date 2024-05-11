import { CSSProperties, Dispatch, SetStateAction } from 'react'

export interface NoteModalProps {
	day: number
	villager: string
	open: boolean
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
