import { FishData, OtherItemData, Villager } from './'

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