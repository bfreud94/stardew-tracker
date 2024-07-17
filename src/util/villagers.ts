import { DEFAULT_VILLAGER } from '../constants'
import { SetCurrentVillagerStateAction, SetOpenStateAction, Villager } from '../types'

export const getSeasonFromSeasonId = (seasonId: number): string => {
	switch (seasonId) {
		case 1:
			return 'Spring'
		case 2:
			return 'Summer'
		case 3:
			return 'Fall'
		case 4:
			return 'Winter'
		default:
			return ''
	}
}

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