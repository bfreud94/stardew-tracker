import { CSSProperties } from 'react'
import { OtherItemsState, SetOtherItemsStateAction } from '../../../../types'

export interface OtherItemsComponentProps {
	itemName: string
	state: OtherItemsState
	setState: SetOtherItemsStateAction
}

export interface OtherItemsComponentStyles {
	inputContainer: CSSProperties
	otherItemComponent: CSSProperties
}
