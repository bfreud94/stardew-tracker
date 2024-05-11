import { data } from '../../api'
import { DEFAULT_FISH_QUALITY_STATE, DEFAULT_FISH_STATE, FISH_DEFAULT_INPUT_VALUE } from '../../constants'
import { getFishItemFromData, isValidFishName, isValidFishQuality } from '../../util'
import { Event, FishQuality, FishState, SetFishStateAction } from '../../types'

export const createFishState = (): FishState => Object.keys(data.items.fish)
	.reduce((acc: FishState, fishName: string) => {
		if (isValidFishName(fishName)) {
			const fishItem = getFishItemFromData(fishName)
			if (fishItem !== null) {
				const fishItemQualityComponents = Object.keys(fishItem).reduce((acc: FishQuality, quality: string) => {
					if (isValidFishQuality(quality)) {
						acc[quality] = FISH_DEFAULT_INPUT_VALUE
					}
					return acc
				}, DEFAULT_FISH_QUALITY_STATE)
				acc[fishName] = fishItemQualityComponents
			}
		}
		return acc
	}, DEFAULT_FISH_STATE)

export const resetFishAmount = (
	fishName: string,
	fishState: FishState,
	setFishState: SetFishStateAction
) => {
	const fishItem = getFishItemFromData(fishName)
	if (fishItem !== null)  {
		const fishItemQualityAmounts = Object.keys(fishItem).reduce((acc: FishQuality, quality: string) => {
			if (isValidFishQuality(quality))	{
				acc[quality] = FISH_DEFAULT_INPUT_VALUE
			}
			return acc
		}, DEFAULT_FISH_QUALITY_STATE)
		setFishState({
			...fishState,
			[fishName]: fishItemQualityAmounts
		})
	}
}

export const getStateForFish = (fishState: FishState, fishName: string): FishQuality => {
	if (isValidFishName(fishName)) {
		return fishState[fishName]
	}
	return DEFAULT_FISH_QUALITY_STATE
}

export const setFishState = (e: Event, fishName: string, quality: string, setState: SetFishStateAction) => {
	setState(prevState => {
		const currentFishState = getStateForFish(prevState, fishName)
		return {
			...prevState,
			[fishName]: {
				...currentFishState,
				[quality]: e.target.value
			}
		}
	})
}