import { Dispatch, SetStateAction } from 'react'
import { Season, SeasonId } from '../constants'

export type SeasonIdMap = Record<SeasonId, Season>

export type SetSeasonStateAction = Dispatch<SetStateAction<Season>>

export type Birthday = {
	season: number
	day: number
}