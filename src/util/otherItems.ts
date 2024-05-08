import { Dispatch, SetStateAction } from 'react'
import { data } from '../api/index'

export const createOtherItemsState = (items: Record<string, any>): any => Object.keys(items)
	.reduce((acc: Record<string, number>, item: string): Record<string, number> => ({
		...acc,
		[item]: 0
}), {})

export const resetOtherItemState = (
	state: Record<string, any>,
	setState: Dispatch<SetStateAction<Record<string, any>>>,
	item: string
): void => {
    if (typeof state[item] === 'object' && state[item] !== null) {
        const resetItem = Object.keys(state[item]).reduce((acc: Record<string, number>, subItem: string) => {
            acc[subItem] = 0
            return acc
        }, {})

        setState(prevState => ({
            ...prevState,
            [item]: resetItem
        }))
    }
}

export const resetEntireState = (
	items: Record<string, any>,
	setState: Dispatch<SetStateAction<Record<string, any>>>
): void => {
	const resetState = Object.keys(items).reduce((acc: Record<string, any>, item: string) => {
		acc[item] = createOtherItemsState(items[item])
		return acc
	}, {})
	setState(resetState)
}

export const getTotalForOtherItems = (otherItemsState: Record<string, any>): number => Object.keys(otherItemsState).reduce((acc: number, item: string) => (
	acc + Object.keys(otherItemsState[item as keyof typeof otherItemsState]).reduce((itemAcc: number, subItem: string) => (
		itemAcc + (parseInt(String(data.items[item as keyof typeof data.items][subItem]))
			* parseInt(String(otherItemsState[item as keyof typeof otherItemsState][subItem])))
	), 0)
), 0)