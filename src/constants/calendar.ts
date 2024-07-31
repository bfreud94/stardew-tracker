import {
	Affinity,
	Event,
	Season,
	SeasonalEvent,
	SeasonId,
	SeasonIdMap,
	Villager
} from '../types'

export const AFFINITIES: Array<Affinity> = ['loves', 'likes', 'neutral', 'dislikes', 'hates']

export const COOKIE_ID = 'SVPWA-Data'

export const DAYS = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su']

export const DEFAULT_VILLAGER: Villager = {
	name: '',
	birthday: {
		day: 0,
		season: 1
	},
	loves: [],
	likes: [],
	neutral: [],
	dislikes: [],
	hates: [],
	address: '',
	family: [],
	loveInterest: '',
	clinicVisit: '',
	schedule: {}
}

export const DEFAULT_EVENT: Event = {
	name: '',
	date: {
		season: 1,
		day: 1
	},
	location: '',
	time: {
		start: '',
		end: ''
	},
	icon: '',
	notes: []
}

export const DEFAULT_SEASONAL_EVENT: SeasonalEvent = {
	name: '',
	date: {
		season: 1,
		day: 1
	},
	icon: ''
}

export const SEASONS: Array<Season> = ['Spring', 'Summer', 'Fall', 'Winter']

export const SEASON_ID_MAP: SeasonIdMap = SEASONS
	.reduce((map: SeasonIdMap, season: Season, index: number) => ({
		...map,
		[index + 1]: season
	}), {} as SeasonIdMap)

export const VALID_SEASON_IDS: Array<SeasonId> = [1, 2, 3, 4]