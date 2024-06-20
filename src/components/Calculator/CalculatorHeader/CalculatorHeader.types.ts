import { SetFishStateAction, SetOtherItemsStateAction } from '../../../types'

export interface CalculatorHeaderProps {
	fishTotal: number
	otherItemsTotal: number
	setFishState: SetFishStateAction
	setOtherItemsState: SetOtherItemsStateAction
}