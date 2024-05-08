export interface OtherItemsState {
	gems: Item
	minerals: Item
	geodes: Item
}

type Item = Record<string, Record<string, number>>