import { CSSProperties } from 'react'

export interface OtherItemsProps {
	
}

export interface OtherItemsStyles {
	gem: CSSProperties
}

export interface OtherItemsState {
	gems: Item
	minerals: Item
	geodes: Item
}

type Item = Record<string, Record<string, number>>