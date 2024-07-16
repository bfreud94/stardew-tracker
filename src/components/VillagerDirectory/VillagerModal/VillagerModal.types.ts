import { CSSProperties } from 'react'
import { Villager } from '../../../types'
import { SetOpenStateAction } from '../../../types'

export interface VillagerModalProps {
	open: boolean
	setOpen: SetOpenStateAction
	villager: Villager
}

export interface VillagerModalStyles {
	villagerBirthday: CSSProperties
	villagerModal: {
		bgcolor: string
		fontFamily: CSSProperties['fontFamily']
		border: CSSProperties['border']
		height: CSSProperties['height']
		left: CSSProperties['left']
		p: number
		position: CSSProperties['position']
		top: CSSProperties['top']
		transform: CSSProperties['transform']
		width: CSSProperties['width']
	}
	villagerModalHeader: CSSProperties
	zeroMargin: CSSProperties
}
