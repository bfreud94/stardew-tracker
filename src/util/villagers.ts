import { DEFAULT_VILLAGER } from '../constants'
import { SetCurrentVillagerStateAction, SetOpenStateAction, Villager } from '../types'

export const toggleVillagerModal = (
	open: boolean,
	setCurrentVillager: SetCurrentVillagerStateAction,
	setOpen: SetOpenStateAction,
	villager: Villager,
) => {
	if (!open) {
		setCurrentVillager(villager)
		setOpen(true)
	} else {
		setCurrentVillager(DEFAULT_VILLAGER)
	}
}