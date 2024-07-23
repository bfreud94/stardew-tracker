import { CSSProperties } from 'react'
import { Villager } from '../../../types'
import { SetOpenStateAction } from '../../../types'

export interface VillagerModalProps {
	open: boolean
	setOpen: SetOpenStateAction
	villager: Villager
}

export interface VillagerModalStyles {
	villagerModal: {
		bgcolor: string
		fontFamily: CSSProperties['fontFamily']
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
