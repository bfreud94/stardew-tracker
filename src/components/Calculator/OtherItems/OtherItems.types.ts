import { CSSProperties, Dispatch, SetStateAction } from 'react'

export interface OtherItemStyles {
	otherItemContainer: CSSProperties
}

export interface OtherItemsState {
	gems: SubItems
	minerals: SubItems
	geodes: SubItems
	[itemName: string]: SubItems
	// delete that^^
}

export interface OtherItemsProps {
	otherItemsState: OtherItemsState
	setOtherItemsState: Dispatch<SetStateAction<OtherItemsState>>
}

export type SubItems = Record<string, string>