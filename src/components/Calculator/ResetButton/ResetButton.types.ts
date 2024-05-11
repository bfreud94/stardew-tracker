import { CSSProperties } from 'react'

export interface ResetButtonProps {
	buttonText: string
	functionArgs: any[]
	resetFunction: Function
}

export interface ResetButtonStyles {
	resetButton: CSSProperties
}
