import { Villager } from '../types/models'

export const SEASON_ID_MAP = {
	1: 'Spring',
	2: 'Summer',
	3: 'Fall',
	4: 'Winter'
}

export type SeasonId = 1 | 2 | 3 | 4

export const validSeasonIds: Array<SeasonId> = [1, 2, 3, 4]

export const COOKIE_ID = 'SVPWA-Data'

export const DEFAULT_VILLAGER: Villager = {
	name: '',
	birthday: {
		day: 0,
		season: 0
	}
}