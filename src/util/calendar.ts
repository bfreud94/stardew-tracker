import { data } from '../api'
import { COOKIE_ID, DEFAULT_EVENT, DEFAULT_VILLAGER, SEASONS, SEASON_ID_MAP, VALID_SEASON_IDS } from '../constants'
import { Affinity,
	CookieData,
	Event,
	Notes,
	Season,
	SeasonId,
	SetNoteStateAction,
	SetOpenStateAction,
	SetSeasonStateAction,
	Villager
} from '../types'

export const changeSeason = (isForward: boolean, season: Season, setSeason: SetSeasonStateAction): void => {
	const seasonId = getSeasonId(season)
	const nextSeasonId = getNextSeasonId(isForward, seasonId)
	const nextSeason = SEASON_ID_MAP[nextSeasonId as SeasonId]
	setSeason(nextSeason)
}

export const createMonthWithWeeks = (): Array<Array<number>> => 
	Array.from({ length: 4 }, (_, i) => Array.from({ length: 7 }, (_, j) => 7 * i + j + 1))

export const dayHasEvent = (day: number, seasonId: SeasonId) => {
	const event = data.events.find((event: Event) =>
		event.date.day === day &&
		getSeasonIdAsNumber(event.date.season) === getSeasonIdAsNumber(seasonId)
	)
	if (!event) {
		return DEFAULT_EVENT
	}
	return event
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

const getConvertedKey = (key: string): keyof typeof SEASON_ID_MAP => key as unknown as keyof typeof SEASON_ID_MAP

export const getCookieData = (): CookieData => {
	const data = localStorage.getItem(COOKIE_ID)
	return data ? JSON.parse(data) : {}
}

export const getCookieDefaultValue = (): string => {
    const COOKIE_NOTES = SEASONS.reduce((acc: CookieData, season: Season) => {
        acc.Notes[season] = Array.from({ length: 30 }, (_) => [])
        return acc
    }, { Notes: {} } as CookieData)

    return JSON.stringify(COOKIE_NOTES)
}

export const getNextSeasonId = (isForward: boolean, seasonId: SeasonId): number =>
	isForward ? ((getSeasonIdAsNumber(seasonId) + 1) % 4 || 4) : ((getSeasonIdAsNumber(seasonId) - 1) % 4 || 4)

export const getNotesForDay = (day: number, season: Season): Notes => {
	const data = getCookieData()
	
	if (Object.keys(data).length === 0) {
		return []
	}

	return data['Notes'][season][day - 1]
}

export const getSeasonId = (season: string): SeasonId =>
	(Object.keys(SEASON_ID_MAP).find((key: string) => {
		const convertedKey = getConvertedKey(key)
		return SEASON_ID_MAP[convertedKey] === season
	}) || 1) as SeasonId

const getSeasonIdAsNumber = (seasonId: SeasonId) => parseInt(seasonId + '')

export const getVillagerFromBirthday = (birthdayDay: number, season: Season): Villager => {
	const villager = data.villagers.find((villager: Villager) =>
		villager.birthday.day === birthdayDay && villager.birthday.season === getSeasonIdAsNumber(getSeasonId(season))
	)
	if (!villager) {
		return DEFAULT_VILLAGER
	}
	return villager
}

export const includeLeftMargin = (affinity: Affinity): boolean => affinity !== 'loves'

export const isValidSeasonId = (seasonId: SeasonId): boolean => VALID_SEASON_IDS.includes(seasonId)

export const isValidEvent = (event: Event): boolean =>
	event.name !== '' &&
	event.location !== '' &&
	event.time.start !== '' &&
	event.time.end !== ''

export const isValidVillager = (villager: Villager): boolean =>
	villager.birthday.day !== 0 ||
	villager.birthday.season !== 1

export const saveNote = (day: number, note: string, season: Season, setNote: SetNoteStateAction): void => {
	if (note === '') {
		return
	}
	setNote('')
	setNotesForDay(day, note, season)
}

export const setCookieData = (): void => localStorage.setItem(COOKIE_ID, getCookieDefaultValue())

export const setNotesForDay = (day: number, note: string, season: Season): void => {
	const data = getCookieData()
	data['Notes'][season][day - 1].push(note)
	localStorage.setItem(COOKIE_ID, JSON.stringify(data))
}

export const toggleCalendarModal = (open: boolean, setOpen: SetOpenStateAction) => {
	if (!open) {
		setOpen(true)
	}
}