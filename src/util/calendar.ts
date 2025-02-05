import { data } from '../api'
import {
	COOKIE_ID,
	DEFAULT_EVENT,
	DEFAULT_SEASONAL_EVENT,
	DEFAULT_VILLAGER, SEASONS,
	SEASON_ID_MAP,
	VALID_SEASON_IDS
} from '../constants'
import {
	Affinity,
	CookieData,
	Event,
	Notes,
	Season,
	SeasonalEvent,
	SeasonId,
	SetNoteEditIndexStateAction,
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
	Array.from({ length: 4 }, (_, i) => Array.from({ length: 7 }, (__, j) => 7 * i + j + 1))

export const deleteNote = (
	day: number,
	index: number,
	isEditing: boolean,
	season: Season,
	setNote: SetNoteStateAction
): void => {
	const cookieData = getCookieData()
	const notes = cookieData.Notes[season][day - 1]
	if (!isEditing) {
		notes.splice(index, 1)
		setNote(' ')
		setTimeout(() => setNote(''), 0)
	}
	localStorage.setItem(COOKIE_ID, JSON.stringify(cookieData))
}

export const editNote = (
	day: number,
	index: number,
	note: string,
	season: Season,
	setNote: SetNoteStateAction,
	setNoteEditIndex: SetNoteEditIndexStateAction
): void => {
	setNote(note)
	deleteNote(day, index, true, season, setNote)
	setNoteEditIndex(index)
}

const getConvertedKey = (key: string): keyof typeof SEASON_ID_MAP => key as unknown as keyof typeof SEASON_ID_MAP

export const getCookieData = (): CookieData => {
	const cookieData = localStorage.getItem(COOKIE_ID)
	return cookieData ? JSON.parse(cookieData) : {}
}

export const getCookieDefaultValue = (): string => {
    const COOKIE_NOTES = SEASONS.reduce((acc: CookieData, season: Season) => {
        acc.Notes[season] = Array.from({ length: 30 }, () => [])
        return acc
    }, { Notes: {} } as CookieData)

    return JSON.stringify(COOKIE_NOTES)
}

export const getEventFromDay = (day: number, seasonId: SeasonId): Event => {
	const event = data.events.find((currentEvent: Event) =>
		currentEvent.date.day === day
		&& getSeasonIdAsNumber(currentEvent.date.season) === getSeasonIdAsNumber(seasonId)
	)
	if (!event) {
		return DEFAULT_EVENT
	}
	return event
}

export const getNextSeasonId = (isForward: boolean, seasonId: SeasonId): number =>
	isForward ? ((getSeasonIdAsNumber(seasonId) + 1) % 4 || 4) : ((getSeasonIdAsNumber(seasonId) - 1) % 4 || 4)

export const getNotesForDay = (day: number, season: Season): Notes => {
	const cookieData = getCookieData()

	if (Object.keys(cookieData).length === 0) {
		return []
	}

	return cookieData.Notes[season][day - 1]
}

export const getSeasonalEvent = (day: number, seasonId: SeasonId): SeasonalEvent => {
	const seasonalEvent = data.seasonalEvents.find((event: SeasonalEvent) =>
		event.date.day === day &&
		getSeasonIdAsNumber(event.date.season) === getSeasonIdAsNumber(seasonId)
	)
	if (!seasonalEvent) {
		return DEFAULT_SEASONAL_EVENT
	}
	return seasonalEvent
}

export const getSeasonId = (season: string): SeasonId =>
	(Object.keys(SEASON_ID_MAP).find((key: string) => {
		const convertedKey = getConvertedKey(key)
		return SEASON_ID_MAP[convertedKey] === season
	}) || 1) as SeasonId

const getSeasonIdAsNumber = (seasonId: SeasonId): number => parseInt(seasonId + '')

export const getVillagerFromBirthday = (birthdayDay: number, season: Season): Villager => {
	const villager = data.villagers.find((currentVillager: Villager) =>
		currentVillager.birthday.day === birthdayDay && currentVillager.birthday.season === getSeasonIdAsNumber(getSeasonId(season))
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

export const isValidSeasonalEvent = (event: SeasonalEvent): boolean =>
	event.name !== '' &&
	event.icon !== ''

export const isValidVillager = (villager: Villager): boolean =>
	villager.birthday.day !== 0 ||
	villager.birthday.season !== 1

export const saveNote = (
	day: number,
	note: string,
	noteEditIndex: number,
	season: Season,
	setNote: SetNoteStateAction,
	setNoteEditIndex: SetNoteEditIndexStateAction
): void => {
	if (note === '') {
		return
	}
	setNote('')
	setNotesForDay(day, note, noteEditIndex, season)
	setNoteEditIndex(-1)
}

export const setCookieData = (): void => localStorage.setItem(COOKIE_ID, getCookieDefaultValue())

export const setNotesForDay = (day: number, note: string, noteEditIndex: number, season: Season): void => {
	const cookieData = getCookieData()
	const startIndex = noteEditIndex === -1 ? cookieData.Notes[season][day - 1].length : noteEditIndex
	cookieData.Notes[season][day - 1].splice(startIndex, noteEditIndex === -1 ? 0 : 1, note)
	localStorage.setItem(COOKIE_ID, JSON.stringify(cookieData))
}

export const toggleCalendarModal = (open: boolean, setOpen: SetOpenStateAction) => {
	if (!open) {
		setOpen(true)
	}
}