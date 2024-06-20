import { CSSProperties } from 'react'
import { Villager } from '../../../../types/models'

export interface BirthdaySectionProps {
	villager: Villager
}

export interface BirthdaySectionStyles {
	birthdaySection: CSSProperties
	birthdayText: CSSProperties
}
