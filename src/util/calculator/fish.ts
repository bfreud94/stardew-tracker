import { data } from '../../api/index'
import { FishName, FishQuality, FishState, QualityName } from '../../types/index'

export const getGrandTotal = (fishState: FishState) => Object.keys(fishState)
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