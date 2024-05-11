import { OtherItemsState } from '../../components/Calculator/OtherItems/OtherItems.types'
import { OtherItemData } from '../../types/models/calculator'
import { formatValue, getTotal } from '../../util'
import { getEllipses } from './fish'

export const getOtherItemCopy = (itemName: string, itemData: OtherItemData, state: OtherItemsState, subItemName: string) => {
	const subItems = state[itemName]
	const subItemValue = subItems[subItemName]
	const formattedValue = formatValue(subItemValue)
	const subTotal = getTotal(formattedValue, itemData[subItemName])
	const ellipsesAndTotal = `${getEllipses(subTotal)} ${subTotal}`
	const costAndMultiplier = `${itemData[subItemName]} x`
	return {
		costAndMultiplier,
		ellipsesAndTotal,
		subItemValue
	}
} 

export const getFormattedOtherItem = (itemName: string): string => itemName.charAt(0).toUpperCase() + itemName.slice(1)