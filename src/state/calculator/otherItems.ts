import { data } from '../../api'
import { OtherItemsState, SubItems } from '../../components/Calculator/OtherItems/OtherItems.types'
import { OTHER_ITEMS_DEFAULT_INPUT_VALUE, OTHER_ITEMS_STATE_DEFAULT_VALUE, OTHER_ITEMS_SUB_ITEMS_DEFAULT_VALUE } from '../../constants'
import { OtherItemName, SetOtherItemsState } from '../../types'
import { OtherItemData } from '../../types/models/calculator'
import { isValidOtherItemName } from '../../util'

export const createOtherItemsState = (items: OtherItemData): SubItems => Object.keys(items)
    .reduce((acc: SubItems, item: string): SubItems => ({
        ...acc,
        [item]: OTHER_ITEMS_DEFAULT_INPUT_VALUE
	}), OTHER_ITEMS_SUB_ITEMS_DEFAULT_VALUE
)

export const resetOtherItemState = (
	state: OtherItemsState,
	setState: SetOtherItemsState,
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

export const resetEntireState = (
	setState: SetOtherItemsState
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