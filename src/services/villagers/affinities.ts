import { Affinity } from '../../types'

type Affinities = Record<Affinity, Array<string>>

const affinities: Record<string, Affinities> = {
	Kent: {
		loves: [
			'All Universal Loves',
			'Fiddlehead Risotto',
			'Roasted Hazelnuts'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'Daffodil',
			'Dwarvish Safety Manual'
		],
		neutral: [
			'All Universal Neutrals',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Wild Horseradish',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'Piña Colada',
			'Quartz',
			'Snow Yam'
		],
		hates: [
			'All Universal Hates',
			'All Milk',
			'Algae Soup',
			'Holly',
			'Sashimi',
			'Tortilla'
		]
	},
	Lewis: {
		loves: [
			'All Universal Loves',
			'Autumn\'s Bounty',
			'Glazed Yams',
			'Green Tea',
			'Hot Pepper',
			'Vegetable Medley'
		],
		likes: [
			'All Universal Likes',
			'Blueberry',
			'Cactus Fruit',
			'Coconut'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Milk',
			'Salmonberry',
			'Wild Horseradish'
		],
		hates: [
			'All Universal Hates',
			'Holly',
			'Quartz'
		],
	},
	Vincent: {
		loves: [
			'All Universal Loves',
			'Cranberry Candy',
			'Frog Egg',
			'Ginger Ale',
			'Grape',
			'Pink Cake',
			'Snail'
		],
		likes: [
			'All Universal Likes (except Vegetables and Artisan Goods)',
			'All Milk',
			'Coconut',
			'Daffodil'
		],
		neutral: [
			'All Universal Neutrals'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Eggs',
			'All Fruit',
			'All Vegetables',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Quartz',
			'Snow Yam',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'All Artisan Goods',
			'Clay',
			'Piña Colada',
			'Triple Shot Espresso',
			'Wild Horseradish'
		],
	},
	Haley: {
		loves: [
			'All Universal Loves',
			'Coconut',
			'Fruit Salad',
			'Pink Cake',
			'Sunflower'
		],
		likes: [
			'All Universal Likes',
			'Daffodil'
		],
		neutral: [
			'All Universal Neutrals'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Eggs',
			'All Fruit',
			'All Milk',
			'All Vegetables',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Mystic Syrup',
			'Purple Mushroom',
			'Quartz',
			'Snow Yam',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'All Fish',
			'Clay',
			'Prismatic Shard',
			'Wild Horseradish'
		]
	},
	Pam: {
		loves: [
			'All Universal Loves',
			'Beer',
			'Cactus Fruit',
			'Glazed Yams',
			'Mead',
			'Pale Ale',
			'Parsnip',
			'Parsnip Soup',
			'Piña Colada'
		],
		likes: [
			'All Universal Likes',
			'All Fruit',
			'All Milk',
			'Daffodil'
		],
		neutral: [
			'All Universal Neutrals',
			'All Fish (except Carp and Snail)',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Joja Cola',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Eggs',
			'Quartz',
			'Wild Horseradish'
		],
		hates: [
			'All Universal Hates',
			'Holly',
			'Octopus',
			'Squid'
		]
	},
	Shane: {
		loves: [
			'All Universal Loves',
			'Beer',
			'Hot Pepper',
			'Pepper Poppers',
			'Pizza'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'All Fruit',
		],
		neutral: [
			'All Universal Neutrals',
			'All Milk',
			'Strange Bun'
		],
		dislikes: [
			'All Universal Dislikes',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Seaweed',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'Pickles',
			'Quartz'
		]
	},
	Pierre: {
		loves: [
			'All Universal Loves',
			'Fried Calamari',
			'Price Catalogue'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'All Milk',
			'Daffodil',
			'Dandelion'
		],
		neutral: [
			'All Universal Neutrals',
			'All Fruit'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Foraged Minerals',
			'All Gems (except Diamond and Prismatic Shard)',
			'Chanterelle',
			'Common Mushroom',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Salmonberry',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'All Fish',
			'Corn',
			'Garlic',
			'Parsnip Soup',
			'Tortilla'
		]
	},
	Emily: {
		loves: [
			'All Universal Loves',
			'Amethyst',
			'Aquamarine',
			'Cloth',
			'Emerald',
			'Jade',
			'Parrot Egg',
			'Ruby',
			'Survival Burger',
			'Topaz',
			'Wool'
		],
		likes: [
			'All Universal Likes',
			'Daffodil',
			'Quartz'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'Fried Eel',
			'Ice Cream',
			'Rice Pudding',
			'Salmonberry',
			'Spicy Eel'
		],
		hates: [
			'All Universal Hates',
			'Fish Taco',
			'Holly',
			'Maki Roll',
			'Salmon Dinner',
			'Sashimi'
		]
	},
	Jas: {
		loves: [
			'All Universal Loves',
			'Ancient Doll',
			'Fairy Box',
			'Fairy Rose',
			'Pink Cake',
			'Plum Pudding',
			'Strange Doll (green)',
			'Strange Doll (yellow)'
		],
		likes: [
			'All Universal Likes',
			'All Milk',
			'Coconut',
			'Daffodil'
		],
		neutral: [
			'All Universal Neutrals'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Eggs',
			'All Fruit',
			'All Vegetables (except Hops and Wheat)',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Quartz',
			'Snow Yam',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'All Artisan Goods',
			'Clay',
			'Piña Colada',
			'Triple Shot Espresso',
			'Wild Horseradish'
		]
	},
	Gus: {
		loves: [
			'All Universal Loves',
			'Diamond',
			'Escargot',
			'Fish Taco',
			'Orange',
			'Tropical Curry'
		],
		likes: [
			'All Universal Likes',
			'Daffodil',
			'Truffle'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'Salmonberry',
			'Wild Horseradish'
		],
		hates: [
			'All Universal Hates',
			'Coleslaw',
			'Quartz'
		]
	},
	Maru: {
		loves: [
			'All Universal Loves',
			'Battery Pack',
			'Cauliflower',
			'Cheese Cauliflower',
			'Diamond',
			'Dwarf Gadget',
			'Gold Bar',
			'Iridium Bar',
			'Miner\'s Treat',
			'Pepper Poppers',
			'Radioactive Bar',
			'Rhubarb Pie',
			'Strawberry'
		],
		likes: [
			'All Universal Likes',
			'Chanterelle',
			'Copper Bar',
			'Iron Bar',
			'Magma Cap',
			'Morel',
			'Oak Resin',
			'Pine Tar',
			'Purple Mushroom',
			'Quartz',
			'Radioactive Ore'
		],
		neutral: [
			'All Universal Neutrals',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Wild Horseradish',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'Blackberry',
			'Common Mushroom',
			'Crystal Fruit',
			'Maple Syrup',
			'Salmonberry'
		],
		hates: [
			'All Universal Hates',
			'Holly',
			'Honey',
			'Pickles',
			'Snow Yam',
			'Truffle'
		]
	},
	Alex: {
		loves: [
			'All Universal Loves',
			'Complete Breakfast',
			'Jack Be Nimble, Jack Be Quick',
			'Salmon Dinner'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'Dinosaur Egg',
			'Field Snack',
			'Parrot Egg'
		],
		neutral: [
			'All Universal Neutrals',
			'All Fruit',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Frog Egg',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Books',
			'Salmonberry',
			'Wild Horseradish'
		],
		hates: [
			'All Universal Hates',
			'Holly',
			'Quartz'
		]
	},
	Sam: {
		loves: [
			'All Universal Loves',
			'Cactus Fruit',
			'Maple Bar',
			'Pizza',
			'Tigerseye'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'Joja Cola'
		],
		neutral: [
			'All Universal Neutrals',
			'All Fruit',
			'All Milk'
		],
		dislikes: [
			'All Universal Dislikes',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Quartz',
			'Salmonberry',
			'Seaweed',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'Bone Fragment',
			'Cinder Shard',
			'Coal',
			'Copper Bar',
			'Duck Mayonnaise',
			'Gold Bar',
			'Gold Ore',
			'Iridium Bar',
			'Iridium Ore',
			'Iron Bar',
			'Mayonnaise',
			'Pickles',
			'Refined Quartz'
		]
	},
	Demetrius: {
		loves: [
			'All Universal Loves',
			'Bean Hotpot',
			'Ice Cream',
			'Rice Pudding',
			'Strawberry'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'Dinosaur Egg',
			'Purple Mushroom'
		],
		neutral: [
			'All Universal Neutrals',
			'All Fish (except Carp and Snail)',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Magma Cap',
			'Morel',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'Quartz'
		],
		hates: [
			'All Universal Hates',
			'Holly'
		]
	},
	Dwarf: {
		loves: [
			'All Universal Loves',
			'Amethyst',
			'Aquamarine',
			'Emerald',
			'Jade',
			'Lava Eel',
			'Lemon Stone',
			'Omni Geode',
			'Ruby',
			'Topaz'
		],
		likes: [
			'All Universal Likes',
			'All Artifacts',
			'Cave Carrot',
			'Quartz'
		],
		neutral: [
			'All Universal Neutrals',
			'Solar Essence',
			'Void Essence'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Eggs',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Salmonberry',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates'
		]
	},
	Willy: {
		loves: [
			'All Universal Loves',
			'Catfish',
			'Gold Bar',
			'Diamond',
			'Iridium Bar',
			'Jewels Of The Sea',
			'Mead',
			'Octopus',
			'Pumpkin',
			'Sea Cucumber',
			'Sturgeon',
			'The Art O\' Crabbing'
		],
		likes: [
			'All Universal Likes',
			'Bait And Bobber',
			'Baked Fish',
			'Carp Surprise',
			'Chowder',
			'Crab Cakes',
			'Crispy Bass',
			'Escargot',
			'Fish Stew',
			'Fish Taco',
			'Fried Calamari',
			'Fried Eel',
			'Lingcod',
			'Lobster Bisque',
			'Quartz',
			'Salmon Dinner',
			'Seaform Pudding',
			'Tiger Trout',
			'Trout Soup'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fish',
			'All Fruit',
			'All Milk',
			'Dish O\' The Sea',
			'Maki Roll',
			'Sashimi'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Cooking',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Life Elxir',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Salmonberry',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates'
		]
	},
	Leo: {
		loves: [
			'All Universal Loves',
			'Duck Feather',
			'Mango',
			'Ostrich Egg',
			'Parror Egg',
			'Poi'
		],
		likes: [
			'All Universal Likes',
			'Dragon Tooth',
			'Mango Sticky Rice',
			'Nautilus Shell',
			'Quartz',
			'Sea Urchin',
			'Spice Berry'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Ostrich Egg and Void Egg)',
			'All Fish (except Carp and Snail)',
			'All Fruit',
			'Coffee'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Cooked Dishes',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Life Elixir',
			'Magma Cap',
			'Pickles',
			'Purple Mushroom',
			'Salmonberry',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'Beer',
			'Holly',
			'Hops',
			'Mead',
			'Morel',
			'Oil',
			'Pale Ale',
			'Piña Colada',
			'Triple Shot Espresso',
			'Unmilled Rice',
			'Wine'
		]
	},
	Penny: {
		loves: [
			'All Universal Loves',
			'All Books',
			'Diamond',
			'Emerald',
			'Melon',
			'Poppy',
			'Poppyseed Muffin',
			'Red Plate',
			'Roots Platter',
			'Sandfish',
			'Tom Kha Soup'
		],
		likes: [
			'All Universal Likes',
			'All Artifacts',
			'All Milk',
			'Dandelion',
			'Leek'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Ginger',
			'Hazelnut',
			'Magma Cap',
			'Morel',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'Algae Soup',
			'Duck Feather',
			'Pale Broth',
			'Purple Mushroom',
			'Quartz',
			'Red Mushroom',
			'Salmoberry',
			'Wool'
		],
		hates: [
			'All Universal Hates',
			'Beer',
			'Grape',
			'Holly',
			'Hops',
			'Mead',
			'Pale Ale',
			'Piña Colada',
			'Rabbit\'s Foot',
			'Wine'
		]
	},
	Elliot: {
		loves: [
			'All Universal Loves',
			'Crab Cakes',
			'Duck Feather',
			'Lobster',
			'Pomegranate',
			'Squid Ink',
			'Tom Kha Soup'
		],
		likes: [
			'All Universal Likes',
			'All Books',
			'All Fruit',
			'Octopus',
			'Squid'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fish (except Carp and Snail)',
			'Rainbow Shell',
			'Sea Urchin'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Pizza',
			'Purple Mushroom',
			'Snow Yam',
			'Wild Horseadish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'Amaranth',
			'Quartz',
			'Salmonberry',
			'Sea Cucumber',
			'Super Cucumber'
		]
	},
	Jodi: {
		loves: [
			'All Universal Loves',
			'Chocolate Cake',
			'Crispy Bass',
			'Diamond',
			'Eggplant Parmesan',
			'Fried Eel',
			'Pancakes',
			'Rhubarb Pie',
			'Vegetable Medley'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'All Milk'
		],
		neutral: [
			'All Universal Neutrals'
		],
		dislikes: [
			'All Universal Dislikes',
			'Chanterelle',
			'Common Mushroom',
			'Garlic',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Quartz',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'Daffodil',
			'Dandelion',
			'Spice Berry'
		]
	},
	Abigail: {
		loves: [
			'All Universal Loves',
			'Amethyst',
			'Banana Pudding',
			'Blackberry Cobbler',
			'Chocolate Cake',
			'Monster Compendium',
			'Pufferfish',
			'Pumpkin',
			'Spicy Eel'
		],
		likes: [
			'All Universal Likes',
			'Ancient Sword',
			'Basilisk Paw',
			'Bone Flute',
			'Combat Quarterly',
			'Quartz'
		],
		neutral: [
			'All Universal Neutrals',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Hops',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Eggs',
			'All Fruit',
			'All Vegetables',
			'Sugar',
			'Wild Horseradish'

		],
		hates: [
			'All Universal Hates',
			'Clay',
			'Holly'
		]
	},
	Sandy: {
		loves: [
			'All Universal Loves',
			'Crocus',
			'Daffodil',
			'Mango Sticky Rice',
			'Sweet Pea'
		],
		likes: [
			'All Universal Likes',
			'All Fruit',
			'Goat Milk',
			'Large Goat Milk',
			'Quartz',
			'Wool'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Large Milk',
			'Leek',
			'Magma Cap',
			'Milk',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes'
		],
		hates: [
			'All Universal Hates',
			'Holly'
		]
	},
	Marnie: {
		loves: [
			'All Universal Loves',
			'Diamond',
			'Farmer\'s Lunch',
			'Pink Cake',
			'Pumpkin Pie'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'All Milk',
			'Stardew Valley Almanac',
			'Quartz'
		],
		neutral: [
			'All Universal Neutrals',
			'All Fruit',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'Salmonberry',
			'Seaweed',
			'Wild Horseradish'
		],
		hates: [
			'All Universal Hates',
			'Clay',
			'Holly'
		]
	},
	Robin: {
		loves: [
			'All Universal Loves',
			'Goat Cheese',
			'Peach',
			'Spaghetti',
			'Woody\'s Secret',
		],
		likes: [
			'All Universal Likes',
			'All Fruit',
			'All Milk',
			'Hardwood',
			'Quartz',
			'Woodcutter\'s Weekly'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'Wild Horseadish'
		],
		hates: [
			'All Universal Hates',
			'Holly'
		]
	},
	George: {
		loves: [
			'All Universal Loves',
			'Fried Mushroom',
			'Leek'
		],
		likes: [
			'All Universal Likes',
			'Daffodil'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Ginger',
			'Hazelnut',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Flowers',
			'Salmonberry',
			'Wild Horseradish'
		],
		hates: [
			'All Universal Hates',
			'Clay',
			'Dandelion',
			'Holly',
			'Quartz'
		]
	},
	Krobus: {
		loves: [
			'All Universal Loves',
			'Diamond',
			'Iridium Bar',
			'Monster Compendium',
			'Monster Musk',
			'Pumpkin',
			'Void Egg',
			'Void Mayonnaise',
			'Wild Horseradish'
		],
		likes: [
			'All Universal Likes',
			'Gold Bar',
			'Quartz',
			'Seafoam Pudding',
			'Strange Bun'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs',
			'All Fruit',
			'All Milk'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Cooking',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Life Elxir',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Salmonberry',
			'Snow Yam',
			'Winter Root'
		],
		hates: [
			'All Universal Hates'
		]
	},
	Linus: {
		loves: [
			'All Universal Loves',
			'Blueberry Tart',
			'Cactus Fruit',
			'Cococonut',
			'Dish O\' The Sea',
			'The Alleyway Buffet',
			'Yam'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Spring Onion',
			'Winter Root'
		],
		neutral: [
			'All Universal Neutrals',
			'All Fish (except Snail)',
			'Wild Bait'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Foraged Minerals',
			'All Gems (except Diamond and Prismatic Shard)',
			'Treasure Chest'
		],
		hates: [
			'All Universal Hates'
		]
	},
	Caroline: {
		loves: [
			'All Universal Loves',
			'Fish Taco',
			'Green Tea',
			'Summer Spangle',
			'Tropical Curry'
		],
		likes: [
			'All Universal Likes',
			'Daffodil',
			'Tea Leaves',
			'Wild Horseadish'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'All Milk'
		],
		dislikes: [
			'All Universal Dislikes',
			'Amaranth',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Duck Mayonnaise',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Mayonnaise',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'Quartz',
			'Salmonberry'
		]
	},
	Sebastian: {
		loves: [
			'All Universal Loves',
			'Frog Egg',
			'Frozen Tear',
			'Obsidian',
			'Pumpkin Soup',
			'Sashimi',
			'Void Egg'
		],
		likes: [
			'All Universal Likes',
			'Combat Quarterly',
			'Flounder',
			'Monster Compendium',
			'Quartz'
		],
		neutral: [
			'All Universal Neutrals',
			'All Fish (except Carp and Snail)',
			'All Fruit',
			'Amaranth',
		],
		dislikes: [
			'All Universal Dislikes',
			'All Flowers (except Poppy)',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Salmonberry',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates',
			'All Artisan Goods',
			'All Eggs',
			'Clay',
			'Complete Breakfast',
			'Farmer\'s Lunch',
			'Omelet',
			'Piña Colada',
		]
	},
	Harvey: {
		loves: [
			'All Universal Loves',
			'Coffee',
			'Pickles',
			'Super Meal',
			'Truffle Oil',
			'Wine'
		],
		likes: [
			'All Universal Likes',
			'All Fruit',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Duck Egg',
			'Duck Feather',
			'Ginger',
			'Goat Milk',
			'Hazelnut',
			'Holly',
			'Large Goat Milk',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Quartz',
			'Snow Yam',
			'Spring Onion',
			'Wild Horseradish',
			'Winter Root'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'Large Milk',
			'Milk'
		],
		dislikes: [
			'All Universal Dislikes',
			'Blueberry Tart',
			'Bread',
			'Cheese',
			'Chocolate Cake',
			'Cookie',
			'Cranberry Sauce',
			'Fried Mushroom',
			'Glazed Yams',
			'Goat Cheese',
			'Hashbrowns',
			'Ice Cream',
			'Pancakes',
			'Pink Cake',
			'Pizza',
			'Rhubarb Pie',
			'Rice Pudding'
		],
		hates: [
			'All Universal Hates',
			'Coral',
			'Nautilus Shell',
			'Rainbow Shell',
			'Salmonberry',
			'Spice Berry'
		]
	},
	Wizard: {
		loves: [
			'All Universal Loves',
			'Book of Mysteries',
			'Purple Mushroom',
			'Solar Essence',
			'Super Cucumber',
			'Void Essence'
		],
		likes: [
			'All Universal Likes',
			'All Geode Minerals',
			'All Trinkets',
			'Iridium Bar',
			'Quartz'
		],
		neutral: [
			'All Universal Neutrals',
			'All Fruit'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Eggs',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Salmonberry',
			'Slime',
			'Snow Yam',
			'Wild Horseradish',
			'Winter Root'
		],
		hates: [
			'All Universal Hates'
		]
	},
	Evelyn: {
		loves: [
			'All Universal Loves',
			'Beet',
			'Chocolate Cake',
			'Diamond',
			'Fairy Rose',
			'Raisins',
			'Stuffing',
			'Tulip'
		],
		likes: [
			'All Universal Likes',
			'All Milk',
			'Broken Glasses',
			'Clam',
			'Cockle',
			'Coral',
			'Daffodil',
			'Mussel',
			'Nautilus Shell',
			'Oyster',
			'Sea Urchin'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'Chanterelle',
			'Common Mushroom',
			'Dandelion',
			'Ginger',
			'Hazelnut',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'Quartz',
			'Wild Horseradish'
		],
		hates: [
			'All Universal Hates',
			'All Fish',
			'Clay',
			'Fried Eel',
			'Garlic',
			'Holly',
			'Maki Roll',
			'Salmonberry',
			'Sashimi',
			'Spice Berry',
			'Spicy Eel',
			'Trout Soup'
		]
	},
	Leah: {
		loves: [
			'All Universal Loves',
			'Goat Cheese',
			'Poppyseed Muffin',
			'Salad',
			'Stir Fry',
			'Truffle',
			'Vegetable Medley',
			'Wine'
		],
		likes: [
			'All Universal Likes',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Daffodil',
			'Dandelion',
			'Driftwood',
			'Ginger',
			'Hazelnut',
			'Holly',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Snow Yam',
			'Wild Horseadish',
			'Winter Root'
		],
		neutral: [
			'All Universal Neutrals',
		],
		dislikes: [
			'All Universal Dislikes',
			'All Foraged Minerals (except Earth Crystal)',
			'All Gems (except Diamond and Prismatic Shard)',
			'Carp Surprise',
			'Cookie',
			'Fried Egg',
			'Ice Cream',
			'Pink Cake',
			'Rice Pudding',
			'Seaweed',
			'Survival Burger',
			'Tortilla'
		],
		hates: [
			'All Universal Hates',
			'Bread',
			'Hashbrowns',
			'Pancakes',
			'Pizza',
			'Void Egg',
		]
	},
	Clint: {
		loves: [
			'All Universal Loves',
			'Amethyst',
			'Aquamarine',
			'Artichoke Dip',
			'Emerald',
			'Fiddlehead Risotto',
			'Gold Bar',
			'Iridium Bar',
			'Jade',
			'Omni Geode',
			'Ruby',
			'Topaz'
		],
		likes: [
			'All Universal Likes',
			'Copper Bar',
			'Iron Bar',
			'Mining Monthly'
		],
		neutral: [
			'All Universal Neutrals',
			'All Eggs (except Void Egg)',
			'All Fruit',
			'All Milk',
			'Chanterelle',
			'Common Mushroom',
			'Coal',
			'Daffodil',
			'Dandelion',
			'Ginger',
			'Gold Ore',
			'Hazelnut',
			'Iridium Ore',
			'Leek',
			'Magma Cap',
			'Morel',
			'Purple Mushroom',
			'Refined Quartz',
			'Snow Yam',
			'Winter Root'
		],
		dislikes: [
			'All Universal Dislikes',
			'All Flowers (except Poppy)',
			'Quartz',
			'Salmonberry',
			'Wild Horseradish'
		],
		hates: [
			'All Universal Hates',
			'Holly'
		]
	}
}

export default affinities