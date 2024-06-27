import { CSSProperties } from 'react'
import { OtherItemsState, SetOtherItemsStateAction } from '../../../types'

export interface OtherItemStyles {
	otherItemContainer: CSSProperties
}

export interface OtherItemsProps {
	otherItemsState: OtherItemsState
	setOtherItemsState: SetOtherItemsStateAction
}