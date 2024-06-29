export type Fish = {
	Normal: number
	Silver: number
	Gold: number
	Iridium: number
}

export type FishName = 'Bream' | 'Bullhead' | 'Carp' | 'Catfish' | 'Chub' | 'LM Bass' | 'Shad'

export type FishQuality = {
	Normal: string
	Silver: string
	Gold: string
	Iridium: string
}

export type FishState = {
	Bream: FishQuality
	Bullhead: FishQuality
	Carp: FishQuality
	Catfish: FishQuality
	Chub: FishQuality
	'LM Bass': FishQuality
	Shad: FishQuality
}

export type ItemName = 'fish' | 'gems' | 'minerals' | 'geodes'

export interface OtherItemsState {
	gems: SubItems
	minerals: SubItems
	geodes: SubItems
	[itemName: string]: SubItems
}

export type OtherItemName = Exclude<ItemName, 'fish'> | string

export type QualityName = 'Normal' | 'Silver' | 'Gold' | 'Iridium'

export type SubItems = Record<string, string>
