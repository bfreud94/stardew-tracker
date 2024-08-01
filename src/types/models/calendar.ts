import { FishData, OtherItemData, Villager } from '.'
import { SeasonId } from '..'

export interface Data {
	villagers: Array<Villager>
	items: DataItems
	events: Array<Event>
	randomEvents: Array<RandomEvent>
	seasonalEvents: Array<SeasonalEvent>
}

type DataItems = {
	fish: FishData
	gems: OtherItemData
	minerals: OtherItemData
	geodes: OtherItemData
	[itemName: string]: FishData | OtherItemData
}

export type StardewDate = {
	season: SeasonId
	day: number
}

export type Event = {
	name: string
	date: StardewDate
	location: string
	time: {
		start: string
		end: string
	}
	icon: string
	notes: Array<string>
}

export type FamilyMember = {
	name: string
	relationship: string
}

type RandomEvent = {
	name: string
	description: string
	odds: string
}

export type SeasonalEvent = {
	name: string
	date: StardewDate
	icon: string
}