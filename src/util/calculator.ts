import { data } from '../api/index'
import { SetFishStateAction } from '../types/index'

export const getEllipses = (number: number): string => {
	let ellipses = ' . . . . . . '
	while (number > 1) {
		number /= 10
		ellipses = ellipses.slice(0, -1)
	}
	return ellipses
}

export const createState = (): Record<string, any> => Object.keys(data.items.fish)
	.reduce((acc: Record<string, any>, fishName) => {
        const fishItem = data.items.fish[fishName]
        const fishItemQualityComponents = Object.keys(fishItem).reduce((acc: Record<string, any>, quality) => {
            acc[quality] = 0
            return acc
        }, {})
        acc[fishName] = fishItemQualityComponents
        return acc
    }, {}
)

export const getGrandTotal = (fishState: any) => Object.keys(data.items.fish).reduce((acc, fishName) => {
	const fishItem = data.items.fish[fishName]
	const totalForFish = getTotalForFish(fishItem, fishName, fishState)
	return acc + totalForFish
}, 0)

export const getTotalForFish = (fishItem: any, fishName: string, fishState: Record<string, any>): number => Object.keys(fishItem)
	.reduce((acc, quality) => {
		const fishAmount = fishState[fishName][quality]
		const fishItemValue = fishItem[quality]
		const total = fishItemValue * fishAmount
		return acc + total
	}, 0)

export const resetFishAmount = (
	fishName: string,
	fishState: Record<string, any>,
	setFishState: SetFishStateAction
) => {
	const fishItem = data.items.fish[fishName]
	const fishItemQualityAmounts = Object.keys(fishItem).reduce((acc: Record<string, any>, quality) => {
		acc[quality] = 0
		return acc
	}, {})
	setFishState({
		...fishState,
		[fishName]: fishItemQualityAmounts
	})
}