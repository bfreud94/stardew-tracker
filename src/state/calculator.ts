import { ChangeEvent } from 'react'
import { data } from '../api'
import { DEFAULT_FISH_STATE,
	DEFAULT_FISH_QUALITY_STATE,
	FISH_DEFAULT_INPUT_VALUE,
	OTHER_ITEMS_DEFAULT_INPUT_VALUE,
	OTHER_ITEMS_STATE_DEFAULT_VALUE,
	OTHER_ITEMS_SUB_ITEMS_DEFAULT_VALUE
} from '../constants'
import {
	FishQuality,
	FishState,
	OtherItemData,
	OtherItemName,
	OtherItemsState,
	SetFishStateAction,
	SetOtherItemsStateAction,
	SubItems
} from '../types'
import { getFishItemFromData, isValidFishName, isValidFishQuality, isValidOtherItemName } from '../util'

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

export const createOtherItemsState = (items: OtherItemData): SubItems => Object.keys(items)
    .reduce((acc: SubItems, item: string): SubItems => ({
        ...acc,
        [item]: OTHER_ITEMS_DEFAULT_INPUT_VALUE
	}), OTHER_ITEMS_SUB_ITEMS_DEFAULT_VALUE
)

export const getStateForFish = (fishState: FishState, fishName: string): FishQuality => {
	if (isValidFishName(fishName)) {
		return fishState[fishName]
	}
	return DEFAULT_FISH_QUALITY_STATE
}

export const resetEntireOtherItemsState = (
	setState: SetOtherItemsStateAction
): void => {
	const { fish, ...items} = data.items
	const resetState: OtherItemsState = Object.keys(items).reduce((acc: OtherItemsState, item: string): OtherItemsState => {
		if (isValidOtherItemName(item)) {
			const stuff = items[item as OtherItemName] as OtherItemData
			acc[item as OtherItemName] = createOtherItemsState(stuff)
		}
			return acc
	}, OTHER_ITEMS_STATE_DEFAULT_VALUE)
	setState(resetState)
}

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

export const resetFishAndOtherItems = (
	setFishState: SetFishStateAction,
	setOtherItemsState: SetOtherItemsStateAction
) => {
	setFishState(createFishState())
	resetEntireOtherItemsState(setOtherItemsState)
}

export const resetOtherItemState = (
	state: OtherItemsState,
	setState: SetOtherItemsStateAction,
	item: string
): void => {
    if (typeof state[item] === 'object' && state[item] !== null) {
        const resetItem = Object.keys(state[item]).reduce((acc: Record<string, string>, subItem: string) => {
            acc[subItem] = OTHER_ITEMS_DEFAULT_INPUT_VALUE
            return acc
        }, {})
        setState(prevState => ({
            ...prevState,
            [item]: resetItem
        }))
    }
}

export const setFishState = (e: ChangeEvent<HTMLInputElement>, fishName: string, quality: string, setState: SetFishStateAction) => {
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