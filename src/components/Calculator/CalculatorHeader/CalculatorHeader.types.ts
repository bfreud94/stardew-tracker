import { CSSProperties } from 'react'
import { SetFishStateAction, SetOtherItemsStateAction } from '../../../types'

export interface CalculatorHeaderStyles {
	calculatorHeader: CSSProperties
}

export interface CalculatorHeaderProps {
	fishTotal: number
	otherItemsTotal: number
	setFishState: SetFishStateAction
	setOtherItemsState: SetOtherItemsStateAction
}