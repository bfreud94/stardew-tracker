export type SeasonId = 1 | 2 | 3 | 4

export type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter'

export type SeasonIdMap = {
	[key: number]: Season
}

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