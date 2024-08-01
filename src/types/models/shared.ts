import { FamilyMember, StardewDate, VillagerSchedule } from '..'

export type Affinity = 'loves' | 'likes' | 'neutral' | 'dislikes' | 'hates'

export type Villager = {
	name: string
	birthday: StardewDate
	loves: Array<string>
	likes: Array<string>
	neutral: Array<string>
	dislikes: Array<string>
	hates: Array<string>
	address: string
	family: Array<FamilyMember>
	loveInterest: string
	clinicVisit: string
	schedule: VillagerSchedule
}