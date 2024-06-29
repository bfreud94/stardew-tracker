export type SeasonId = 1 | 2 | 3 | 4

export type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter'

export type SeasonIdMap = Record<SeasonId, Season>

export type Notes = Array<string>

export type SeasonNotes = Array<Notes>

export type CookieData = {
	Notes: {
		Spring: SeasonNotes
		Summer: SeasonNotes
		Fall: SeasonNotes
		Winter: SeasonNotes
	}
}

export type Birthday = {
	season: number
	day: number
}