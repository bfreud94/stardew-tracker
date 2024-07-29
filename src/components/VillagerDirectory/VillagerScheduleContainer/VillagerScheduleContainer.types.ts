import { CSSProperties } from 'react'
import { SxProps } from '@mui/material'
import { Villager } from '../../../types'

export interface VillagerScheduleContainerProps {
	villager: Villager
}

export interface VillagerScheduleContainerStyles {
	villagerScheduleButton: CSSProperties
	villagerScheduleButtonSx: SxProps
	villagerScheduleContainer: CSSProperties
}
