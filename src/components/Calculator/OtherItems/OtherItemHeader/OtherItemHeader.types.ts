import { CSSProperties } from 'react'
import { OtherItemsState } from '../OtherItems.types'
import { SetOtherItemsStateAction } from '../../../../types'

export interface OtherItemHeaderProps {
	item: string
	state: OtherItemsState
	setState: SetOtherItemsStateAction
}

export interface OtherItemHeaderStyles {
	subItem: CSSProperties
}
