import { OtherItemsState } from '../components/Calculator/OtherItems/OtherItems.types'
import { OtherItemData } from '../types/models/calculator'
import { formatValue, getTotal } from '../util'

export const getEllipses = (number: number): string => {
	let ellipses = ' . . . . . . '
	while (number > 1) {
		number /= 10
		ellipses = ellipses.slice(0, -1)
	}
	return ellipses
}

export const getFishQualityRowText = (
	fishName: string,
	fishItemValue: string,
	quality: string,
	total: number
) => {
	const ellipses = getEllipses(total)
	const textRightOfInput = `${ellipses} ${total}`
	const fishNameAndQuality = `${fishName} (${quality}) :`
	const multiplier = `${fishItemValue} x`
	return {
		fishNameAndQuality,
		multiplier,
		textRightOfInput
	}
}

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