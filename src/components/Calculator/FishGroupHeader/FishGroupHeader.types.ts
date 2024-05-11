import { CSSProperties } from 'react'
import { FishQuality, FishState, SetFishStateAction } from '../../../types'

export interface FishGroupHeaderProps {
	fishItem: FishQuality
	fishName: string
	fishState: FishState
	setState: SetFishStateAction
}

export interface FishGroupHeaderStyles {
	fishGroupHeader: CSSProperties
}
