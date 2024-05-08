import { CSSProperties } from 'react'

export interface NoteModalProps {
	birthday: string
	open: boolean
	handleClose: () => void
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
