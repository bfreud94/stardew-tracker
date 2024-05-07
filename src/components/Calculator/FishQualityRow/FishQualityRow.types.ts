import { CSSProperties, Dispatch, SetStateAction } from 'react'

export interface FishQualityRowProps {
	fishItem: Record<string, any>
	fishName: string
	quality: string
	fishState: Record<string, any>,
	setFishState: Dispatch<SetStateAction<Record<string, any>>>
}

export interface FishQualityRowStyles {
	fishAmountInput: CSSProperties
	fishQualityRow: CSSProperties
}
