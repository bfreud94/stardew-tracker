import { CSSProperties } from 'react'

export interface ResetButtonProps {
	buttonText: string
	resetFunction: Function
	functionArgs: any[]
}

export interface ResetButtonStyles {
	resetButton: CSSProperties
}
