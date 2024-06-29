import { CSSProperties } from 'react'
import { FishState, SetFishStateAction } from '../../../types'

export interface FishContainerStyles {
	fishContainer: CSSProperties
	fishNameContainer: CSSProperties
}

export interface FishContainerProps {
	fishState: FishState
	setFishState: SetFishStateAction
}