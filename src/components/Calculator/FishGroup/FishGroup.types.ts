import { CSSProperties } from 'react'
import { FishState, SetFishStateAction } from '../../../types'

export interface FishGroupProps {
	fishName: string
	fishState: FishState
	setFishState: SetFishStateAction
}

export interface FishGroupStyles {
	fishGroup: CSSProperties
}
