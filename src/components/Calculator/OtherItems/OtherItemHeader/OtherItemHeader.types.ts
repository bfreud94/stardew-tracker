import { CSSProperties, Dispatch, SetStateAction } from 'react'
import { OtherItemsState } from '../OtherItems.types'
import { SetOtherItemsState } from '../../../../types'

export interface OtherItemHeaderProps {
	item: string
	state: OtherItemsState
	setState: SetOtherItemsState
}

export interface OtherItemHeaderStyles {
	subItem: CSSProperties
}
