import { RandomEvent } from '../../types'

const randomEvents: Array<RandomEvent> = [
	{
		name: 'The Witch',
		description: 'There\'s a 1% chance of the witch event being chosen. '
			+ 'The event randomly chooses one coop (each with an 80% chance if it\'s '
			+ 'been upgraded at least once, and has fewer than 50 placed objects), '
			+ 'or one Slime Hutch (each with a 50% chance if it contains at least one slime or other NPC, '
			+ 'and has no Wicked Statue). If one of the following buildings were not selected, the event does nothing.'
			+ 'The witch flies over the selected building.\n'
			+ 'If a coop was selected, she leaves a Void Egg that can be incubated into a Void Chicken.'
			+ 'If 100% Perfection has been reached, there is a 60% chance that a gold witch will instead appear '
			+ 'and leave a Golden Egg that can be incubated into a Golden Chicken.'
			+ 'If a slime hutch was selected, she turns any slimes inside into black slimes. '
			+ 'In late-game, the Witch\'s Hut can be visited, but the witch is never present.',
		odds: '1%'
	},
	{
		name: 'Meteorite',
		description: 'There\'s a 1% chance of the meteorite event being chosen. '
			+ 'The event chooses a random 3x3 area on the Farm and checks whether it contains any water, '
			+ 'placed objects that block movement, buildings, or resource clumps. If it does, the event does nothing. '
			+ 'Otherwise, the meteorite will spawn in the lower left 2x2 square within this area. '
			+ 'A unique Meteorite sound effect plays and a meteorite appears the next day on the farm in the selected area. '
			+ 'Any crops or paths in that area are destroyed. '
			+ 'This can be counter-productive, especially if the crops being grown are of more value than the loot from the meteorite. Before the shipping screen is displayed, a message is shown saying "An explosion was heard in the night..."',
		odds: '1%'
	},
	{
		name: 'Stone Owl',
		description: 'There\'s a 0.5% chance of the stone owl event being chosen. '
			+ 'The event tries 50 times to pick a random tile on the Farm which is clear to allow item placement. '
			+ 'An owl sound effect plays, and a unique Stone Owl appears on the chosen tile. '
			+ 'This owl is unrelated to the Stone Owl sold at the Night Market. '
			+ 'The description reads: "It\'s not clear where this came from, but it looks very fine." '
			+ 'If no tile allowing item placement is found, this event does nothing.',
		odds: '0.5%'
	},
	{
		name: 'Strange Capsule',
		description: 'After Year 1, there\'s a 0.8% chance of the strange capsule event being chosen. '
			+ 'The event tries 50 times to pick a random tile on the Farm which is clear and allows item placement. '
			+ 'Before the shipping screen is displayed, a message is shown saying "A strange sound was heard in the night..."'
			+ 'A unique UFO sound effect plays, and a Strange Capsule appears on a random tile of the farm. '
			+ 'The strange capsule can be picked up and placed around the farm. '
			+ 'It will emit a small amount of light when placed. '
			+ 'It turns into a broken Empty Capsule after about three days '
			+ '(unless it is stored in a chest or inside of the player\'s inventory), which enables a further Easter egg. '
			+ 'It can also turn into a broken Empty Capsule if applied with Fairy Dust. '
			+ 'Once this event has happened in a save file, it cannot happen again.'
			+ 'If no tile allowing item placement is found, this event does nothing, but still cannot happen again.',
		odds: '0.8%'
	}
]

export default randomEvents