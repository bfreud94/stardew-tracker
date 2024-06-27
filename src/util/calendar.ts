import { Dispatch, SetStateAction } from 'react'
import { data } from '../api'
import { COOKIE_ID, DEFAULT_VILLAGER, SEASON_ID_MAP, SeasonId, validSeasonIds } from '../constants'
import { Birthday } from '../types/calendar'
import { Villager } from '../types/models'

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

export const getCookieDefaultValue = () => {
	const COOKIE_NOTES = {
		'Notes': {
			Spring: Array.from({ length: 30 }, (_) => [])
		}
	}
	return JSON.stringify(COOKIE_NOTES)
}

export const getCookieData = () => {
	const data = localStorage.getItem(COOKIE_ID)
	return data ? JSON.parse(data) : {}
}

export const setCookieData = () => localStorage.setItem(COOKIE_ID, getCookieDefaultValue())

export const getNotesForDay = (day: number, season: string) => {
	const data = getCookieData()
	
	if (Object.keys(data).length === 0) {
		return ''
	}

	return data['Notes'][season][day - 1]
}

export const getCurrentSeason = (): string => {
	const seasonId = data.season as SeasonId

	if (!isValidSeasonId(seasonId)) {
		return ''
	}

	const season = SEASON_ID_MAP[seasonId]
	return season
}

export const villagerHasBirthday = (villager: Villager): boolean =>
	villager.birthday.day !== 0 &&
	villager.birthday.season !== 0

export const saveNote = (day: number, note: string, season: string, setNote: Dispatch<SetStateAction<string>>) => {
	if (note === '') {
		return
	}
	setNote('')
	setNotesForDay(day, note, season)
}

export const setNotesForDay = (day: number, note: string, season: string) => {
	const data = getCookieData()
	data['Notes'][season][day - 1].push(note)
	localStorage.setItem(COOKIE_ID, JSON.stringify(data))
}

export const deleteNote = (day: number, note: string, season: string, setNote: Dispatch<SetStateAction<string>>) => {
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