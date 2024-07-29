export type VillagerSchedule = {
    [season: string]: TimePeriod | Array<string> | any
}

type TimePeriod = {
	[timePeriod: string]: Array<string>
}