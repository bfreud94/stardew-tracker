import { ChangeEvent } from 'react'
import { data } from '../api'
import {
	FishData,
	FishName,
	FishQuality,
	FishState,
	ItemName,
	OtherItemData,
	OtherItemName,
	OtherItemsState,
	QualityName,
	SetOtherItemsStateAction
} from '../types'

export const formatValue = (value: string): number => {
	if (value === '') return 0
	return parseInt(value)
}

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

export const getFishGrandTotal = (fishState: FishState): number => Object.keys(fishState)
	.reduce((acc, fishName) => {
		const fishItem = getFishItemFromData(fishName)
		if (fishItem === null) {
			return acc
		}
		const totalForFish = getTotalForFish(fishItem, fishName, fishState)
		return acc + totalForFish
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

export const getFishRowTotal = (fishAmount: string, fishItemQuality: string): number => {
	const formattedFishAmount = parseInt(fishAmount)
	const formattedFishQuality = parseInt(fishItemQuality)
	if (Number.isNaN(formattedFishQuality) || Number.isNaN(formattedFishAmount)) {
		return 0
	}
	return formattedFishAmount * formattedFishQuality
}

export const getItem = (itemName: ItemName | string): FishData | OtherItemData | null => {
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

export const getTotal = (value: number, amount: number): number => value * amount

export const getTotalForFish = (fishItem: FishQuality, fishName: string, fishState: FishState): number => Object.keys(fishItem)
	.reduce((acc: number, quality: string) => {
		const fishAmount = getFishAmount(fishState, fishName, quality)
		const currentFishItem = getFishItemFromData(fishName)
		if (currentFishItem === null) {
			return acc
		}
		const formattedFishAmount = parseInt(fishAmount) || 0
		const formattedFishQuality = parseInt(currentFishItem[quality as QualityName])
		const total = formattedFishAmount * formattedFishQuality
		return acc + total
	}, 0)

export const isValidFishName = (fishName: string): fishName is FishName =>
	fishName in data.items.fish

export const isValidFishQuality = (quality: string): quality is QualityName =>
	quality in data.items.fish.Bream

export const isValidItemName = (itemName: string): itemName is ItemName =>
	itemName in data.items

export const isValidOtherItemName = (itemName: string): itemName is OtherItemName =>
    itemName !== 'fish' && itemName in data.items

export const isValidValue = (value: string): number => {
	if (value === '') return 0
	return parseInt(value)
}

export const itemInputOnChange = (e: ChangeEvent<HTMLInputElement>, itemName: string, setState: SetOtherItemsStateAction, subItemName: string) => {
	setState((prevState: OtherItemsState) => {
		const prevItems = prevState[itemName]
		return {
			...prevState,
			[itemName]: {
				...prevItems,
				[subItemName]: e.target.value
			}
		}
	})
}