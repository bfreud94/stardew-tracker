import { CSSProperties } from 'react'
import { Event } from '../../../../types'

export interface EventNotesProps {
	event: Event
}

export interface EventNotesStyles {
	eventNoteContainer: CSSProperties
	note: CSSProperties
}
