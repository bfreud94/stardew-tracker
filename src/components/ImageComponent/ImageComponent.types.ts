import { CSSProperties } from 'react'

export interface ImageComponentProps {
	altText: string
	fileName: string
	height?: string
	onClick?: () => void
	style?: CSSProperties
	width?: string
}