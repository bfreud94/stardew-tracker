import { CSSProperties, Dispatch, SetStateAction } from 'react'

export interface FishGroupHeaderProps {
	fishItem: Record<string, number>
	fishName: string
	fishState: Record<string, any>
	setFishState: Dispatch<SetStateAction<Record<string, any>>>
}

export interface FishGroupHeaderStyles {
	fishGroupHeader: CSSProperties
}
