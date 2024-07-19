import { CSSProperties } from 'react'
import { SxProps } from '@mui/material'
import { Event } from '../../../types'

export interface EventContainerProps {
	event: Event
}

export interface EventContainerStyles {
	eventButton: CSSProperties
	eventButtonSx: SxProps
	eventContainer: CSSProperties
	eventInformationContainer: CSSProperties
	eventText: CSSProperties
}
