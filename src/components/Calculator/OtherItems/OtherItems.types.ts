export interface OtherItemsState {
	gems: SubItems
	minerals: SubItems
	geodes: SubItems
	[itemName: string]: SubItems
	// delete that^^
}

export type SubItems = Record<string, string>