import affinities from './affinities'
import schedules from './schedules'
import { Villager } from '../../types'

const villagers: Array<Villager> = [
	{
		name: 'Kent',
		birthday: {
			season: 1,
			day: 4
		},
		address: '1 Willow Lane',
		family: [{
			name: 'Jodi',
			relationship: 'Wife'
		}, {
			name: 'Sam',
			relationship: 'Son'
		}, {
			name: 'Vincent',
			relationship: 'Son'
		}],
		...affinities.Kent,
		loveInterest: '',
		clinicVisit: '',
		schedule: schedules.Kent
	},
	{
		name: 'Lewis',
		birthday: {
			season: 1,
			day: 7
		},
		...affinities.Lewis,
		address: 'Mayor\'s Manor',
		family: [],
		loveInterest: '',
		clinicVisit: 'Fall 9',
		schedule: schedules.Lewis
	},
	{
		name: 'Vincent',
		birthday: {
			season: 1,
			day: 10
		},
		...affinities.Vincent,
		address: '1 Willow Lane',
		family: [{
			name: 'Jodi',
			relationship: 'Mother'
		}, {
			name: 'Kent',
			relationship: 'Father'
		}, {
			name: 'Sam',
			relationship: 'Brother'
		}],
		loveInterest: '',
		clinicVisit: 'Spring 11',
		schedule: schedules.Vincent
	},
	{
		name: 'Haley',
		birthday: {
			season: 1,
			day: 14
		},
		...affinities.Haley,
		address: '2 Willow Lane',
		family: [{
			name: 'Emily',
			relationship: 'Sister'
		}],
		loveInterest: 'Alex',
		clinicVisit: 'Winter 9',
		schedule: schedules.Haley
	},
	{
		name: 'Pam',
		birthday: {
			season: 1,
			day: 18
		},
		...affinities.Pam,
		address: 'Trailer',
		family: [{
			name: 'Penny',
			relationship: 'Daughter'
		}],
		loveInterest: '',
		clinicVisit: 'Spring 25',
		schedule: schedules.Pam
	},
	{
		name: 'Shane',
		birthday: {
			season: 1,
			day: 20
		},
		...affinities.Shane,
		address: 'Marnie\'s Ranch',
		family: [{
			name: 'Jas',
			relationship: 'Goddaughter'
		}, {
			name: 'Marnie',
			relationship: 'Aunt'
		}],
		loveInterest: 'Emily',
		clinicVisit: '',
		schedule: schedules.Shane
	},
	{
		name: 'Pierre',
		birthday: {
			season: 1,
			day: 26
		},
		...affinities.Pierre,
		address: 'Pierre\'s General Store',
		family: [{
			name: 'Caroline',
			relationship: 'Wife'
		}, {
			name: 'Abigail',
			relationship: 'Daughter'
		}],
		loveInterest: '',
		clinicVisit: '',
		schedule: schedules.Pierre
	},
	{
		name: 'Emily',
		birthday: {
			season: 1,
			day: 27
		},
		...affinities.Emily,
		address: '2 Willow Lane',
		family: [{
			name: 'Haley',
			relationship: 'Sister'
		}],
		loveInterest: 'Shane',
		clinicVisit: 'Winter 11',
		schedule: schedules.Emily
	},
	{
		name: 'Jas',
		birthday: {
			season: 2,
			day: 4
		},
		...affinities.Jas,
		address: 'Marnie\'s Ranch',
		family: [{
			name: 'Shane',
			relationship: 'Godfather'
		}, {
			name: 'Marnie',
			relationship: 'Aunt'
		}],
		loveInterest: '',
		clinicVisit: 'Winter 18',
		schedule: schedules.Jas
	},
	{
		name: 'Gus',
		birthday: {
			season: 2,
			day: 8
		},
		...affinities.Gus,
		address: 'The Stardrop Saloon',
		family: [],
		loveInterest: '',
		clinicVisit: 'Fall 4',
		schedule: schedules.Gus
	},
	{
		name: 'Maru',
		birthday: {
			season: 2,
			day: 10
		},
		...affinities.Maru,
		address: '24 Mountain Road',
		family: [{
			name: 'Robin',
			relationship: 'Mother'
		}, {
			name: 'Demetrius',
			relationship: 'Father'
		}, {
			name: 'Sebastian',
			relationship: 'Half-Brother'
		}],
		loveInterest: 'Harvey',
		clinicVisit: '',
		schedule: schedules.Maru
	},
	{
		name: 'Alex',
		birthday: {
			season: 2,
			day: 13
		},
		...affinities.Alex,
		address: '1 River Road',
		family: [{
			name: 'George',
			relationship: 'Grandfather'
		}, {
			name: 'Evelyn',
			relationship: 'Grandmother'
		}],
		loveInterest: 'Haley',
		clinicVisit: 'Summer 16',
		schedule: schedules.Alex
	},
	{
		name: 'Sam',
		birthday: {
			season: 2,
			day: 17
		},
		...affinities.Sam,
		address: '1 Willow Lane',
		family: [{
			name: 'Jodi',
			relationship: 'Mother'
		}, {
			name: 'Kent',
			relationship: 'Father'
		}, {
			name: 'Vincent',
			relationship: 'Brother'
		}],
		loveInterest: 'Penny',
		clinicVisit: 'Fall 11',
		schedule: schedules.Sam
	},
	{
		name: 'Demetrius',
		birthday: {
			season: 2,
			day: 19
		},
		...affinities.Demetrius,
		address: '24 Mountain Road',
		family: [{
			name: 'Maru',
			relationship: 'Daughter'
		}, {
			name: 'Robin',
			relationship: 'Wife'
		}, {
			name: 'Sebastian',
			relationship: 'Stepson'
		}],
		loveInterest: '',
		clinicVisit: 'Summer 25',
		schedule: schedules.Demetrius
	},
	{
		name: 'Dwarf',
		birthday: {
			season: 2,
			day: 22
		},
		...affinities.Dwarf,
		address: 'Eastern Cave',
		family: [],
		loveInterest: '',
		clinicVisit: '',
		schedule: schedules.Dwarf
	},
	{
		name: 'Willy',
		birthday: {
			season: 2,
			day: 24
		},
		...affinities.Willy,
		address: 'Fish Shop',
		family: [],
		loveInterest: '',
		clinicVisit: 'Spring 9',
		schedule: schedules.Willy
	},
	{
		name: 'Leo',
		birthday: {
			season: 2,
			day: 26
		},
		...affinities.Leo,
		address: 'Treehouse (Ginger Island)/Hut (Stardew Valley)',
		family: [],
		loveInterest: '',
		clinicVisit: '',
		schedule: schedules.Leo
	},
	{
		name: 'Penny',
		birthday: {
			season: 3,
			day: 2
		},
		...affinities.Penny,
		address: 'Trailer',
		family: [{
			name: 'Pam',
			relationship: 'Mother'
		}],
		loveInterest: 'Sam',
		clinicVisit: 'Winter 4',
		schedule: schedules.Penny
	},
	{
		name: 'Elliot',
		birthday: {
			season: 3,
			day: 5
		},
		...affinities.Elliot,
		address: 'Elliot\'s Cabin',
		family: [],
		loveInterest: 'Leah',
		clinicVisit: 'Summer 9',
		schedule: schedules.Elliot
	},
	{
		name: 'Jodi',
		birthday: {
			season: 3,
			day: 11
		},
		...affinities.Jodi,
		address: '1 Willow Lane',
		family: [{
			name: 'Kent',
			relationship: 'Husband'
		}, {
			name: 'Sam',
			relationship: 'Son'
		}, {
			name: 'Vincent',
			relationship: 'Son'
		}],
		loveInterest: '',
		clinicVisit: 'Spring 11 (with Vincent) & Spring 18',
		schedule: schedules.Jodi
	},
	{
		name: 'Abigail',
		birthday: {
			season: 3,
			day: 13
		},
		...affinities.Abigail,
		address: 'Pierrre\'s General Store',
		family: [{
			name: 'Pierre',
			relationship: 'Father'
		}, {
			name: 'Caroline',
			relationship: 'Mother'
		}],
		loveInterest: 'Sebastian',
		clinicVisit: 'Spring 4',
		schedule: schedules.Abigail
	},
	{
		name: 'Sandy',
		birthday: {
			season: 3,
			day: 15
		},
		...affinities.Sandy,
		address: 'Oasis',
		family: [],
		loveInterest: '',
		clinicVisit: '',
		schedule: schedules.Sandy
	},
	{
		name: 'Marnie',
		birthday: {
			season: 3,
			day: 18
		},
		...affinities.Marnie,
		address: 'Marnie\'s Ranch',
		family: [{
			name: 'Jas',
			relationship: 'Goddaughter'
		}, {
			name: 'Shane',
			relationship: 'Nephew'
		}],
		loveInterest: '',
		clinicVisit: 'Fall 18 & Winter 18 (with Jas)',
		schedule: schedules.Marnie
	},
	{
		name: 'Robin',
		birthday: {
			season: 3,
			day: 21
		},
		...affinities.Robin,
		address: '24 Mountain Road',
		family: [{
			name: 'Maru',
			relationship: 'Daughter'
		}, {
			name: 'Demetrius',
			relationship: 'Husband'
		}, {
			name: 'Sebastian',
			relationship: 'Stepson'
		}],
		loveInterest: '',
		clinicVisit: 'Summer 18',
		schedule: schedules.Robin
	},
	{
		name: 'George',
		birthday: {
			season: 3,
			day: 24
		},
		...affinities.George,
		address: '1 River Road',
		family: [{
			name: 'Evelyn',
			relationship: 'Wife'
		}, {
			name: 'Alex',
			relationship: 'Grandson'
		}],
		loveInterest: '',
		clinicVisit: '23rd of each season',
		schedule: schedules.George
	},
	{
		name: 'Krobus',
		birthday: {
			season: 4,
			day: 1
		},
		...affinities.Krobus,
		address: 'Krobus\' Shop',
		family: [],
		loveInterest: '',
		clinicVisit: '',
		schedule: schedules.Krobus
	},
	{
		name: 'Linus',
		birthday: {
			season: 4,
			day: 3
		},
		...affinities.Linus,
		address: 'Tent',
		family: [],
		loveInterest: '',
		clinicVisit: '',
		schedule: schedules.Linus
	},
	{
		name: 'Caroline',
		birthday: {
			season: 4,
			day: 7
		},
		...affinities.Caroline,
		address: 'Pierrre\'s General Store',
		family: [{
			name: 'Pierre',
			relationship: 'Husband'
		}, {
			name: 'Abigail',
			relationship: 'Daughter'
		}],
		loveInterest: '',
		clinicVisit: 'Fall 25',
		schedule: schedules.Caroline
	},
	{
		name: 'Sebastian',
		birthday: {
			season: 4,
			day: 10
		},
		...affinities.Sebastian,
		address: '24 Mountain Road',
		family: [{
			name: 'Robin',
			relationship: 'Mother'
		}, {
			name: 'Demetrius',
			relationship: 'Stepfather'
		}, {
			name: 'Maru',
			relationship: 'Stepsister'
		}],
		loveInterest: 'Abigail',
		clinicVisit: 'Summer 4',
		schedule: schedules.Sebastian
	},
	{
		name: 'Harvey',
		birthday: {
			season: 4,
			day: 14
		},
		...affinities.Harvey,
		address: 'Harvey\'s Clinic',
		family: [],
		loveInterest: 'Maru',
		clinicVisit: '',
		schedule: schedules.Harvey
	},
	{
		name: 'Wizard',
		birthday: {
			season: 4,
			day: 17
		},
		...affinities.Wizard,
		address: 'Wizard\'s Tower',
		family: [],
		loveInterest: '',
		clinicVisit: '',
		schedule: schedules.Wizard
	},
	{
		name: 'Evelyn',
		birthday: {
			season: 4,
			day: 20
		},
		...affinities.Evelyn,
		address: '1 River Road',
		family: [{
			name: 'George',
			relationship: 'Husband'
		}, {
			name: 'Alex',
			relationship: 'Grandson'
		}],
		loveInterest: '',
		clinicVisit: '2nd of each season; 23rd of each season with George',
		schedule: schedules.Evelyn
	},
	{
		name: 'Leah',
		birthday: {
			season: 4,
			day: 23
		},
		...affinities.Leah,
		address: 'Leah\'s Cottage',
		family: [],
		loveInterest: 'Elliot',
		clinicVisit: 'Spring 16',
		schedule: schedules.Leah
	},
	{
		name: 'Clint',
		birthday: {
			season: 4,
			day: 26
		},
		...affinities.Clint,
		address: 'Blacksmith',
		family: [],
		loveInterest: '',
		clinicVisit: 'Winter 16',
		schedule: schedules.Clint
	}
]

export default villagers