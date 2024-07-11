import { data } from '../api'
import { COOKIE_ID, DEFAULT_VILLAGER, SEASONS, SEASON_ID_MAP, VALID_SEASON_IDS } from '../constants'
import { Birthday,
	CookieData,
	Notes,
	Season,
	SeasonId,
	SetNoteStateAction,
	SetSeasonStateAction,
	Villager
} from '../types'

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

export const isValidSeasonId = (seasonId: SeasonId): boolean => VALID_SEASON_IDS.includes(seasonId)

export const getCookieDefaultValue = (): string => {
    const COOKIE_NOTES = SEASONS.reduce((acc: CookieData, season: Season) => {
        acc.Notes[season] = Array.from({ length: 30 }, (_) => [])
        return acc
    }, { Notes: {} } as CookieData)

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

export const deleteNote = (
	day: number,
	index: number,
	isEditing: boolean,
	season: Season,
	setNote: SetNoteStateAction
): void => {
	const data = getCookieData()
	const notes = data['Notes'][season][day - 1]
	notes.splice(index, 1)
	localStorage.setItem(COOKIE_ID, JSON.stringify(data))
	if (!isEditing) {
		setNote(' ')
		setTimeout(() => setNote(''), 0)
	}
}

export const editNote = (
	day: number,
	index: number,
	note: string,
	season: Season,
	setNote: SetNoteStateAction
): void => {
	setNote(note)
	deleteNote(day, index, true, season, setNote)
}

const getSeasonId = (season: string): SeasonId =>
	(Object.keys(SEASON_ID_MAP).find((key) => {
		const convertedKey = key as unknown as keyof typeof SEASON_ID_MAP
		return SEASON_ID_MAP[convertedKey] === season
	}) || 1) as SeasonId

export const changeSeason = (isForward: boolean, season: Season, setSeason: SetSeasonStateAction): void => {
	const seasonId = getSeasonId(season)
	const nextSeasonId = getNextSeasonId(isForward, seasonId)
	const nextSeason = SEASON_ID_MAP[nextSeasonId as SeasonId]
	setSeason(nextSeason)
}

export const getNextSeasonId = (isForward: boolean, seasonId: SeasonId) =>
	isForward ? ((parseInt(seasonId + '') + 1) % 4 || 4) : ((parseInt(seasonId + '') - 1) % 4 || 4)