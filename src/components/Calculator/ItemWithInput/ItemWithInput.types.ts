import { ChangeEvent, CSSProperties } from 'react'

export interface ItemWithInputProps {
	costAndMultiplier: string
	ellipsesAndTotal: string
	itemName: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	value: string
}

export interface ItemWithInputStyles {
	costAndMultiplier: CSSProperties
	ellipsesAndTotal: CSSProperties
	inputAmount: CSSProperties
	itemName: CSSProperties
}
