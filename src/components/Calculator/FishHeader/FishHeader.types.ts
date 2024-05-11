import { CSSProperties } from 'react'
import { SetFishStateAction } from '../../../types'

export interface FishHeaderProps {
	grandTotal: number
	setFishState: SetFishStateAction
}

export interface FishHeaderStyles {
	fishHeader: CSSProperties
}
