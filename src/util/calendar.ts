import { data } from '../api'
import { COOKIE_ID, DEFAULT_VILLAGER, SEASON_ID_MAP, Season, SeasonId, validSeasonIds } from '../constants'
import { Birthday, SetNoteStateAction, SetSeasonStateAction, Villager } from '../types'

export const createMonthWithWeeks = (): Array<Array<number>> => 
	Array.from({ length: 4 }, (_, i) => Array.from({ length: 7 }, (_, j) => 7 * i + j + 1))

export const getVillagerFromBirthday = (birthdayDay: number): Villager => {
	const villager = data.villagers.find((b: Villager) => b.birthday.day === birthdayDay)
	if (!villager) {
		return DEFAULT_VILLAGER
	}
	return villager
}

export const hasBirthday = (birthday: Birthday): boolean => birthday.season !== 0 && birthday.day !== 0

export const isValidSeasonId = (seasonId: SeasonId): boolean => validSeasonIds.includes(seasonId)

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

export const getCookieDefaultValue = (): string => {
	const COOKIE_NOTES = {
		'Notes': {
			Spring: Array.from({ length: 30 }, (_) => [])
		}
	}
	return JSON.stringify(COOKIE_NOTES)
}

export const getCookieData = (): CookieData => {
	const data = localStorage.getItem(COOKIE_ID)
	return data ? JSON.parse(data) : {}
}

export const setCookieData = (): void => localStorage.setItem(COOKIE_ID, getCookieDefaultValue())

export const getNotesForDay = (day: number, season: Season): Notes => {
	const data = getCookieData()
	
	if (Object.keys(data).length === 0) {
		return []
	}

	return data['Notes'][season][day - 1]
}

export const villagerHasBirthday = (villager: Villager): boolean =>
	villager.birthday.day !== 0 &&
	villager.birthday.season !== 0

export const saveNote = (day: number, note: string, season: Season, setNote: SetNoteStateAction): void => {
	if (note === '') {
		return
	}
	setNote('')
	setNotesForDay(day, note, season)
}

export const setNotesForDay = (day: number, note: string, season: Season): void => {
	const data = getCookieData()
	data['Notes'][season][day - 1].push(note)
	localStorage.setItem(COOKIE_ID, JSON.stringify(data))
}

export const deleteNote = (day: number, note: string, season: Season, setNote: SetNoteStateAction): void => {
	const data = getCookieData()
	const notes = data['Notes'][season][day - 1]
	const index = notes.indexOf(note)
	if (index > -1) {
		notes.splice(index, 1)
	}
	localStorage.setItem(COOKIE_ID, JSON.stringify(data))
	setNote(' ')
	setTimeout(() => setNote(''), 0)
}

const getSeasonId = (season: string): SeasonId =>
	(Object.keys(SEASON_ID_MAP).find((key) => {
		const convertedKey = key as unknown as keyof typeof SEASON_ID_MAP
		return SEASON_ID_MAP[convertedKey] === season
	}) || 1) as SeasonId

export const changeSeason = (season: Season, setSeason: SetSeasonStateAction): void => {
	const seasonId = getSeasonId(season)
	const nextSeasonId = (parseInt(seasonId + '') + 1) % 4 || 4
	const nextSeason = SEASON_ID_MAP[nextSeasonId as SeasonId]
	setSeason(nextSeason)
}