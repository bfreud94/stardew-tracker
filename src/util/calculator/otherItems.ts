import { data } from '../../api/index'
import { ItemName, OtherItemName } from '../../types'
import { OtherItemsState } from '../../components/Calculator/OtherItems/OtherItems.types'
import { OtherItemData } from '../../types/models/calculator'

export const getTotalForOtherItems = (otherItemsState: OtherItemsState): number => {
	const grandTotal = Object.keys(otherItemsState).reduce((acc: number, item: string): number => {
		const subTotal = acc + getOtherItemSubTotal(otherItemsState, item)
		return subTotal
	}, 0)
	return grandTotal
}

export const getOtherItemSubTotal = (otherItemsState: OtherItemsState, item: OtherItemName): number => {
	const subTotal = Object.keys(otherItemsState[item]).reduce((itemAcc: number, subItem: string) => {
		const itemData = getOtherItem(item)
		if (itemData !== null) {
			const formattedSubItem = parseInt(otherItemsState[item][subItem]) || 0
			return itemAcc + itemData[subItem] * formattedSubItem
		}
		return itemAcc
	}, 0)
	return subTotal
}

export const isValidItemName = (itemName: string): itemName is ItemName =>
	itemName in data.items

export const isValidOtherItemName = (itemName: string): itemName is OtherItemName =>
    itemName !== 'fish' && itemName in data.items

export const getItem = (itemName: ItemName | string) => {
	if (isValidItemName(itemName)) {
		return data.items[itemName]
    }
    return null
}

export const getOtherItem = (itemName: string): OtherItemData | null => {
	if (isValidOtherItemName(itemName)) {
		return data.items[itemName] as OtherItemData
	}
	return null
}

export const getTotal = (value: number, amount: number) => value * amount

export const isValidValue = (value: string) => {
	if (value === '') return 0
	return parseInt(value)
}

export const formatValue = (value: string) => {
	if (value === '') return 0
	return parseInt(value)
}