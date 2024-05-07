export interface Data {
	season: number
	birthdays: Array<Person>
	items: {
		fish: {
			[key: string]: {
				[key: string]: number
			}
		}
	}
}

type Birthday = {
	season: number
	day: number
}

type Person = {
	name: string
	birthday: Birthday
}

export const data: Data = {
	season: 1,
	birthdays: [
		{
			name: 'Alex',
			birthday: {
				season: 1,
				day: 1
			}
		},
		{
			name: 'Penny',
			birthday: {
				season: 1,
				day: 4
			}
		},
		{
			name: 'Robin',
			birthday: {
				season: 1,
				day: 13
			}
		},
		{
			name: 'Lewis',
			birthday: {
				season: 1,
				day: 15
			}
		},
		
	],
	items: {
		fish: {
			Bream: {
				normal: 45,
				silver: 56,
				gold: 67,
				iridium: 90
			},
			Bullhead: {
				normal: 75,
				silver: 93,
				gold: 112,
				iridium: 150
			},
			Carp: {
				normal: 30,
				silver: 37,
				gold: 45,
				iridium: 60
			},
			Catfish: {
				normal: 200,
				silver: 250,
				gold: 300,
				iridium: 400
			},
			Chub: {
				normal: 50,
				silver: 62,
				gold: 75,
				iridium: 100
			},
			'LM Bass': {
				normal: 100,
				silver: 125,
				gold: 150,
				iridium: 200
			},
			Shad: {
				normal: 60,
				silver: 75,
				gold: 90,
				iridium: 120
			}
		}
	}
}