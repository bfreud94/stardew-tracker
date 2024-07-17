import { CSSProperties } from 'react'
import { Villager } from '../../../types'

export interface VillagerMetaDataProps {
	villager: Villager
}

export interface VillagerMetaDataStyles {
	villagerBirthday: CSSProperties
	villagerModalHeader: CSSProperties
	zeroMargin: CSSProperties
}
