import { CSSProperties } from 'react'
import { Event } from '../../../types'

export interface ItemWithInputProps {
	itemName: string
	costAndMultiplier: string
	ellipsesAndTotal: string
	onChange: (e: Event) => void
	value: string
}

export interface ItemWithInputStyles {
	itemName: CSSProperties
	costAndMultiplier: CSSProperties
	inputAmount: CSSProperties
	ellipsesAndTotal: CSSProperties
}
