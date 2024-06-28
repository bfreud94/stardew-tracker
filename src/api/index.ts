import { Data } from '../types/models'

export const data: Data = {
	villagers: [
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
			'Prismatic Shard': 2000,
			Diamond: 750,
			Emerald: 250,
			Ruby: 250,
			Jade: 200,
			Aquamarine: 180,
			Amethyst: 100,
			Topaz: 80
		},
		minerals: {
			'Fire Quartz': 100,
			'Frozen Tear': 75,
			'Earth Crystal': 50,
			Quartz: 25
		},
		geodes: {
			Magma: 150,
			Frozen: 100,
			Normal: 50
		}
	}
}