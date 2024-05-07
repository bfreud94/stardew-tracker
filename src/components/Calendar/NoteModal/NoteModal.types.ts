import { CSSProperties } from 'react'

export interface NoteModalProps {
	open: boolean
	handleClose: () => void
}

export interface NoteModalStyles {
	noteModal: {
		position: CSSProperties['position']
		top: CSSProperties['top']
		left: CSSProperties['left']
		transform: CSSProperties['transform']
		width: CSSProperties['width']
		bgcolor: string
		border: CSSProperties['border']
		boxShadow: CSSProperties['boxShadow']
		p: number
	}
}
