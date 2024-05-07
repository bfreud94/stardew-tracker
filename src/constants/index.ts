export const SEASON_ID_MAP = {
	1: 'Spring',
	2: 'Summer',
	3: 'Fall',
	4: 'Winter'
}

export type SeasonId = 1 | 2 | 3 | 4

const validSeasonIds: Array<SeasonId> = [1, 2, 3, 4]

export const isValidSeasonId = (seasonId: SeasonId) => validSeasonIds.includes(seasonId)