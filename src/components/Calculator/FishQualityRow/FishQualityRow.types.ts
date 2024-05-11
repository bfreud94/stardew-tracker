import { CSSProperties } from 'react'
import { FishState, SetFishStateAction } from '../../../types'

export interface FishQualityRowProps {
	fishName: string
	fishState: FishState
	quality: string
	setState: SetFishStateAction
}

export interface FishQualityRowStyles {
	fishAmountInput: CSSProperties
	fishQualityRow: CSSProperties
}
