import { Event } from '../../types'

const events: Array<Event> = [
	{
		name: 'Egg Festival',
		date: {
			season: 1,
			day: 13
		},
		location: 'Town Square',
		time: {
			start: '9:00 AM',
			end: '2:00 PM'
		},
		icon: 'Flag.png',
		notes: [
			'This is the only time to buy Strawberry Seeds, which cost 100g each',
			'Below is the optimal route for winning the Egg Hunt',
			'IMAGE:EggHunt.png'
		]
	},
	{
		name: 'Desert Festival',
		date: {
			season: 1,
			day: 15
		},
		location: 'Desert',
		time: {
			start: '10:00 AM',
			end: '2:00 AM'
		},
		icon: 'Star.png',
		notes: [
			'This event is unlocked once the Bus is repaired',
			'Sandy\'s shop is not open during the event',
			'Every day, two villagers are chosen at random to host their own shops',
			'Emily and Sandy offer the player a random new outfit',
			'The Chef gives the player a choice of ingredients to make them a meal with varying effects depending on the ingredients chosen',
			'Once per festival, the player may obtain a cactus decor item from the Cactus Salesman at the bottom of the map',
			'During the Desert Festival, Marlon offers one-day Skull Cavern-related quests that will award the player Calico Eggs if completed',
			'Willy offers one-day fishing-related quests that will award the player Calico Eggs upon completion',
			'The Scholar asks the player a series of four questions. If all four answers are correct, then the reward is 50 Calico Eggs'
		]
	},
	{
		name: 'Desert Festival',
		date: {
			season: 1,
			day: 16
		},
		location: 'Desert',
		time: {
			start: '10:00 AM',
			end: '2:00 AM'
		},
		icon: 'Star.png',
		notes: [
			'This event is unlocked once the Bus is repaired',
			'Sandy\'s shop is not open during the event',
			'Every day, two villagers are chosen at random to host their own shops',
			'Emily and Sandy offer the player a random new outfit',
			'The Chef gives the player a choice of ingredients to make them a meal with varying effects depending on the ingredients chosen',
			'Once per festival, the player may obtain a cactus decor item from the Cactus Salesman at the bottom of the map',
			'During the Desert Festival, Marlon offers one-day Skull Cavern-related quests that will award the player Calico Eggs if completed',
			'Willy offers one-day fishing-related quests that will award the player Calico Eggs upon completion',
			'The Scholar asks the player a series of four questions. If all four answers are correct, then the reward is 50 Calico Eggs'
		]
	},
	{
		name: 'Desert Festival',
		date: {
			season: 1,
			day: 17
		},
		location: 'Desert',
		time: {
			start: '10:00 AM',
			end: '2:00 AM'
		},
		icon: 'Star.png',
		notes: [
			'This event is unlocked once the Bus is repaired',
			'Sandy\'s shop is not open during the event',
			'Every day, two villagers are chosen at random to host their own shops',
			'Emily and Sandy offer the player a random new outfit',
			'The Chef gives the player a choice of ingredients to make them a meal with varying effects depending on the ingredients chosen',
			'Once per festival, the player may obtain a cactus decor item from the Cactus Salesman at the bottom of the map',
			'During the Desert Festival, Marlon offers one-day Skull Cavern-related quests that will award the player Calico Eggs if completed',
			'Willy offers one-day fishing-related quests that will award the player Calico Eggs upon completion',
			'The Scholar asks the player a series of four questions. If all four answers are correct, then the reward is 50 Calico Eggs'
		]
	},
	{
		name: 'Flower Dance',
		date: {
			season: 1,
			day: 24
		},
		location: 'Forest',
		time: {
			start: '9:00 AM',
			end: '2:00 PM'
		},
		icon: 'Flag.png',
		notes: [
			'In order to dance with an eligible villager, the player must have at least four hearts with them',
			'Haley is generally the only villager who meets this requirement in the first year',
			'Dancing with a villager grants a heart with them'
		]
	},
	{
		name: 'Luau',
		date: {
			season: 2,
			day: 11
		},
		location: 'Beach',
		time: {
			start: '9:00 AM',
			end: '2:00 PM'
		},
		icon: 'Flag.png',
		notes: [
			'Items that give the best response (120 friendship points gained with each villager):',
			'Silver quality of the following items:',
			'Ancient Fruit Wine, Apple Wine, Banana Wine, Blobfish, Crimsonfish',
			'Crystal Fruit Wine, Goat Cheese, Golden Egg, Ice Pip,',
			'Large Goat Milk, Lava Eel, Legend, Legend II, Magma Cap,',
			'Mango Wine, Mead, Melon Wine, Orange Wine, Ostrich Egg, Pale Ale,',
			'Peach Wine, Pineapple Wine, Pomegranate Wine, Rhubarb Wine,',
			'Smoked Angler, Smoked Blobfish, Smoked Catfish,',
			'Smoked Crimsonfish, Smoked Glacierfish, Smoked Glacierfish Jr.,',
			'Smoked Ice Pip, Smoked Lava Eel, Smoked Legend,',
			'Smoked Legend II, Smoked Midnight Carp, Smoked Ms. Angler,',
			'Smoked Mutant Carp, Smoked Octopus, Smoked Radioactive Carp,',
			'Smoked Son of Crimsonfish, Smoked Spook Fish, Smoked Stingray,',
			'Smoked Stonefish, Smoked Sturgeon, Smoked Super Cucumber,',
			'Smoked Tiger Trout, Smoked Void Salmon, Son of Crimsonfish,',
			'Starfruit, Starfruit Wine, Strawberry Wine,',
			'Wine (from Traveling Cart)',
			'\n',
			'Gold/Iridium quality of the following items:',
			'Ancient Fruit Wine, Angler, Apple Wine, Artichoke, Banana Wine,',
			'Beer, Blobfish, Cactus Fruit Wine, Catfish, Cauliflower,',
			'Chanterelle, Cheese, Cherry Wine, Coconut Wine, Cranberries Wine,',
			'Crimsonfish, Crystal Fruit Wine, Fairy Rose, Glacierfish,',
			'Glacierfish Jr., Goat Cheese, Goat Milk, Golden Egg, Grape Wine,',
			'Ice Pip, Large Goat Milk, Large Milk, Lava Eel, Legend,',
			'Legend II, Magma Cap, Mango Wine, Mayonnaise, Mead, Melon,',
			'Melon Wine, Ms. Angler, Mutant Carp, Orange Wine, Ostrich Egg,',
			'Pale Ale, Peach Wine, Pineapple, Pineapple Wine,',
			'Pomegranate Wine, Powdermelon Wine, Purple Mushroom,',
			'Radioactive Carp, Red Cabbage, Rhubarb Wine, Smoked Angler,',
			'Smoked Blobfish, Smoked Blue Discus, Smoked Catfish,',
			'Smoked Crimsonfish, Smoked Dorado, Smoked Eel, Smoked Flounder,',
			'Smoked Glacierfish, Smoked Glacierfish Jr., Smoked Halibut,',
			'Smoked Ice Pip, Smoked Largemouth Bass, Smoked Lava Eel,',
			'Smoked Legend, Smoked Legend II, Smoked Lingcod,',
			'Smoked Lionfish, Smoked Midnight Carp, Smoked Midnight Squid,',
			'Smoked Ms. Angler, Smoked Mutant Carp, Smoked Octopus,',
			'Smoked Pike, Smoked Radioactive Carp, Smoked Slimejack,',
			'Smoked Son of Crimsonfish, Smoked Spook Fish, Smoked Squid,',
			'Smoked Stingray, Smoked Stonefish, Smoked Sturgeon,',
			'Smoked Super Cucumber, Smoked Tiger Trout, Smoked Tuna,',
			'Smoked Void Salmon, Smoked Walleye, Son of Crimsonfish,',
			'Spice Berry Wine, Spook Fish, Starfruit, Starfruit Wine,',
			'Stingray, Strawberry Wine, Sturgeon Super Cucumber, Truffle,',
			'Wild Plum Wine, Wine (from Traveling Cart), Yam',
			'\n\n',
			'Items that give a good response (60 friendship points gained with each villager):',
			'Normal quality of the following items:',
			'Amaranth, Amaranth Juice, Ancient Fruit Wine,',
			'Aged Roe (all kinds), Angler, Apple, Apple Wine, Apricot Wine,',
			'Artichoke, Artichoke Juice, Banana, Banana Wine, Beer,',
			'Beet, Beet Juice, Blobfish, Blue Discus, Blueberry Wine,',
			'Bok Choy Juice, Broccoli, Broccoli Juice Cactus Fruit, Cactus Fruit Wine,',
			'Carrot, Carrot Juice, Catfish, Cauliflower, Cauliflower Juice,',
			'Cave Carrot Juice, Cave Jelly, Caviar, Chanterelle,',
			'Cheese, Cherry Wine,Coconut Wine, Coffee, Corn Juice,',
			'Cranberries Wine, Crimsonfish, Crystal Fruit, Crystal Fruit Wine,',
			'Dandelion Juice, Dinosaur Mayonnaise, Dorado,',
			'Dried Fruit (any, except Dried Qi Fruits), Dried Mushrooms (any),',
			'Duck Mayonnaise, Eggplant Juice, Energy Tonic, Fairy Rose,',
			'Fiddlehead Fern Juice, Flounder, Garlic Juice, Ginger Juice,',
			'Glacierfish, Glacierfish Jr., Goat Cheese, Goat Milk,',
			'Golden Egg, Grape Wine, Green Bean Juice, Green Tea,',
			'Hazelnut Juice, Hot Pepper Wine, Ice Pip,',
			'Jelly (any, except Qi Fruit Jelly), Juice (from Traveling Cart),',
			'Kale, Kale Juice, Large Goat Milk, Large Milk, Largemouth Bass,',
			'Lava Eel, Leek Juice, Legend, Legend II, Lingcod, Lionfish,',
			'Magma Cap, Mango, Mango Wine, Maple Syrup, Mayonnaise, Mead,',
			'Melon, Melon Wine, Midnight Carp, Midnight Squid, Milk, Morel,',
			'Ms. Angler, Muscle Remedy, Mutant Carp, Mystic Syrup, Oil,',
			'Orange, Orange Wine, Ostrich Egg, Pale Ale, Parsnip Juice, Peach,',
			'Peach Wine, Pickles (any, except Pickled Spring Onion), Pike,',
			'Pineapple, Pineapple Wine, Pomegranate, Pomegranate Wine, Poppy,',
			'Potato Juice, Powdermelon, Powdermelon Wine, Pumpkin Juice,',
			'Purple Mushroom, Radioactive Carp, Radish Juice, Raisins,',
			'Red Cabbage, Red Cabbage Juice, Rhubarb Wine, Rice,',
			'River Jelly, Roe (all kinds), Sea Jelly, Slimejack,',
			'Smoked Albacore, Smoked Angler, Smoked Blobfish,',
			'Smoked Blue Discus, Smoked Bullhead, Smoked Catfish, Smoked Chub,',
			'Smoked Clam, Smoked Cockle, Smoked Crab, Smoked Crayfish,',
			'Smoked Crimsonfish, Smoked Dorado, Smoked Eel, Smoked Flounder,',
			'Smoked Ghostfish, Smoked Glacierfish, Smoked Glacierfish Jr.,',
			'Smoked Halibut, Smoked Ice Pip, Smoked Largemouth Bass,',
			'Smoked Lava Eel, Smoked Legend, Smoked Legend II,',
			'Smoked Lingcod, Smoked Lionfish, Smoked Lobster,',
			'Smoked Midnight Carp, Smoked Midnight Squid,',
			'Smoked Ms. Angler, Smoked Mutant Carp, Smoked Octopus,',
			'Smoked Perch, Smoked Pike, Smoked Radioactive Carp,',
			'Smoked Rainbow Trout, Smoked Red Mullet, Smoked Red Snapper,',
			'Smoked Salmon, Smoked Sandfish, Smoked Shad, Smoked Shrimp,',
			'Smoked Slimejack, Smoked Smallmouth Bass, Smoked Snail,',
			'Smoked Son of Crimsonfish, Smoked Spook Fish, Smoked Squid,',
			'Smoked Stingray, Smoked Stonefish, Smoked Sturgeon,',
			'Smoked Super Cucumber, Smoked Tiger Trout, Smoked Tilapia,',
			'Smoked Tuna, Smoked Void Salmon, Smoked Walleye, Smoked Woodskip,',
			'Snow Yam, Snow Yam Juice, Son of Crimsonfish,',
			'Spice Berry Wine, Spook Fish, Stardrop, Starfruit, Starfruit Wine,',
			'Stingray, Strawberry, Strawberry Wine, Sturgeon, Summer Squash,',
			'Summer Squash Juice, Super Cucumber, Taro Root, Taro Root Juice,',
			'Tiger Trout, Tomato Juice, Truffle, Truffle Oil, Tuna, Vinegar,',
			'Void Salmon, Walleye, Wild Horseradish Juice, Wild Plum Wine,',
			'Wine (from Traveling Cart), Winter Root Juice, Yam, Yam Juice',
			'\n',
			'Silver quality of the following items:',
			'Albacore, Amaranth, Angler, Apple, Apricot Wine, Artichoke,',
			'Banana, Beer, Beet, Blue Discus, Blueberry Wine, Bok Choy,',
			'Broccoli, Bullhead, Cactus Fruit, Cactus Fruit Wine, Carrot,',
			'Catfish, Cauliflower, Chanterelle, Cheese, Cherry, Cherry Wine,',
			'Coconut Wine, Cranberries, Cranberries Wine, Crystal Fruit,',
			'Dorado, Duck Egg, Eel, Fairy Rose, Fiddlehead Fern, Flounder,',
			'Glacierfish, Glacierfish Jr., Goat Milk, Grape, Grape Wine,',
			'Halibut, Hazelnut, Hot Pepper Wine, Kale, Large Egg (white/brown),',
			'Large Milk, Largemouth Bass, Lingcod, Lionfish, Mango, Mayonnaise,',
			'Melon, Midnight Carp, Midnight Squid, Milk, Morel, Ms. Angler,',
			'Mutant Carp, Orange, Peach, Pike, Pineapple, Pomegranate, Poppy,',
			'Potato, Powdermelon, Powdermelon Wine, Purple Mushroom,',
			'Radioactive Carp, Radish, Red Cabbage, Red Mullet, Salmon,',
			'Sandfish, Slimejack, Smoked Albacore, Smoked Blue Discus,',
			'Smoked Bream, Smoked Bullhead, Smoked Chub, Smoked Clam,',
			'Smoked Cockle, Smoked Crab, Smoked Crayfish, Smoked Dorado,',
			'Smoked Eel, Smoked Flounder, Smoked Ghostfish, Smoked Halibut,',
			'Smoked Largemouth Bass, Smoked Lingcod, Smoked Lionfish,',
			'Smoked Lobster, Smoked Midnight Squid, Smoked Oyster,',
			'Smoked Perch, Smoked Pike, Smoked Rainbow Trout,',
			'Smoked Red Mullet, Smoked Red Snapper, Smoked Salmon,',
			'Smoked Sandfish, Smoked Sardine, Smoked Shad, Smoked Shrimp,',
			'Smoked Slimejack, Smoked Smallmouth Bass, Smoked Snail,',
			'Smoked Squid, Smoked Tilapia, Smoked Tuna, Smoked Walleye,',
			'Smoked Woodskip, Snow Yam, Spice Berry, Spice Berry Wine,',
			'Spook Fish, Squid, Stingray, Strawberry, Sturgeon',
			'Summer Spangle, Summer Squash, Sunflower,',
			'Super Cucumber, Taro Root, Tiger Trout, Tilapia,',
			'Truffle, Tuna, Void Salmon, Walleye, Wild Plum,',
			'Wild Plum Wine, Winter Root, Woodskip, Yam',
			'\n',
			'Gold/Iridium quality of the following items:',
			'Albacore, Amaranth, Apple, Apricot Wine, Banana,',
			'Beet, Blue Discus, Blueberry Wine, Bok Choy, Broccoli,',
			'Bullhead, Cactus Fruit, Carrot, Cherry, Cranberries,',
			'Crystal Fruit, Dorado, Duck Egg, Eel, Fiddlehead Fern,',
			'Flounder, Grape, Halibut, Hazelnut, Hot Pepper Wine,',
			'Kale, Large Egg (white/brown), Largemouth Bass,',
			'Lingcod, Lionfish, Mango, Midnight Carp, Midnight Squid,',
			'Milk, Morel, Orange, Peach, Pike, Pomegranate, Poppy, Potato,',
			'Powdermelon, Radish, Red Mullet, Salmon, Sandfish,',
			'Slimejack, Smoked Albacore, Smoked Bream, Smoked Bullhead,',
			'Smoked Chub, Smoked Clam, Smoked Cockle, Smoked Ghostfish,',
			'Smoked Oyster, Smoked Perch, Smoked Rainbow Trout,',
			'Smoked Red Mullet, Smoked Red Snapper, Smoked Salmon,',
			'Smoked Sandfish, Smoked Sardine, Smoked Shad,',
			'Smoked Smallmouth Bass, Smoked Tilapia, Smoked Woodskip,',
			'Snow Yam, Spice Berry, Squid, Strawberry, Summer Spangle,',
			'Summer Squash, Sunflower, Taro Root, Tiger Trout, Tilapia,',
			'Tuna, Void Salmon, Walleye, Wild Plum, Winter Root, Woodskip',
			'\n\n',
			'Items that give a neutral response (0 friendship points gained with each villager):',
			'Normal quality of the following items:',
			'Albacore, Apricot, Blackberry Wine, Blue Jazz, Blueberry,',
			'Bok Choy, Bream, Bug Steak, Bullhead, Cave Carrot, Cherry,',
			'Chub, Common Mushroom, Corn, Cranberries, Dandelion, Duck Egg,',
			'Eel, Egg (white/brown), Eggplant, Fiddlehead Fern, Garlic,',
			'Ghostfish, Ginger, Grape, Green Bean, Halibut, Hazelnut, Hops,',
			'Hot Pepper, Large Egg (white/brown), Leek, Parsnip, Perch,',
			'Pickled Spring Onion, Potato, Radish, Rainbow Trout,',
			'Red Mullet, Red Snapper, Salmon, Sandfish, Sardine,',
			'Shad, Smallmouth Bass, Smoked Anchovy, Smoked Bream,',
			'Smoked Carp, Smoked Herring, Smoked Mussel, Smoked Oyster,',
			'Smoked Periwinkle, Smoked Sardine, Smoked Sunfish,',
			'Spice Berry, Squid, Sugar, Summer Spangle, Sunflower,',
			'Tilapia, Tomato, Tulip, Wheat Flour, Wild Horseradish,',
			'Wild Plum, Winter Root, Woodskip',
			'Silver/Gold/Iridium quality of the following items:',
			'Apricot, Blackberry Wine, Blue Jazz, Blueberry, Bream,',
			'Chub, Common Mushroom, Corn, Dandelion, Egg (white/brown),',
			'Eggplant, Garlic, Ghostfish, Green Bean, Hops, Hot Pepper,',
			'Leek, Parsnip, Perch, Rainbow Trout, Red Snapper, Sardine,',
			'Shad, Smallmouth Bass, Smoked Anchovy, Smoked Carp,',
			'Smoked Herring, Smoked Mussel, Smoked Periwinkle,',
			'Smoked Sunfish, Tomato, Tulip, Wild Horseradish',
			'\n\n',
			'Items that give a bad response (60 friendship points lost with each villager):',
			'Anchovy, Blackberry, Carp, Crocus, Daffodil,',
			'Dried Qi Fruits, Field Snack, Green Algae, Herring,',
			'Joja Cola, Qi Fruit, Qi Fruit Jelly, Qi Fruit Wine,',
			'Salmonberry, Salmonberry Wine, Seaweed, Spring Onion,',
			'Spring Onion Juice, Sunfish, Sweet Pea, Unmilled Rice,',
			'Unmilled Rice Juice, White Algae',
			'\n\n',
			'Items that give the worst response (120 friendship points lost with each villager):',
			'Goby, Holly, Pufferfish, Red Mushroom, Sap,',
			'Scorpion Carp, Sea Cucumber, Smoked Goby,',
			'Smoked Pufferfish, Smoked Scorpion Carp,',
			'Smoked Sea Cucumber, Void Egg, Void Mayonnaise'
		]
	},
	{
		name: 'Trout Derby',
		date: {
			season: 2,
			day: 20
		},
		location: 'Cindersap Forest',
		time: {
			start: '6:10 AM',
			end: '2:00 AM'
		},
		icon: 'Hook.png',
		notes: [
			'Takes place near Marnie\'s Ranch',
			'During the festival, players can fish in the river to catch',
			'Rainbow Trout, which can be caught all day long',
			'and regardless of weather',
			'Each Rainbow Trout has a 33% chance of having a golden tag',
			'Golden tags can be exchanged for prizes',
			'Time continues to pass during the festival',
			'Shops and homes are not closed, unlike other festivals'
		]
	},
	{
		name: 'Trout Derby',
		date: {
			season: 2,
			day: 20
		},
		location: 'Cindersap Forest',
		time: {
			start: '6:10 AM',
			end: '2:00 AM'
		},
		icon: 'Hook.png',
		notes: [
			'Takes place near Marnie\'s Ranch',
			'During the festival, players can fish in the river to catch',
			'Rainbow Trout, which can be caught all day long',
			'and regardless of weather',
			'Each Rainbow Trout has a 33% chance of having a golden tag',
			'Golden tags can be exchanged for prizes',
			'Time continues to pass during the festival',
			'Shops and homes are not closed, unlike other festivals'
		]
	},
	{
		name: 'Dance of the Moonlight Jellies',
		date: {
			season: 2,
			day: 28
		},
		location: 'Beach',
		time: {
			start: '10:00 PM',
			end: '12:00 AM'
		},
		icon: 'Flag.png',
		notes: [
			'Pierre has a booth where he sells some items'
		]
	},
	{
		name: 'Stardew Valley Fair',
		date: {
			season: 3,
			day: 16
		},
		location: 'Pelican Town',
		time: {
			start: '9:00 AM',
			end: '3:00 PM'
		},
		icon: 'Flag.png',
		notes: [
			'Grange Display:',
			'There are eight categories of items recognized by the fair:',
			'Animal Products, Artisan Goods, Cooking, Fish,',
			'Foraging, Fruits, Minerals, and Vegetables',
			'Most iridium quality items are worth 8 points',
			'Most gold quality items are worth 6 points',
			'\n',
			'Scoring:',
			'14 points are awarded automatically',
			'9 points are granted to filling up the display',
			'5 points per category are rewarded',
			'with a maximum of 30 points',
			'This means that only 6 categories are needed',
			'to maximize score',
			'The highest amount of points per item is 8',
			'This means the highest score is 125',
			'\n',
			'Star Points',
			'A stardrop is available for 2,000 star points',
			'Winning the grange display grants 1,000 star points',
			'The rest can be earned at the spinning wheel',
			'There is a slightly higher chance for the arrow',
			'to land on green, so always pick green'
		]
	},
	{
		name: 'Spirit\'s Eve',
		date: {
			season: 3,
			day: 27
		},
		location: 'Pelican Town',
		time: {
			start: '10:00 PM',
			end: '11:50 PM'
		},
		icon: 'Flag.png',
		notes: [
			'The festival features a maze where a',
			'Golden Pumpkin can be obtained'
		]
	},
	{
		name: 'Festival of Ice',
		date: {
			season: 4,
			day: 8
		},
		location: 'Cindersap Forest',
		time: {
			start: '9:00 AM',
			end: '2:00 PM'
		},
		icon: 'Flag.png',
		notes: [
			'The player must catch 5 fish to win the contest,',
			'or else Willy wins',
			'The reward is 2 tackles',
			'Barbed Hook and Dressed Spinner'
		]
	},
	{
		name: 'SquidFest',
		date: {
			season: 4,
			day: 12
		},
		location: 'Beach',
		time: {
			start: '6:10 AM',
			end: '2:00 AM'
		},
		icon: 'Hook.png',
		notes: [
			'Squid can be caught all day long for prizes',
			'Time continues to pass during the festival',
			'Shops and homes are not closed, unlike other festivals'
		]
	},
	{
		name: 'SquidFest',
		date: {
			season: 4,
			day: 13
		},
		location: 'Beach',
		time: {
			start: '6:10 AM',
			end: '2:00 AM'
		},
		icon: 'Hook.png',
		notes: [
			'Squid can be caught all day long for prizes',
			'Time continues to pass during the festival',
			'Shops and homes are not closed, unlike other festivals'
		]
	},
	{
		name: 'Night Market',
		date: {
			season: 4,
			day: 15
		},
		location: 'Beach',
		time: {
			start: '5:00 PM',
			end: '2:00 AM'
		},
		icon: 'Star.png',
		notes: [
			'A Pearl is obtainable in the Mermaid Boat',
			'Rare fish can be caught in the submarine',
			'Time continues to pass during the festival',
			'Shops and homes are not closed, unlike other festivals'
		]
	},
	{
		name: 'Night Market',
		date: {
			season: 4,
			day: 16
		},
		location: 'Beach',
		time: {
			start: '5:00 PM',
			end: '2:00 AM'
		},
		icon: 'Star.png',
		notes: [
			'A Pearl is obtainable in the Mermaid Boat',
			'Rare fish can be caught in the submarine',
			'Time continues to pass during the festival',
			'Shops and homes are not closed, unlike other festivals'
		]
	},
	{
		name: 'Night Market',
		date: {
			season: 4,
			day: 17
		},
		location: 'Beach',
		time: {
			start: '5:00 PM',
			end: '2:00 AM'
		},
		icon: 'Star.png',
		notes: [
			'A Pearl is obtainable in the Mermaid Boat',
			'Rare fish can be caught in the submarine',
			'Time continues to pass during the festival',
			'Shops and homes are not closed, unlike other festivals'
		]
	},
	{
		name: 'Feast of the Winter Star',
		date: {
			season: 4,
			day: 25
		},
		location: 'Beach',
		time: {
			start: '9:00 AM',
			end: '2:00 AM'
		},
		icon: 'Flag.png',
		notes: [
			'Secret Santa with a Villager',
			'The gift is worth 5 times the amount of friendship points'
		]
	}
]

export default events