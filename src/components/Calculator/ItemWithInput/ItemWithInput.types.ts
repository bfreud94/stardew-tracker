import { CSSProperties, ChangeEvent } from 'react'

export interface ItemWithInputProps {
	itemName: string
	costAndMultiplier: string
	ellipsesAndTotal: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	value: string
}

export interface ItemWithInputStyles {
	itemName: CSSProperties
	costAndMultiplier: CSSProperties
	inputAmount: CSSProperties
	ellipsesAndTotal: CSSProperties
}
