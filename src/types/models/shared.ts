import { SeasonId } from '../'


export type Affinity = 'loves' | 'likes' | 'neutral' | 'dislikes' | 'hates'

export type Birthday = {
	season: SeasonId
	day: number
}

export type Villager = {
	name: string
	birthday: Birthday
	loves: Array<string>
	likes: Array<string>
	neutral: Array<string>
	dislikes: Array<string>
	hates: Array<string>
}