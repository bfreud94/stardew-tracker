import { CSSProperties, Dispatch, SetStateAction } from 'react'
import { OtherItemsState } from '../OtherItems.types'

export interface OtherItemHeaderProps {
	item: string
	state: OtherItemsState
	setState: Dispatch<SetStateAction<OtherItemsState>>
}

export interface OtherItemHeaderStyles {
	subItem: CSSProperties
}
