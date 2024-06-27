import { CSSProperties } from 'react'
import { OtherItemsState, SetOtherItemsStateAction } from '../../../../types'

export interface OtherItemHeaderProps {
	item: string
	state: OtherItemsState
	setState: SetOtherItemsStateAction
}

export interface OtherItemHeaderStyles {
	subItem: CSSProperties
}
