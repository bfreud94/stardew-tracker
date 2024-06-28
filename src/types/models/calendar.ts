import { FishData, OtherItemData } from './calculator'

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

type Birthday = {
	season: number
	day: number
}

export type Villager = {
	name: string
	birthday: Birthday
}