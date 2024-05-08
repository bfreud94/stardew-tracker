import { CSSProperties, Dispatch, SetStateAction } from 'react'
import { OtherItemsState } from '../OtherItems.types'

export interface OtherItemsComponentProps {
	itemName: string
	state: OtherItemsState
	setState: Dispatch<SetStateAction<OtherItemsState>>
}

export interface OtherItemsComponentStyles {
	inputContainer: CSSProperties
	otherItemComponent: CSSProperties
}
