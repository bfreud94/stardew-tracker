import { FishData, OtherItemData } from './calculator'

type Birthday = {
	season: number
	day: number
}

export interface Data {
	villagers: Array<Villager>
	items: DataItems
}

type DataItems = {
	fish: FishData
	gems: OtherItemData
	minerals: OtherItemData
	geodes: OtherItemData
	[itemName: string]: FishData | OtherItemData
}

export type Affinity = 'loves' | 'likes' | 'neutral' | 'dislikes' | 'hates'

export type Villager = {
	name: string
	birthday: Birthday
	loves: Array<string>
	likes: Array<string>
	neutral: Array<string>
	dislikes: Array<string>
	hates: Array<string>
}