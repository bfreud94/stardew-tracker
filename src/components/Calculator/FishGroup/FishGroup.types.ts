import { CSSProperties, Dispatch, SetStateAction } from 'react'

export interface FishGroupProps {
	fishName: string
	fishState: Record<string, any>
	setFishState: Dispatch<SetStateAction<Record<string, any>>>
}

export interface FishGroupStyles {
	fishAmountInput: CSSProperties
}
