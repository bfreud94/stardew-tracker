import { FishData, OtherItemData } from './calculator'

export interface Data {
	season: number
	villagers: Array<Person>
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

type Person = {
	name: string
	birthday: Birthday
}