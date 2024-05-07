import { CSSProperties, Dispatch, SetStateAction } from 'react'

export interface FishHeaderProps {
	grandTotal: number
	setFishState: Dispatch<SetStateAction<Record<string, any>>>
}

export interface FishHeaderStyles {
	fishHeader: CSSProperties
}
