import { FishData, OtherItemData, Villager } from './'
import { SeasonId } from '../'

export type Birthday = {
	season: SeasonId
	day: number
}

export interface Data {
	villagers: Array<Villager>
	items: DataItems
	events: Array<Event>
}

type DataItems = {
	fish: FishData
	gems: OtherItemData
	minerals: OtherItemData
	geodes: OtherItemData
	[itemName: string]: FishData | OtherItemData
}