export interface Data {
	season: number
	birthdays: Array<Person>
	items: {
		fish: {
			[key: string]: {
				[key: string]: number
			}
		},
		gems: {
			[key: string]: number
		},
		minerals: {
			[key: string]: number
		},
		geodes: {
			[key: string]: number
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
				Normal: 45,
				Silver: 56,
				Gold: 67,
				Iridium: 90
			},
			Bullhead: {
				Normal: 75,
				Silver: 93,
				Gold: 112,
				Iridium: 150
			},
			Carp: {
				Normal: 30,
				Silver: 37,
				Gold: 45,
				Iridium: 60
			},
			Catfish: {
				Normal: 200,
				Silver: 250,
				Gold: 300,
				Iridium: 400
			},
			Chub: {
				Normal: 50,
				Silver: 62,
				Gold: 75,
				Iridium: 100
			},
			'LM Bass': {
				Normal: 100,
				Silver: 125,
				Gold: 150,
				Iridium: 200
			},
			Shad: {
				Normal: 60,
				Silver: 75,
				Gold: 90,
				Iridium: 120
			}
		},
		gems: {
			prismaticShard: 2000,
			diamond: 750,
			emerald: 250,
			ruby: 250,
			jade: 200,
			aquamarine: 180,
			amethyst: 100,
			topaz: 80
		},
		minerals: {
			fireQuartz: 100,
			frozenTear: 75,
			quartz: 25,
			earthCrystal: 50
		},
		geodes: {
			magma: 150,
			frozen: 100,
			normal: 50
		}
	}
}