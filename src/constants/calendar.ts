import {
	Affinity,
	Event,
	Season,
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
	hates: []
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

export const SEASONS: Array<Season> = ['Spring', 'Summer', 'Fall', 'Winter']

export const SEASON_ID_MAP: SeasonIdMap = {
	1: 'Spring',
	2: 'Summer',
	3: 'Fall',
	4: 'Winter'
}

export const VALID_SEASON_IDS: Array<SeasonId> = [1, 2, 3, 4]