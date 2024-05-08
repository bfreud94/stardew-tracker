import { CSSProperties } from 'react'

export interface ImageComponentProps {
	altText: string
	fileName: string
	height?: string
	width?: string
	onClick?: () => void
	style?: CSSProperties
}