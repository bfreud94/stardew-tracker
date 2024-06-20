import { data } from '../api'
import { FishName, FishQuality, FishState, QualityName } from '../types'
import { ItemName, OtherItemName } from '../types'
import { OtherItemsState } from '../components/Calculator/OtherItems/OtherItems.types'
import { OtherItemData } from '../types/models/calculator'

export const getFishGrandTotal = (fishState: FishState) => Object.keys(fishState)
	.reduce((acc, fishName) => {
		const fishItem = getFishItemFromData(fishName)
		if (fishItem === null) {
			return acc
		}
		const totalForFish = getTotalForFish(fishItem, fishName, fishState)
		return acc + totalForFish
	}, 0)

export const getTotalForFish = (fishItem: FishQuality, fishName: string, fishState: FishState): number => Object.keys(fishItem)
	.reduce((acc: number, quality: string) => {
		const fishAmount = getFishAmount(fishState, fishName, quality)
		const fishItem = getFishItemFromData(fishName)
		if (fishItem === null) {
			return acc
		}
		const formattedFishAmount = parseInt(fishAmount) || 0
		const formattedFishQuality = parseInt(fishItem[quality as QualityName])
		const total = formattedFishAmount * formattedFishQuality
		return acc + total
	}, 0)



export const getFishItemFromData = (fishName: string): FishQuality | null => {
	if (isValidFishName(fishName)) {
		return {
			Normal: data.items.fish[fishName].Normal.toString(),
			Silver: data.items.fish[fishName].Silver.toString(),
			Gold: data.items.fish[fishName].Gold.toString(),
			Iridium: data.items.fish[fishName].Iridium.toString()
		}
	}
	return null
}

export const isValidFishName = (fishName: string): fishName is FishName =>
	fishName in data.items.fish

export const isValidFishQuality = (quality: string): quality is QualityName =>
	quality in data.items.fish.Bream

export const getFishAmount = (fishState: FishState, fishName: string, quality: string): string => {
	if (isValidFishName(fishName)) {
		const fish = fishState[fishName]
		if (isValidFishQuality(quality)) {
			const amount = fish[quality]
			return amount
		}
    }
    return ''
}

export const getFishRowTotal = (fishAmount: string, fishItemQuality: string) => {
	const formattedFishAmount = parseInt(fishAmount)
	const formattedFishQuality = parseInt(fishItemQuality)
	if (isNaN(formattedFishQuality) || isNaN(formattedFishAmount)) {
		return 0
	}
	return formattedFishAmount * formattedFishQuality
}

export const getOtherItemsGrandTotal = (otherItemsState: OtherItemsState): number => {
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