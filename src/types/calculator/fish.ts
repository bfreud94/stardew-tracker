import { Dispatch, SetStateAction } from 'react'

export type FishState = {
	Bream: FishQuality
	Bullhead: FishQuality
	Carp: FishQuality
	Catfish: FishQuality
	Chub: FishQuality
	'LM Bass': FishQuality
	Shad: FishQuality
}

export type Fish = {
	Normal: number
	Silver: number
	Gold: number
	Iridium: number
}

// have to sort/rename types
// this one is part of the fishState
export type FishQuality = {
	Normal: string
	Silver: string
	Gold: string
	Iridium: string
}

export type SetFishStateAction = Dispatch<SetStateAction<FishState>>

export type ItemName = 'fish' | 'gems' | 'minerals' | 'geodes'

export type FishName = 'Bream' | 'Bullhead' | 'Carp' | 'Catfish' | 'Chub' | 'LM Bass' | 'Shad'

export type QualityName = 'Normal' | 'Silver' | 'Gold' | 'Iridium'

export type OtherItemName = Exclude<ItemName, 'fish'> | string