import { CSSProperties } from 'react'

export interface ItemWithInputProps {
	costAndMultiplier: string
	ellipsesAndTotal: string
	itemName: string
	onChangeFunction: (...args: any[]) => void
	onChangeFunctionArgs: any[]
	value: string
}

export interface ItemWithInputStyles {
	costAndMultiplier: CSSProperties
	ellipsesAndTotal: CSSProperties
	inputAmount: CSSProperties
	itemName: CSSProperties
}
