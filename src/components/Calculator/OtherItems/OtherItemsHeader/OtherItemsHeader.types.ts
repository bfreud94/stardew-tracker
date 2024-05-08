import { Dispatch, SetStateAction } from 'react'
import { OtherItemsState } from '../OtherItems.types'

export interface OtherItemsHeaderProps {
	setState: Dispatch<SetStateAction<OtherItemsState>>
	total: number
}