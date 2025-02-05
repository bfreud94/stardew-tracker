import { VillagerSchedule } from '../../types/models'

const schedules: Record<string, VillagerSchedule> = {
	Kent: {
		'All Seasons': {
			'Regular Schedule': [
				'7:00 AM - Leaves home, stands under the tree between the sewer entrance and the bridge to the beach.',
				'10:30 AM - Returns home to stand in his living room.',
				'2:00 PM - Leaves home, stands under a tree just north of his house.',
				'5:00 PM - Returns home, stands in the entryway.',
				'7:00 PM - Heads to the kitchen.',
				'9:00 PM - Leaves home, stands under the tree in front of his house.',
				'11:00 PM - Returns home to sleep.'
			],
			'Spring 17 (Bus Service Restored)': [
				'9:00 AM - Leaves home to head to the Desert Festival and stand by one of the villager shops.',
				'12:00 AM - Heads to bed.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Rain': [
				'8:30 AM - At home, standing in his living room.',
				'2:00 PM - Leaves home, stands under a tree just north of his house.',
				'5:00 PM - Returns home and stands in the entryway.',
				'7:00 PM - Heads to the kitchen.',
				'9:00 PM - Leaves home, stands under the tree in front of his house.',
				'11:00 PM - Returns home to sleep.'
			],
			'Friday and Saturday': [
				'7:00 AM - Leaves home, stands under the tree between the sewer entrance and the bridge to the beach.',
				'10:30 AM - Returns home to stand in his living room.',
				'2:00 PM - Leaves home, stands under a tree just north of his house.',
				'5:00 PM - Goes to The Stardrop Saloon.',
				'11:50 PM - Leaves the Saloon and returns home to sleep.'
			],
			'Sunday (Alex\'s 14 heart event seen)': [
				'8:00 AM - At home, standing in the kitchen.',
				'8:30 AM - Leaves home, heads to the altar room inside Pierre\'s General Store.',
				'11:10 AM - Leaves Pierre\'s and heads to the back room of the Stardrop Saloon.',
				'3:00 PM - Leaves the Saloon and heads home to stand in the entryway.',
				'7:00 PM - Heads to the kitchen.',
				'9:00 PM - Leaves home, stands under the tree in front of his house.',
				'11:00 PM - Returns home to sleep.'
			],
			'Sunday': [
				'8:00 AM	At home, standing in the kitchen.',
				'10:10 AM	Leaves home, heads to the altar room inside Pierre\'s General Store.',
				'2:00 PM	Leaves the altar room, moves to Pierre\'s counter.',
				'4:00 PM	Leaves Pierre\'s and heads home to stand in the entryway.',
				'7:00 PM	Heads to the kitchen.',
				'9:00 PM	Leaves home, stands under the tree in front of his house.',
				'11:00 PM	Returns home to sleep.'
			]
		}
	},
	Lewis: {
		'Spring': {
			'Regular Schedule': [
				'8:30 AM - Stands in his kitchen at home.',
				'10:00 AM - Exits Manor.',
				'10:10 AM - Gardens in front of Manor.',
				'11:40 AM - Stops gardening and heads to town square.',
				'12:30 PM - Stands in front of tree to the left of Clinic.',
				'2:00 PM - Leaves tree and stands in front of the notice board at Pierre\'s.',
				'4:00 PM - Heads home.',
				'4:30 PM - Arrives home for the night.',
				'10:00 PM - Goes to bed. Mayor\'s Manor is locked.'
			],
			'Spring 15 (Bus Service Restored)': [
				'9:40 AM - Greets Pam as he boards the bus to Calico Desert for the Desert Festival.',
				'9:50 AM - Stands under a pole south of the bus.',
				'1:00 AM - Boards the bus back to the Valley.'
			],
			'Spring 16 (Bus Service Restored)': [
				'9:40 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'9:50 AM - Stands by one of the villager shops.',
				'12:00 AM - Boards the bus back to the Valley.'
			],
			'Spring 17 (Bus Service Restored)': [
				'9:40 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'9:50 AM - Stands at the bus stop next to the Desert Trader.',
				'1:10 AM - Boards the bus back to the Valley.'
			],
			'Spring 1': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Fish Shop.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Spring 3 and 24': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to Marnie\'s Ranch.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Spring 6 and 20': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Blacksmith.',
				'1:00 PM - Leaves the Blacksmith to go to the Museum.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Spring 15': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Carpenter\'s Shop.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'8:30 AM - Mayor\'s Manor is unlocked. Lewis is in his kitchen.',
				'2:00 PM - Departs for the the saloon.',
				'2:30 PM - Arrives at the the saloon.',
				'7:40 PM - Departs for home.',
				'8:10 PM - Arrives home. Moves to his kitchen.',
				'10:00 PM - Leaves kitchen to go to bed. Mayor\'s Manor is locked.'
			],
			'Tuesday': [
				'10:00 AM - Wakes up and exits Manor.',
				'10:10 AM - Gardening in front of Manor',
				'11:30 AM - Stops gardening and heads towards Pierre\'s.',
				'12:20 PM - Enters Pierre\'s.',
				'4:00 PM - Leaves Pierre\'s.',
				'4:50 PM - Enters Manor and stares at stove (presumably cooking).',
				'9:00 PM - Moves from stove to Pelican Town Data Book.',
				'10:00 PM - Heads to Bed.'
			],
			'Friday': [
				'10:00 AM - Wakes up and exits Manor.',
				'10:10 AM - Gardening in front of Manor.',
				'11:40 AM - Stops gardening and heads towards Pierre\'s.',
				'12:30 PM - Stands outside of Clinic in front of tree.',
				'2:00 PM - Moves to the fountain.',
				'9:30 PM - In The Stardrop Saloon.',
				'11:10 PM - Goes back to Manor.'
			],
			'Community Center Restored': [
				'8:30 AM - Mayor\'s Manor is unlocked. Lewis is in his kitchen.',
				'9:00 AM - Gardens in front of Manor. Moves to east side at 9:40 AM.',
				'10:40 AM - Leaves the Manor.',
				'11:40 AM - Enters Community Center.',
				'12:10 PM - Stands in the Vault Room in the Community Center.',
				'5:10 PM - Moves to stand in front of the fireplace in the Community Center.',
				'6:30 PM - Leaves the Community Center to go to Manor.',
				'7:40 PM - Arrives home. Moves to his kitchen.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'8:30 AM - Stands in his kitchen at home.',
				'10:00 AM - Exits Manor.',
				'10:10 AM - Gardens in front of Manor.',
				'11:40 AM - Stops gardening and heads to town square.',
				'12:30 PM - Stands in front of tree to the left of Clinic.',
				'2:00 PM - Leaves tree and stands in front of the notice board at Pierre\'s.',
				'4:00 PM - Heads home.',
				'4:30 PM - Arrives home for the night.',
				'10:00 PM - Goes to bed. Mayor\'s Manor is locked.'
			],
			'Green Rain (Year 1)': [
				'All day - In The Stardrop Saloon.'
			],
			'Summer 1': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Fish Shop.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Summer 3 and 24': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to Marnie\'s Ranch.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Summer 6 and 20': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Blacksmith.',
				'1:00 PM - Leaves the Blacksmith to go to the Museum.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Summer 15': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Carpenter\'s Shop.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'8:30 AM - Mayor\'s Manor is unlocked. Lewis is in his kitchen.',
				'2:00 PM - Departs for the the saloon.',
				'2:30 PM - Arrives at the the saloon.',
				'7:40 PM - Departs for home.',
				'8:10 PM - Arrives home. Moves to his kitchen.',
				'10:00 PM - Leaves kitchen to go to bed. Mayor\'s Manor is locked.'
			],
			'Tuesday': [
				'10:00 AM - Wakes up and exits Manor.',
				'10:10 AM - Gardening in front of Manor.',
				'11:30 AM - Stops gardening and heads towards Pierre\'s.',
				'12:20 PM - Enters Pierre\'s.',
				'4:00 PM - Leaves Pierre\'s.',
				'4:50 PM - Enters Manor and stares at stove (presumably cooking).',
				'9:00 PM - Moves from stove to Pelican Town Data Book.',
				'10:00 PM - Heads to Bed.'
			],
			'Friday': [
				'10:00 AM - Wakes up and exits Manor.',
				'10:10 AM - Gardening in front of Manor.',
				'11:40 AM - Stops gardening and heads towards Pierre\'s.',
				'12:30 PM - Stands outside of Clinic in front of tree.',
				'2:00 PM - Moves to the fountain.',
				'9:30 PM - In The Stardrop Saloon.',
				'11:10 PM - Goes back to Manor.'
			],
			'Sunday': [
				'10:00 AM - Leaves his Manor.',
				'10:10 AM - Gardening in front of his Manor.',
				'1:00 PM - Standing on the pier at the The Beach.',
				'4:50 PM - Enters his Manor.'
			],
			'Community Center Restored': [
				'8:30 AM - Mayor\'s Manor is unlocked. Lewis is in his kitchen.',
				'9:00 AM - Gardens in front of Manor. Moves to east side at 9:40 AM.',
				'10:40 AM - Leaves the Manor.',
				'11:40 AM - Enters Community Center.',
				'12:10 PM - Stands in the Vault Room in the Community Center.',
				'5:10 PM - Moves to stand in front of the fireplace in the Community Center.',
				'6:30 PM - Leaves the Community Center to go to Manor.',
				'7:40 PM - Arrives home. Moves to his kitchen.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'8:30 AM - Stands in his kitchen at home.',
				'10:00 AM - Exits Manor.',
				'10:10 AM - Gardens in front of Manor.',
				'11:40 AM - Stops gardening and heads to town square.',
				'12:30 PM - Stands in front of tree to the left of Clinic.',
				'2:00 PM - Leaves tree and stands in front of the notice board at Pierre\'s.',
				'4:00 PM - Heads home.',
				'4:30 PM - Arrives home for the night.',
				'10:00 PM - Goes to bed. Mayor\'s Manor is locked.'
			],
			'Fall 1': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Fish Shop.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Fall 3 and 24': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to Marnie\'s Ranch.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Fall 6 and 20': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Blacksmith.',
				'1:00 PM - Leaves the Blacksmith to go to the Museum.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Fall 9': [
				'8:30 AM - Stands in the dining room of the Manor.',
				'10:30 AM - Arrives at Marnie\'s house.',
				'11:00 AM - Leaves Marnie\'s house.',
				'12:30 PM - Enters Clinic.',
				'4:00 PM - Leaves Clinic.',
				'5:30 PM - Arrives at Marnie\'s house and stares at microwave (presumably cooking).',
				'9:20 PM - Goes to Marnie\'s bed.'
			],
			'Fall 15': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Carpenter\'s Shop.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'8:30 AM - Mayor\'s Manor is unlocked. Lewis is in his kitchen.',
				'2:00 PM - Departs for the the saloon.',
				'2:30 PM - Arrives at the the saloon.',
				'7:40 PM - Departs for home.',
				'8:10 PM - Arrives home. Moves to his kitchen.',
				'10:00 PM - Leaves kitchen to go to bed. Mayor\'s Manor is locked.'
			],
			'Tuesday': [
				'10:00 AM - Wakes up and exits Manor.',
				'10:10 AM - Gardening in front of Manor.',
				'11:30 AM - Stops gardening and heads towards Pierre\'s.',
				'12:20 PM - Enters Pierre\'s.',
				'4:00 PM - Leaves Pierre\'s.',
				'4:50 PM - Enters Manor and stares at stove (presumably cooking).',
				'9:00 PM - Moves from stove to Pelican Town Data Book.',
				'10:00 PM - Heads to Bed.'
			],
			'Friday': [
				'10:00 AM - Wakes up and exits Manor.',
				'10:10 AM - Gardening in front of Manor.',
				'11:40 AM - Stops gardening and heads towards Pierre\'s.',
				'12:30 PM - Stands outside of Clinic in front of tree.',
				'2:00 PM - Moves to the fountain.',
				'9:30 PM - In The Stardrop Saloon.',
				'11:10 PM - Goes back to Manor.'
			],
			'Sunday': [
				'9:30 AM - Gardens in front of the Manor.',
				'11:00 AM - Walks from the Manor to river near Leah\'s cabin.',
				'1:30 PM - Stands by river near Leah\'s cabin.',
				'4:00 PM - Walks from river to Mayor\'s Manor.',
				'5:30 PM - Inside the Manor.',
				'10:00 PM - Sleeps in Mayor\'s Manor bedroom.'
			],
			'Community Center Restored': [
				'8:30 AM - Mayor\'s Manor is unlocked. Lewis is in his kitchen.',
				'9:00 AM - Gardens in front of Manor. Moves to east side at 9:40 AM.',
				'10:40 AM - Leaves the Manor.',
				'11:40 AM - Enters Community Center.',
				'12:10 PM - Stands in the Vault Room in the Community Center.',
				'5:10 PM - Moves to stand in front of the fireplace in the Community Center.',
				'6:30 PM - Leaves the Community Center to go to Manor.',
				'7:40 PM - Arrives home. Moves to his kitchen.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'8:30 AM - Stands in his kitchen at home.',
				'10:00 AM - Exits Manor.',
				'10:10 AM - Gardens in front of Manor.',
				'11:40 AM - Stops gardening and heads to town square.',
				'12:30 PM - Stands in front of tree to the left of Clinic.',
				'2:00 PM - Leaves tree and stands in front of the notice board at Pierre\'s.',
				'4:00 PM - Heads home.',
				'4:30 PM - Arrives home for the night.',
				'10:00 PM - Goes to bed. Mayor\'s Manor is locked.'
			],
			'Winter 1': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Fish Shop.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Winter 3 and 24': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to Marnie\'s Ranch.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Winter 6 and 20': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Blacksmith.',
				'1:00 PM - Leaves the Blacksmith to go to the Museum.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Winter 15': [
				'8:00 AM - Stands in his kitchen.',
				'10:00 AM - Leaves home to head to the Carpenter\'s Shop.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Winter 16': [
				'8:30 AM - Standing in kitchen.',
				'10:00 AM - Walks outside to stand in his garden.',
				'11:40 AM - Walks to town square.',
				'12:30 PM - Stands in front of tree beside Harvey\'s Clinic.',
				'2:00 PM - Stands in front of bulletin board at Pierre\'s.',
				'4:20 PM - Attends the Night Market.',
				'11:00 PM - Returns to the Manor.'
			],
			'Raining': [
				'8:30 AM - Mayor\'s Manor is unlocked. Lewis is in his kitchen.',
				'2:00 PM - Departs for the the saloon.',
				'2:30 PM - Arrives at the the saloon.',
				'7:40 PM - Departs for home.',
				'8:10 PM - Arrives home. Moves to his kitchen.',
				'10:00 PM - Leaves kitchen to go to bed. Mayor\'s Manor is locked.'
			],
			'Tuesday': [
				'10:00 AM - Wakes up and exits Manor.',
				'10:10 AM - Gardening in front of Manor.',
				'11:30 AM - Stops gardening and heads towards Pierre\'s.',
				'12:20 PM - Enters Pierre\'s.',
				'4:00 PM - Leaves Pierre\'s.',
				'4:50 PM - Enters Manor and stares at stove (presumably cooking).',
				'9:00 PM - Moves from stove to Pelican Town Data Book.',
				'10:00 PM - Heads to Bed.'
			],
			'Friday': [
				'10:00 AM - Wakes up and exits Manor.',
				'10:10 AM - Gardening in front of Manor.',
				'11:40 AM - Stops gardening and heads towards Pierre\'s.',
				'12:30 PM - Stands outside of Clinic in front of tree.',
				'2:00 PM - Moves to the fountain.',
				'9:30 PM - In The Stardrop Saloon.',
				'11:10 PM - Goes back to Manor.'
			],
			'Sunday': [
				'8:00 AM - Stands in his kitchen.',
				'11:00 AM - Leave home to head to the Museum.',
				'4:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Community Center Restored': [
				'8:30 AM - Mayor\'s Manor is unlocked. Lewis is in his kitchen.',
				'9:00 AM - Gardens in front of Manor. Moves to east side at 9:40 AM.',
				'10:40 AM - Leaves the Manor.',
				'11:40 AM - Enters Community Center.',
				'12:10 PM - Stands in the Vault Room in the Community Center.',
				'5:10 PM - Moves to stand in front of the fireplace in the Community Center.',
				'6:30 PM - Leaves the Community Center to go to Manor.',
				'7:40 PM - Arrives home. Moves to his kitchen.'
			]
		}
	},
	Vincent: {
		'All Seasons': {
			'Regular Schedule': [
				'9:00 AM - Wakes up for the day.',
				'11:00 AM - Plays inside his home.',
				'2:00 PM - Leaves his home and heads outside to the town square.',
				'5:00 PM - Leaves town and walks home.',
				'7:00 PM - Plays inside his home.',
				'10:00 PM - Goes to bed for the night.'
			],
			'Green Rain (Year 1)': [
				'All day - In the living room.'
			],
			'Tuesday the 9th and Tuesday the 23rd': [
				'9:00 AM - Wakes up for the day.',
				'11:00 AM - Plays inside his home.',
				'2:00 PM - Leaves his home and heads outside to the town square.',
				'5:00 PM - Leaves town and walks home.',
				'7:00 PM - Plays inside his home.',
				'10:00 PM - Goes to bed for the night.'
			],
			'Spring 11': [
				'9:00 AM - Wakes up, concerned about having to go to the doctor. "*sob*... I have to get my shots today."',
				'11:30 AM - Leaves home to travel to the clinic for his annual checkup. "*gulp*... Mommy, don\'t make me do it."',
				'1:30 PM - Continues checkup at the clinic. "Do I get a lollipop for being so brave?"',
				'4:00 PM - Leaves the clinic to walk home, once there he plays inside.',
				'10:00 PM - Goes to bed for the night.'
			],
			'Spring 17 (Bus Service Restored)': [
				'10:20 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'10:30 AM - With his mom by one of the villager shops.',
				'12:10 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Winter 16': [
				'9:00 AM - Wakes up for the day.',
				'11:00 AM - Plays inside his home.',
				'2:00 PM - Leaves his home and heads outside to the town square.',
				'4:30 PM - Attends the Night Market.',
				'11:30 PM - Goes to bed for the night.'
			],
			'Rain': [
				'9:00 AM - Wakes up for the day.',
				'11:00 AM - Plays inside his home.',
				'2:00 PM - Moves around inside his home.',
				'5:00 PM - Moves around inside his home.',
				'7:00 PM - Plays inside his home.',
				'10:00 PM - Goes to bed for the night.'
			],
			'Tuesday, Wednesday and Friday': [
				'9:00 AM - Leaves his home and walks to the Museum to be tutored by Penny.',
				'2:00 PM - Leaves the Museum, walks back to Pelican Town.',
				'4:20 PM - Walks around Pelican Town.',
				'5:40 PM - Leaves town to go home.',
				'10:00 PM - Goes to bed for the night.'
			],
			'Saturday': [
				'10:10 AM - Leaves his home and heads outside to Pelican Town.',
				'12:00 PM - Heads to the town square.',
				'5:00 PM - Leaves the town square and walks around Pelican Town.',
				'10:00 PM - Leaves town to go home to bed for the night.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'9:00 AM - Wakes up for the day.',
				'11:00 AM - Plays inside his home.',
				'1:40 PM - Leaves his home and heads to The Beach.',
				'7:00 PM - Leaves The Beach and walks back home.',
				'11:00 PM - Goes to bed for the night.'
			]
		}
	},
	Haley: {
		'Spring': {
			'Regular Schedule': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaving home to go to the fountain.',
				'12:20 PM - By the fountain, west of Community Center.',
				'4:30 PM - Heads home.',
				'5:50 PM - At home, cooking dinner.',
				'8:20 PM - In her room.',
				'10:30 PM - Goes to bed.'
			],
			'Spring 15 (Bus Service Restored)': [
				'10:20 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'10:50 AM - Walks around the area west of Emily\'s outfit services.',
				'1:30 AM - Boards the bus back to the Valley.'
			],
			'Spring 16 (Bus Service Restored)': [
				'10:20 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:00 AM - Sunbathes on the cliff south of the Oasis.',
				'9:00 PM - Gets up and heads back to the bus.',
				'9:30 PM - Takes the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Rain': [
				'10:30 AM - Wakes up and stands by her dresser in her bedroom.',
				'11:30 AM - Moves to the vanity mirror in her bedroom.',
				'12:00 PM - Leaves her room to go to the kitchen.',
				'4:00 PM - Returns to her room.',
				'7:00 PM - Leaves her room and stands in the living room.',
				'10:00 PM - Goes to bed.'
			],
			'Monday': [
				'9:00 AM - In her room.',
				'10:00 AM - Leaves her room to go to kitchen.',
				'11:00 AM - Leaving home to go to the river south of Marnie\'s Ranch.',
				'12:20 PM - By the river south of Marnie\'s Ranch, taking pictures.',
				'4:30 PM - Heads home.',
				'5:50 PM - At home, cooking dinner.',
				'8:20 PM - In her room.',
				'11:00 PM - Goes to bed.'
			],
			'Wednesday (No player has 6 hearts with Haley or Alex)': [
				'9:00 AM - In her room.',
				'12:10 PM - In the living room.',
				'12:30 PM - Leaves house to stand by the fountain.',
				'4:30 PM - Moves to the kitchen.',
				'8:00 PM - Returns to her room',
				'10:30 PM - Goes to bed.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'9:00 AM - In her room.',
				'10:30 AM - Leaving house to go to beach.',
				'11:50 AM - At the beach, northwest corner.',
				'1:30 PM - Goes to Alex\'s ice cream stand.',
				'2:30 PM - At Alex\'s ice cream stand, next to museum/library.',
				'5:00 PM - Heads home.',
				'6:20 PM - At home, cooking dinner.',
				'8:20 PM - In her room.',
				'11:00 PM - Goes to bed.'
			],
			'Green Rain (Year 1)': [
				'All day - In The Stardrop Saloon.'
			],
			'Rain': [
				'10:30 AM - Wakes up and stands by her dresser in her bedroom.',
				'11:30 AM - Moves to the vanity mirror in her bedroom.',
				'12:00 PM - Leaves her room to go to the kitchen.',
				'4:00 PM - Returns to her room.',
				'7:00 PM - Leaves her room and stands in the living room.',
				'10:00 PM - Goes to bed.'
			],
			'Wednesday (No player has 6 hearts with Haley or Alex)': [
				'9:00 AM - In her room.',
				'12:10 PM - In the living room.',
				'12:30 PM - Leaves house to stand by the fountain.',
				'4:30 PM - Moves to the kitchen.',
				'8:00 PM - Returns to her room',
				'10:30 PM - Goes to bed.'
			],
			'Wednesday (Any player has at least 6 hearts with Alex)': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaving home to go to the fountain.',
				'12:20 PM - By the fountain, west of Community Center.',
				'4:30 PM - Heads home.',
				'5:50 PM - At home, cooking dinner.',
				'8:20 PM - In her room.',
				'10:30 PM - Goes to bed.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaving home to go to the fountain.',
				'12:20 PM - By the fountain, west of Community Center.',
				'4:30 PM - Heads home.',
				'5:50 PM - At home, cooking dinner.',
				'8:20 PM - In her room.',
				'10:30 PM - Goes to bed.'
			],
			'Rain': [
				'10:30 AM - Wakes up and stands by her dresser in her bedroom.',
				'11:30 AM - Moves to the vanity mirror in her bedroom.',
				'12:00 PM - Leaves her room to go to the kitchen.',
				'4:00 PM - Returns to her room.',
				'7:00 PM - Leaves her room and stands in the living room.',
				'10:00 PM - Goes to bed.'
			],
			'Monday': [
				'9:00 AM - In her room.',
				'10:00 AM - Leaves her room to go to kitchen.',
				'11:00 AM - Leaving home to go to the river south of Marnie\'s Ranch.',
				'12:20 PM - By the river south of Marnie\'s Ranch, taking pictures.',
				'4:30 PM - Heads home.',
				'5:50 PM - At home, cooking dinner.',
				'8:20 PM - In her room.',
				'11:00 PM - Goes to bed.'
			],
			'Wednesday (No player has 6 hearts with Haley or Alex)': [
				'9:00 AM - In her room.',
				'12:10 PM - In the living room.',
				'12:30 PM - Leaves house to stand by the fountain.',
				'4:30 PM - Moves to the kitchen.',
				'8:00 PM - Returns to her room',
				'10:30 PM - Goes to bed.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaving home to go to the fountain.',
				'12:20 PM - By the fountain, west of Community Center.',
				'4:30 PM - Heads home.',
				'5:50 PM - At home, cooking dinner.',
				'8:20 PM - In her room.',
				'10:30 PM - Goes to bed.'
			],
			'Winter 9': [
				'11:30 AM - Harvey\'s Clinic.',
				'4:00 PM - Walks home.'
			],
			'Winter 16': [
				'10:30 AM - Wakes up and stands by her dresser in her bedroom.',
				'11:30 AM - Moves to the vanity in her bedroom.',
				'12:00 PM - Leaves her room to go to the kitchen.',
				'4:30 PM - Attends the Night Market.',
				'12:00 AM - Returns home.'
			],
			'Rain': [
				'10:30 AM - Wakes up and stands by her dresser in her bedroom.',
				'11:30 AM - Moves to the vanity in her bedroom.',
				'12:00 PM - Leaves her room to go to the kitchen.',
				'4:00 PM - Returns to her room.',
				'7:00 PM - Leaves her room and stands in the living room.',
				'10:00 PM - Goes to bed.'
			],
			'Wednesday (No player has 6 hearts with Haley or Alex)': [
				'9:00 AM - In her room.',
				'12:10 PM - In the living room.',
				'12:30 PM - Leaves house to stand by the fountain.',
				'4:30 PM - Moves to the kitchen.',
				'8:00 PM - Returns to her room',
				'10:30 PM - Goes to bed.'
			],
			'Wednesday (Any player has at least 6 hearts with Alex)': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaving home to go to the fountain.',
				'12:20 PM - By the fountain, west of Community Center.',
				'4:30 PM - Heads home.',
				'5:50 PM - At home, cooking dinner.',
				'8:20 PM - In her room.',
				'10:30 PM - Goes to bed.'
			]
		},
		'Marriage': {
			'Spring 15 (Bus Service Restored)': [
				'9:00 AM - Leaves home to attend the Desert Festival.',
				'10:00 AM - Walks around the area west of Emily\'s outfit services.',
				'12:00 AM - Heads home.'
			],
			'Spring 16 (Bus Service Restored)': [
				'9:00 AM - Leaves home to attend the Desert Festival and sunbathe on the cliff south of the Oasis.',
				'9:00 PM - Heads home.'
			],
			'Monday': [
				'6:00 AM - At home.',
				'9:30 AM - Starts leaving home.',
				'10:40 AM - Arrives at 2 Willow Lane.',
				'3:40 PM - Starts leaving 2 Willow Lane.',
				'5:00 PM - Goes back home.',
				'10:00 PM - Goes to bed.'
			]
		}
	},
	Pam: {
		'All Seasons': {
			'Regular Schedule (No Bus Service)': [
				'8:00 AM - Lounges on her couch in the trailer.',
				'12:00 PM - Leaves the trailer and heads to JojaMart.',
				'4:00 PM - Leaves JojaMart and heads to the saloon.',
				'12:00 AM - Leaves the saloon and heads home.'
			],
			'Regular Schedule (Bus Service Restored)': [
				'8:00 AM - Lounges on her couch in the trailer.',
				'8:30 AM - Leaves the trailer to head to the bus stop just east of the farm.',
				'10:00 AM - Arrives at the bus stop for the afternoon.',
				'5:00 PM - Leaves the bus stop and heads to the saloon.',
				'12:00 AM - Leaves the saloon and back home for the night.'
			],
			'Spring 16 (Bus Service Restored)': [
				'10:30 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'10:50 AM - Stands in front of one of the villager shops.',
				'12:40 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and takes bus back to the Valley.'
			],
			'Spring 15 and 17 (Bus Service Restored)': [
				'7:20 AM - Leaves her trailer.',
				'8:50 AM - Arrives at the Bus Stop.',
				'12:50 AM - Heads home.'
			],
			'Spring 25': [
				'8:00 AM - Lounges on her couch in the trailer.',
				'11:30 AM - Leaves her trailer and heads to the medical clinic for her annual checkup.',
				'1:30 PM - Continues her checkup at the clinic.',
				'4:00 PM - Leaves the clinic and heads to the saloon.',
				'12:00 AM - Leaves the saloon and heads home for the night.'
			],
			'Green Rain (Year 1)': [
				'All day - In The Stardrop Saloon.'
			],
			'Winter 12 and 13': [
				'All day - On The Beach, watching the SquidFest.'
			]
		}
	},
	Shane: {
		'Spring': {
			'Spring 17 (Bus Service Restored)': [
				'11:00 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:10 AM - Stands by the chef stand.',
				'12:30 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Monday - Friday (Community Center Not Restored)': [
				'7:10 AM - Leaves Marnie\'s Ranch and heads to JojaMart.',
				'5:00 PM - Leaves JojaMart and heads for the Stardrop Saloon.',
				'11:10 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Rain (Community Center Not Restored)': [
				'7:10 AM - Leaves Marnie\'s Ranch and heads to JojaMart.',
				'5:00 PM - Leaves JojaMart and heads for the Stardrop Saloon.',
				'11:10 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Monday - Friday (Community Center Restored)': [
				'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
				'11:00 AM - Leaves the kitchen and returns to his room.',
				'12:00 PM - Leaves his room and stands by the fireplace at Marnie\'s Ranch.',
				'2:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
				'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Rain (Community Center Restored)': [
				'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
				'11:00 AM - Leaves the kitchen and returns to his room.',
				'12:00 PM - Leaves his room and stands by the fireplace at Marnie\'s Ranch.',
				'2:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
				'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Saturday': [
				'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
				'12:00 PM - Leaves Marnie\'s Ranch and heads to Pierre\'s General Store.',
				'5:00 PM - Leaves Pierre\'s General Store and heads to the Stardrop Saloon.',
				'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Sunday (Alex\'s 14 heart event seen)': [
				'7:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
				'10:00 AM - Leaves Marnie\'s Ranch and heads to the back room of the Stardrop Saloon.',
				'3:00 PM - Moves to his spot next to the fireplace.',
				'12:00 AM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Sunday': [
				'12:30 PM - In kitchen at Marnie\'s Ranch.',
				'6:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
				'12:00 AM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			]
		},
		'Summer': {
			'Green Rain (Year 1)': [
				'All day - In the kitchen.'
			],
			'Monday - Friday (Community Center Not Restored)': [
				'7:10 AM - Leaves Marnie\'s Ranch and heads to JojaMart.',
				'5:00 PM - Leaves JojaMart and heads for the Stardrop Saloon.',
				'11:10 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Rain (Community Center Not Restored)': [
				'7:10 AM - Leaves Marnie\'s Ranch and heads to JojaMart.',
				'5:00 PM - Leaves JojaMart and heads for the Stardrop Saloon.',
				'11:10 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Monday - Friday': [
				'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
				'11:00 AM - Leaves the kitchen and returns to his room.',
				'12:00 PM - Leaves his room and stands by the fireplace at Marnie\'s Ranch.',
				'2:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
				'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Rain': [
				'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
				'11:00 AM - Leaves the kitchen and returns to his room.',
				'12:00 PM - Leaves his room and stands by the fireplace at Marnie\'s Ranch.',
				'2:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
				'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Saturday': [
				'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
				'12:00 PM - Leaves Marnie\'s Ranch and heads to Pierre\'s General Store.',
				'5:00 PM - Leaves Pierre\'s General Store and heads to the Stardrop Saloon.',
				'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Sunday (Alex\'s 14 heart event seen)': [
				'7:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
				'10:00 AM - Leaves Marnie\'s Ranch and heads to the back room of the Stardrop Saloon.',
				'3:00 PM - Moves to his spot next to the fireplace.',
				'12:00 AM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Sunday': [
				'12:30 PM - In kitchen at Marnie\'s Ranch.',
				'6:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
				'12:00 AM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
			],
			'Fall': {
				'Monday - Friday (Community Center Not Restored)': [
					'7:10 AM - Leaves Marnie\'s Ranch and heads to JojaMart.',
					'5:00 PM - Leaves JojaMart and heads for the Stardrop Saloon.',
					'11:10 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Rain (Community Center Not Restored)': [
					'7:10 AM - Leaves Marnie\'s Ranch and heads to JojaMart.',
					'5:00 PM - Leaves JojaMart and heads for the Stardrop Saloon.',
					'11:10 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Monday - Friday': [
					'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
					'11:00 AM - Leaves the kitchen and returns to his room.',
					'12:00 PM - Leaves his room and stands by the fireplace at Marnie\'s Ranch.',
					'2:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
					'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Rain': [
					'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
					'11:00 AM - Leaves the kitchen and returns to his room.',
					'12:00 PM - Leaves his room and stands by the fireplace at Marnie\'s Ranch.',
					'2:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
					'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Saturday': [
					'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
					'12:00 PM - Leaves Marnie\'s Ranch and heads to Pierre\'s General Store.',
					'5:00 PM - Leaves Pierre\'s General Store and heads to the Stardrop Saloon.',
					'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Sunday (Alex\'s 14 heart event seen)': [
					'7:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
					'10:00 AM - Leaves Marnie\'s Ranch and heads to the back room of the Stardrop Saloon.',
					'3:00 PM - Moves to his spot next to the fireplace.',
					'12:00 AM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Sunday': [
					'12:30 PM - In kitchen at Marnie\'s Ranch.',
					'6:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
					'12:00 AM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				]
			},
			'Winter': {
				'Winter 15': [
					'7:00 AM - At Marnie\'s Ranch.',
					'11:00 AM - Leaves the kitchen to head to his room.',
					'3:00 PM - Leaves Marnie\'s Ranch to attend the Night Market.',
					'11:00 PM - Leaves the Night Market to return home.'
				],
				'Monday - Friday (Community Center Not Restored)': [
					'7:10 AM - Leaves Marnie\'s Ranch and heads to JojaMart.',
					'5:00 PM - Leaves JojaMart and heads for the Stardrop Saloon.',
					'11:10 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Rain (Community Center Not Restored)': [
					'7:10 AM - Leaves Marnie\'s Ranch and heads to JojaMart.',
					'5:00 PM - Leaves JojaMart and heads for the Stardrop Saloon.',
					'11:10 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Monday - Friday': [
					'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
					'11:00 AM - Leaves the kitchen and returns to his room.',
					'12:00 PM - Leaves his room and stands by the fireplace at Marnie\'s Ranch.',
					'2:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
					'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Rain': [
					'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
					'11:00 AM - Leaves the kitchen and returns to his room.',
					'12:00 PM - Leaves his room and stands by the fireplace at Marnie\'s Ranch.',
					'2:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
					'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Saturday': [
					'9:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
					'12:00 PM - Leaves Marnie\'s Ranch and heads to Pierre\'s General Store.',
					'5:00 PM - Leaves Pierre\'s General Store and heads to the Stardrop Saloon.',
					'11:00 PM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Sunday (Alex\'s 14 heart event seen)': [
					'7:00 AM - Leaves his room and stands in kitchen at Marnie\'s Ranch.',
					'10:00 AM - Leaves Marnie\'s Ranch and heads to the back room of the Stardrop Saloon.',
					'3:00 PM - Moves to his spot next to the fireplace.',
					'12:00AM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				],
				'Sunday': [
					'12:30 PM  - In kitchen at Marnie\'s Ranch.',
					'6:00 PM - Leaves Marnie\'s Ranch and heads to the Stardrop Saloon.',
					'12:00 AM - Leaves the Stardrop Saloon and heads back to Marnie\'s Ranch.'
				]
			},
			'Marriage': {
				'Regular Schedule': [
					'Shane doesn\'t leave The Farm except on Monday and Friday.',
					'On Saturday mornings he spends time next to his chicken coop behind the farmhouse.',
					'Shane will no longer work at JojaMart, even if it is still open.'
				],
				'Spring 17 (Bus Service Restored)': [
					'8:00 AM - Walks to the Desert Festival and stands by the chef stand.',
					'12:30 AM - Boards the bus back to the Valley.'
				],
				'Green Rain (Year 1)': [
					'6:10 AM - Walks to Marnie\'s Ranch and stands in the kitchen.'
				],
				'Monday': [
					'6:00 AM - At home.',
					'9:30 AM - Starts leaving home.',
					'10:30 AM - Arrives at Marnie\'s Ranch.',
					'11:30 AM - Leaves Marnie\'s Ranch.',
					'11:50 AM - Stands under big tree, north in Cindersap Forest.',
					'05:00 PM - Leaves big tree and heads home.',
					'07:30 PM - Arrives at home.',
					'10:00 PM - Goes to bed.'
				],
				'Friday': [
					'6:00 AM - At home.',
					'8:30 AM - Leaves home and heads for the river in Pelican Town.',
					'10:00 AM - Standing by river.',
					'1:00 PM - Leaves the river and heads to Pierre\'s General Store.',
					'5:00 PM - Leaves Pierre\'s General Store and heads to the Stardrop Saloon.',
					'10:00 PM - Leaves the Stardrop Saloon and heads back home.'
				],
				'Sunday (Alex\'s 14 heart event seen)': [
					'6:00 AM - At home.',
					'8:30 AM - Leaves home and heads for the river in Pelican Town.',
					'10:00 AM - Leaves the river and heads to the back room of the Stardrop Saloon.',
					'3:00 PM - Moves to stand in front of the Joja Vending Machine.',
					'8:00 PM - Leaves the Stardrop Saloon and heads back home.'
				]
			}
		}
	},
	Pierre: {
		'All Seasons': {
			'Regular Schedule': [
				'6:00 AM - Stands behind the counter of the general store.',
				'7:00 AM - In the aisles of the general store.',
				'8:30 AM - Goes to stand behind the counter of the general store.',
				'5:00 PM - Leaves the counter and stands in the aisles again.',
				'7:00 PM - Goes to the kitchen in his house.',
				'9:00 PM - Goes to his room and stands in front of the bookcase.',
				'11:00 PM - Goes to sleep.'
			],
			'Green Rain (Year 1)': [
				'All day - In the living room.'
			],
			'Spring 15 (Bus Service Restored)': [
				'6:00 AM - Stands behind the counter of the general store.',
				'7:00 AM - In the aisles of the general store.',
				'8:30 AM - Goes to stand behind the counter of the general store.',
				'6:00 PM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'6:50 PM - Stands outside the Oasis.',
				'1:40 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Rain': [
				'6:00 AM - Stands behind the counter of the general store.',
				'7:00 AM - In the aisles of the general store.',
				'8:30 AM - Goes to stand behind the counter of the general store.',
				'5:00 PM - Leaves the counter and stands in the aisles again.',
				'7:00 PM - Goes to the kitchen in his house.',
				'9:00 PM - Goes to his room and stands in front of the bookcase.',
				'11:00 PM - Goes to sleep.'
			],
			'Friday': [
				'6:00 AM - Stands behind the counter of the general store.',
				'7:00 AM - In the aisles of the general store.',
				'8:30 AM - Goes to stand behind the counter of the general store.',
				'5:00 PM - Goes to the Stardrop Saloon and stands in front of the counter.',
				'10:50 PM - Returns home to sleep.'
			]
		}
	},
	Emily: {
		'All Seasons': {
			'Regular Schedule': [
				'9:00 AM - In her bedroom.',
				'12:00 PM - Leaves bedroom to stand in living room.',
				'3:30 PM - Leaves home to work at The Stardrop Saloon.',
				'12:30 AM - Goes home for the night.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Spring 15, 16 and 17 (Bus Service Restored)': [
				'9:30 AM - Boards bus to Calico Desert to attend the Desert Festival.',
				'10:00 AM - Stands at her outfit services.',
				'12:30 AM - Boards bus back to the Valley.'
			],
			'Fall 15 (Bus Service Restored)': [
				'9:00 AM - In her bedroom.',
				'10:30 AM - Leaves home for Calico Desert to visit Sandy on her birthday.',
				'12:00 AM - Goes home for the night.'
			],
			'Winter 11': [
				'9:00 AM - In her bedroom.',
				'10:30 AM - Leaves home for Harvey\'s Clinic, waits in waiting room.',
				'1:30 PM - Moves to exam room.',
				'4:00 PM - Leaves clinic to work at The Stardrop Saloon.',
				'12:30 AM - Goes home for the night.'
			],
			'Winter 15': [
				'9:00 AM - In her bedroom.',
				'12:00 PM - Leaves bedroom to stand in living room.',
				'2:30 PM - Leaves home to attend the Night Market.',
				'12:30 AM - Goes home for the night.'
			],
			'Green Rain (Year 1)': [
				'All day - In The Stardrop Saloon.'
			],
			'Rain': [
				'9:00 AM - In her bedroom.',
				'12:00 PM - Leaves bedroom to stand in living room.',
				'3:30 PM - Leaves home to work at The Stardrop Saloon.',
				'12:30 AM - Goes home for the night.'
			],
			'Tuesday': [
				'9:00 AM - In her bedroom.',
				'10:00 AM - Leaves home to attend aerobics class at Pierre\'s General Store.',
				'1:00 PM - Aerobics class begins.',
				'4:00 PM - Leaves Pierre\'s to work at The Stardrop Saloon.',
				'12:30 AM - Goes home for the night.'
			],
			'Friday (Community Center Restored)': [
				'9:00 AM - In her bedroom.',
				'10:00 AM - Walks to Community Center, stands in Crafts Room.',
				'3:30 PM - Leaves the Community Center to work at The Stardrop Saloon.',
				'12:30 AM - Goes home for the night.'
			]
		},
		'Marriage': {
			'Spring 15, 16 and 17 (Bus Service Restored)': [
				'8:00 AM - Leaves home to attend the Desert Festival and stand at her outfit services.',
				'12:30 AM - Heads home.'
			],
			'Fall 15 (Bus Service Restored)': [
				'6:00 AM - At home.',
				'12:00 PM - Arrives at the Oasis to visit Sandy on her birthday.',
				'1:00 PM - Leaves the Oasis and walks around Calico Desert.',
				'12:00 AM - Heads home for the night.'
			],
			'Monday': [
				'8:30 AM - Leaves home to walk to 2 Willow Lane, stands in kitchen.',
				'11:00 AM - Leaves 2 Willow Lane to go to town, stands east of Community Center and looks at the river.',
				'3:00 PM - Heads for the Stardrop Saloon to work.',
				'10:00 PM - Leaves the Saloon to return home.'
			],
			'Friday': [
				'8:30 AM - Leaves house to go to docks west of Fish Shop.',
				'1:00 PM - Leaves beach to go to Pierre\'s General Store.',
				'3:00 PM - Leaves Pierre\'s to go to work at the Stardrop Saloon.',
				'10:00 PM - Leaves the Saloon to return home.'
			]
		}
	},
	Jas: {
		'All Seasons': {
			'Regular Schedule': [
				'9:00 AM - In her bedroom.',
				'11:00 AM - Leaves home to stand under the large tree west of Marnie\'s Ranch and jump rope.',
				'3:00 PM - Returns home, reads in the entryway of the shop.',
				'7:00 PM - Goes to her bedroom.',
				'9:00 PM - Goes to sleep.'
			],
			'Spring 17 (Bus Service Restored)': [
				'11:00 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:20 AM - Stands south of the villager shops.',
				'11:30 AM - Takes the stairs down to the cliff and stands under a tree north of the pond.',
				'11:40 PM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Green Rain (Year 1)': [
				'All day - In the kitchen.'
			],
			'Tuesday the 9th and Tuesday the 23rd': [
				'9:00 AM - In her bedroom.',
				'11:00 AM - Leaves home to stand under the large tree west of Marnie\'s Ranch and jump rope.',
				'3:00 PM - Returns home, reads in the entryway of the shop.',
				'7:00 PM - Goes to her bedroom.',
				'9:00 PM - Goes to sleep.'
			],
			'Winter 15': [
				'9:00 AM - In her bedroom.',
				'11:00 AM - Leaves home to stand under the large tree west of Marnie\'s Ranch and jump rope.',
				'2:50 PM - Leaves the forest to attend the Night Market.',
				'11:00 PM - Leaves the Night Market to return home.'
			],
			'Winter 18': [
				'9:00 AM - In her bedroom.',
				'10:30 AM - Leaves home to go to Harvey\'s Clinic.',
				'1:30 PM - Moves to exam room inside Clinic.',
				'4:00 PM - Leaves Clinic, reads in the entryway of Marnie\'s Ranch.',
				'8:00 PM - Goes to her room to sleep.'
			],
			'Rain': [
				'9:00 AM - In her bedroom.',
				'11:00 AM - Stands in the entryway of the shop.',
				'3:00 PM - Moves to the fireplace room to read.',
				'7:00 PM - Goes to her bedroom.',
				'9:00 PM - Goes to sleep.'
			],
			'Tuesday, Wednesday and Friday': [
				'9:00 AM - Leaves home to go to the Museum.',
				'2:00 PM - Leaves Museum, stands at river southwest of Museum.',
				'4:20 PM - Leaves riverbank, walks to path south of Emily and Haley\'s house.',
				'5:50 PM - Leaves town and walks home to go to sleep.'
			],
			'Saturday': [
				'10:00 AM - Leaves home, walks to town, stands southwest of the large tree that\'s east of 2 Willow Lane.',
				'12:00 PM - Walks to playground west of Community Center, jumps rope.',
				'5:00 PM - Leaves playground, stands southeast of 2 Willow Lane.',
				'8:00 PM - Walks home and goes to sleep.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'9:00 AM - In her bedroom.',
				'11:00 AM - Stands outside ranch looking at cow pen.',
				'1:20 PM - Walks to the Beach to jump rope.',
				'4:00 PM - Leaves beach to walk home, reads in the entryway of Marnie\'s Ranch.',
				'7:00 PM - Goes to her bedroom.',
				'9:00 PM - Goes to sleep.'
			]
		}
	},
	Gus: {
		'Regular Schedule': [
			'8:00 AM - In his room, sitting on the couch.',
			'12:00 PM - Cleans glasses behind the bar.',
			'4:30 PM - Quits cleaning glasses and tends the bar.',
			'12:00 AM - Goes to his bedroom to sleep.'
		],
		'Spring 15 (Bus Service Restored)': [
			'10:50 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
			'11:10 AM - Stands at the pond near Willy\'s fishing challenge.',
			'12:50 AM - Boards bus back to the Valley.'
		],
		'Desert Festival (As Vendor)': [
			'11:10 AM - Boards the bus to Calico Desert.',
			'11:30 AM - Arrives at his booth.',
			'12:00 AM - Leaves booth and boards bus back to the Valley.'
		],
		'Green Rain (Year 1)': [
			'6:10 AM - Stands in front of the bar in the Stardrop Saloon.'
		],
		'Fall 4': [
			'8:00 AM - In his room, sitting on the couch.',
			'10:30 AM - Heads to the Clinic waiting room and looks at a poster.',
			'1:30 PM - Moves to the left examination room in the clinic.',
			'4:00 PM - Leaves the clinic to go tend the bar.',
			'12:00 AM - Goes to his bedroom to sleep.'
		],
		'Rain': [
			'8:00 AM - In his room, sitting on the couch.',
			'12:00 PM - Cleans glasses behind the bar.',
			'4:30 PM - Quits cleaning glasses and tends the bar.',
			'12:00 AM - Goes to his bedroom to sleep.'
		],
		'Monday': [
			'8:30 AM - Leaves home to go to Pierre\'s General Store.',
			'11:00 AM - Returns to the Saloon to tend the bar.',
			'12:00 AM - Goes to his bedroom to sleep.'
		],
		'Tuesday (Community Center Restored)': [
			'8:00 AM - In his room, sitting on the couch.',
			'8:30 AM - Goes to the kitchen in the Community Center.',
			'12:30 PM - Returns to the Saloon to tend the bar.',
			'12:00 AM - Goes to his bedroom to sleep.'
		],
		'Sunday (Alex\'s 14 heart event seen)': [
			'8:00 AM - In his room, sitting on the couch.',
			'11:40 AM - Goes to the backroom of the Saloon.',
			'3:00 PM - Goes to tend the bar.',
			'12:00 AM - Goes to his bedroom to sleep.'
		]
	},
	Maru: {
		'Spring': {
			'Regular Schedule': [
				'9:00 AM - In her room.',
				'10:20 AM - In the lab.',
				'2:00 PM - Heads to bench east of the Community Center.',
				'3:00 PM - Sitting on bench east of the Community Center.',
				'6:00 PM - Heads home.',
				'7:00 PM - At home, in her room.',
				'10:00 PM - Goes to bed.'
			],
			'Spring 16 (Bus Service Restored)': [
				'9:20 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'9:50 AM - Watches the races near the finish line.',
				'12:20 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Rain': [
				'9:00 AM - In her room.',
				'12:50 PM - Stands in Entryway/Store (Home).',
				'2:40 PM - In the lab.',
				'4:40 PM - In her room.',
				'11:00 PM - Goes to bed.'
			],
			'Monday and Sunday': [
				'9:00 AM - In her room.',
				'10:20 AM - In the lab.',
				'1:30 PM - Heading to bench south of the Saloon.',
				'3:20 PM - Sitting on bench south of the Saloon.',
				'6:30 PM - Heading home.',
				'8:30 PM - At home, in her room.',
				'11:00 PM - Goes to bed.'
			],
			'Tuesday and Thursday': [
				'8:00 AM - Leaves home and heads to Harvey\'s.',
				'9:20 AM - Working at Harvey\'s clinic as a nurse.',
				'4:45 PM - Leaves Harvey\'s and heads home.',
				'6:30 PM - At home, in the kitchen.',
				'10:20 PM - In her room.',
				'12:00 AM - Goes to bed.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'9:00 AM - In her room.',
				'10:20 AM - In the lab.',
				'2:00 PM - Leaving house to go to stand by lake, east of house.',
				'2:40 PM - Standing by lake, east of house.',
				'7:00 PM - Heads home.',
				'7:40 PM - Outside house, looking through telescope.',
				'12:00 AM - Heads inside and goes to bed.'
			],
			'Green Rain (Year 1)': [
				'All day	In Sebastian\'s room.'
			],
			'Rain': [
				'9:00 AM - In her room.',
				'12:30 PM - Leaves her room to stand in the "store" part of the house.',
				'2:30 PM - Goes to the lab in her house.',
				'4:30 PM - At home, in her room.',
				'11:00 PM - Goes to bed.'
			],
			'Monday and Sunday': [
				'9:00 AM - In her room.',
				'10:20 AM - In the lab.',
				'1:30 PM - Leaving house to go sit on a bench in front of Saloon.',
				'3:20 PM - Sitting on a bench in front of Stardrop Saloon.',
				'6:30 PM - Heads home.',
				'8:10 PM - Arrives home.'
			],
			'Tuesday and Thursday': [
				'7:50 AM - Leaving home to go to work at the clinic.',
				'9:40 AM - Working at Harvey\'s clinic as a nurse.',
				'4:45 PM - Heads home.',
				'6:40 PM - At home, in the kitchen.',
				'10:00 PM - Goes to her room.',
				'12:00 AM - Goes to bed.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'9:00 AM - In her room.',
				'10:20 AM - In the lab.',
				'2:00 PM - Leaving house to go sit on bench, east of Community Center.',
				'3:00 PM - Sitting on bench, east of the Community Center.',
				'6:00 PM - Heads home.',
				'7:10 PM - At home, in her room.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'9:00 AM - In her bedroom.',
				'12:30 PM - Leaves her room to stand in the "store" part of the house.',
				'2:30 PM - Goes to the lab in her house.',
				'4:30 PM - Returns to her room.',
				'11:00 PM - Goes to bed.'
			],
			'Monday and Sunday': [
				'9:00 AM - In her bedroom.',
				'10:20 AM - In the lab.',
				'1:30 PM - Leaving house to go sit on a bench in front of the Saloon.',
				'3:20 PM - Sitting on a bench in front of the Stardrop Saloon.',
				'6:30 PM - Heads home.',
				'8:10 PM - Arrives at home.'
			],
			'Tuesday and Thursday': [
				'7:50 AM - Leaving home to go to work at the clinic.',
				'9:40 AM - Working at Harvey\'s clinic as a nurse.',
				'4:45 PM - Heads home.',
				'6:40 PM - At home, in the kitchen.',
				'10:00 PM - Goes to her room.',
				'12:00 AM - Goes to bed.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'9:00 AM - In her room.',
				'10:20 AM - Goes to the lab in her house.',
				'2:40 PM - Leaves to sit on the bench by the Community Center.',
				'6:00 PM - Heads home.',
				'6:40 PM - At home, in the kitchen.',
				'10:00 PM - Goes to her room.',
				'12:00 AM - Goes to bed.'
			],
			'Winter 16': [
				'9:00 AM - Leaves her room.',
				'9:20 AM - In lab at home.',
				'11:00 AM - Goes to her room.',
				'3:40 PM - Leaves home to attend Night Market.',
				'11:30 PM - Leaves Night Market to return home.'
			],
			'Monday and Sunday': [
				'10:00 AM - Leaves room.',
				'10:20 AM - In lab at home.',
				'1:30 PM - Leaves lab at home.',
				'3:30 PM - Sits down on bench north of graveyard.',
				'6:30 PM - Gets up from bench and walks home.',
				'8:00 PM - Returns home.'
			],
			'Tuesday and Thursday': [
				'7:50 AM - Leaving home to go to work at the clinic.',
				'9:40 AM - Working at Harvey\'s clinic as a nurse.',
				'4:45 PM - Heads home.',
				'6:40 PM - At home, in the kitchen.',
				'10:00 PM - In bedroom.'
			],
			'Community Center Restored': [
				'9:00 AM - In her room.',
				'10:20 AM - Goes to the lab in her house.',
				'2:40 PM - Leaves house to visit the Community Center Crafts Room.',
				'6:00 PM - Heads home.',
				'6:40 PM - At home, in the kitchen.',
				'10:00 PM - Goes to her room.',
				'12:00 AM - Goes to bed.'
			]
		},
		'Marriage': {
			'Green Rain (Year 1)': [
				'6:10 AM	Leaves home to walk to Sebastian\'s room.'
			],
			'Spring 16 (Bus Service Restored)': [
				'9:20 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'9:50 AM - Watches the races near the finish line.',
				'12:10 AM - Boards the bus back to the Valley.'
			],
			'Monday': [
				'6:00 AM - At farmhouse.',
				'8:00 AM - Walking to Carpenter\'s Shop.',
				'10:00 AM - Carpenter\'s Shop.',
				'2:00 PM - Walking to Community Center.',
				'3:00 PM - Sits on bench to right of Community Center.',
				'6:00 PM - Walking Home.',
				'7:30 PM - At Home.'
			],
			'Tuesday and Thursday': [
				'7:30 AM - Leaves the farmhouse and heads to work at Harvey\'s Clinic.',
				'9:00 AM - Stands behind sales counter at the clinic.',
				'2:00 PM - Leaves sales counter and stands in waiting area looking at file folders.',
				'4:40 PM - Leaves work and heads home to the farm.'
			]
		}
	},
	Alex: {
		'Spring': {
			'Regular Schedule': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'1:00 PM - Leaves the tree to go back to his room to lift weights.',
				'4:00 PM - Leaves his room to go stand outside by the dog pen.',
				'6:30 PM - Goes back into his house and stands in the entryway.',
				'8:00 PM - Goes to his room and stands by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Spring 15': [
				'7:50 AM - Leaves his house to stand under the tree outside.',
				'10:20 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'10:30 AM - Stands by the chef stand.',
				'12:50 AM - Boards bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Rain': [
				'8:00 AM - Leaves his room and stands in the entryway.',
				'1:00 PM - Goes to his room to lift weights.',
				'4:00 PM - Leaves his room to go stand outside by the dog pen.',
				'6:30 PM - Goes back into his house and stands in the entryway.',
				'8:00 PM - Goes to his room and stands by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Wednesday (No player has 6 hearts with Haley or Alex)': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'12:00 PM - Goes to Haley and Emily\'s house.',
				'4:30 PM - Leaves Haley and Emily\'s house to go stand by the dog pen.',
				'6:40 PM - Goes back into his house and stands in the entryway.',
				'8:00 PM - Goes to his room and stands by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Sunday (Alex\'s 14 heart event seen)': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'11:00 AM - Goes to the back room of the Stardrop Saloon.',
				'3:00 PM - Leaves to stand by the dog kennel.',
				'6:30 PM - Goes inside of his house and stands in the entryway.',
				'8:00 PM - Goes to stand inside of his room.',
				'10:00 PM - Goes to bed.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'7:50 AM - Leaves home to go to beach.',
				'12:00 PM - Leaves beach to go work at ice cream stand.',
				'5:00 PM - Heads home to lift weights in his room.',
				'7:00 PM - Stands in front entryway of house.',
				'8:00 PM - Goes to his room to stand by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Green Rain (Year 1)': [
				'All day - In the kitchen.'
			],
			'Summer 16': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'10:30 AM - Goes to clinic.',
				'11:00 AM - In clinic waiting room.',
				'1:40 PM - Clinic examination room.',
				'4:00 PM - Returns home for the night.'
			],
			'Rain': [
				'8:00 AM - Leaves his room and stands in the entryway.',
				'1:00 PM - Goes to his room to lift weights.',
				'4:00 PM - Leaves his house to go stand by the dog pen.',
				'6:30 PM - Goes back into his house and stands in the entryway.',
				'8:00 PM - Goes to his room and stands by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Wednesday (No player has 6 hearts with Haley or Alex)': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'12:00 PM - Goes to Haley and Emily\'s house.',
				'4:30 PM - Leaves Haley and Emily\'s house to go stand by the dog pen.',
				'6:40 PM - Goes back into his house and stands in the entryway.',
				'8:00 PM - Goes to his room and stands by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Sunday (Alex\'s 14 heart event seen)': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'11:00 AM - Goes to the back room of the Stardrop Saloon.',
				'3:00 PM - Leaves to stand by the dog kennel.',
				'6:30 PM - Goes inside of his house and stands in the entryway.',
				'8:00 PM - Goes to stand inside of his room.',
				'10:00 PM - Goes to bed.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'1:00 PM - Goes to his room to lift weights.',
				'4:00 PM - Leaves his house to go stand by the dog pen.',
				'6:30 PM - Goes back into his house and stands in the entryway.',
				'8:00 PM - Goes to his room and stands by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'8:00 AM - Leaves his room and stands in the entryway.',
				'1:00 PM - Goes to his room to lift weights.',
				'4:00 PM - Leaves his house to go stand by the dog pen.',
				'6:30 PM - Goes back into his house and stands in the entryway.',
				'8:00 PM - Goes to his room and stands by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Wednesday (No player has 6 hearts with Haley or Alex)': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'12:00 PM - Goes to Haley and Emily\'s house.',
				'4:30 PM - Leaves Haley and Emily\'s house to go stand by the dog pen.',
				'6:40 PM - Goes back into his house and stands in the entryway.',
				'8:00 PM - Goes to his room and stands by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Sunday (Alex\'s 14-heart event seen)': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'11:00 AM - Goes to the back room of the Stardrop Saloon.',
				'3:00 PM - Leaves to stand by the dog kennel.',
				'6:30 PM - Goes inside of his house and stands in the entryway.',
				'8:00 PM - Goes to stand inside of his room.',
				'10:00 PM - Goes to bed.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'8:00 AM - In his bedroom.',
				'9:00 AM - Leaves his house to go to the Spa.',
				'3:00 PM - Leaves the gym section of the Spa, heads home to his room.',
				'6:00 PM - Leaves his house to stand by the dog kennel.',
				'7:30 PM - Goes back inside his house and stands in the entryway.',
				'9:00 PM - Goes back to his bedroom and stands by his dresser.',
				'10:40 PM - Goes to bed.'
			],
			'Winter 17': [
				'9:00 AM - Leaves his house to go to the Spa.',
				'3:00 PM - Leaves the gym section of the Spa, heads to the beach to attend the Night Market.',
				'12:00 AM - Leaves the Night Market and returns home.'
			],
			'Wednesday (No player has 6 hearts with Haley or Alex)': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'12:00 PM - Goes to Haley and Emily\'s house.',
				'4:30 PM - Leaves Haley and Emily\'s house to go stand by the dog pen.',
				'6:40 PM - Goes back into his house and stands in the entryway.',
				'8:00 PM - Goes to his room and stands by his dresser.',
				'10:00 PM - Goes to bed.'
			],
			'Sunday (Alex\'s 14-heart event seen)': [
				'8:00 AM - Leaves his room to go outside and stand beneath nearby tree.',
				'11:00 AM - Goes to the back room of the Stardrop Saloon.',
				'3:00 PM - Leaves to stand by the dog kennel.',
				'6:30 PM - Goes inside of his house and stands in the entryway.',
				'8:00 PM - Goes to stand inside of his room.',
				'10:00 PM - Goes to bed.',
			]
		},
		'Marriage': {
			'Spring 15': [
				'8:00 AM - Leaves farm to attend the Desert Festival and stand by the chef stand.',
				'12:40 AM - Heads back to farm.'
			],
			'Green Rain (Year 1)': [
				'6:10 AM - Leaves home to walk to his grandparents\' house and stand in the kitchen.'
			],
			'Monday': [
				'8:30 AM - Leaves farm to visit his grandparents.',
				'6:00 PM - Heads back to farm.',
				'10:00 PM - Goes to bed.'
			],
			'Sunday (Alex\'s 14-heart event seen)': [
				'8:30 AM - Leaves farm to go stand beneath a tree by his grandparent\'s house.',
				'11:00 AM - Goes to the back room of the Stardrop Saloon.',
				'3:00 PM - Leaves to stand by the dog kennel.',
				'6:30 PM - Goes inside of his grandparent\'s house and stands in the entryway.',
				'8:00 PM - Goes to stand inside of his room.',
				'10:00 PM - Leaves for the Farmhouse.'
			]
		}
	},
	Sam: {
		'Spring': {
			'Regular Schedule': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'10:40 AM - Plays guitar inside his bedroom.',
				'1:40 PM - Leaves his bedroom, walks into town, and stands near Lewis\' house by the river.',
				'6:30 PM - Returns home from town.',
				'9:00 PM - Goes into his bedroom to go to bed.'
			],
			'Spring 15 (Bus Service Restored)': [
				'9:50 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'10:40 AM - Stands west of the pond near the cactus stand.',
				'12:50 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and takes bus back to the Valley.'
			],
			'Spring 9 and 23 (No player has 6 hearts with Penny or Sam)': [
				'6:00 AM - Sleeps in his bed at his home.',
				'9:00 AM - Wakes up and stands in his bedroom.',
				'11:00 AM - Walks into town, stands on the bridge near the Ice Cream Stand.',
				'4:00 PM - Walk to the pink tree in front of 2 Willow Lane, plays his handheld video game.',
				'7:00 PM - Returns home from town.',
				'9:30 PM - Goes into his bedroom to go to bed.'
			],
			'Spring 9 and 23': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'10:40 AM - Plays guitar inside his bedroom.',
				'1:40 PM - Leaves his bedroom, walks into town, and stands near Lewis\' house by the river.',
				'6:30 PM - Returns home from town.',
				'9:00 PM - Goes into his bedroom to go to bed.'
			],
			'Rain (Option 1)': [
				'10:00 AM - Wakes up for the day, stands in front of the dresser in his room.',
				'11:00 AM - Plays guitar inside his room.',
				'3:00 PM - Plays his handheld video game in the kitchen inside his house.',
				'5:00 PM - Returns to his bedroom. and stands in front of his dresser.',
				'6:30 PM - At his desk inside his bedroom.',
				'8:00 PM - Goes to go to bed.'
			],
			'Rain (Option 2)': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'11:00 AM - Moves around inside his home.',
				'2:00 PM - Leaves the his bedroom walks to The Stardrop Saloon. "Nothing like an ice cold Joja Cola on a sopping wet day, huh? Just kidding. Hehehe."',
				'7:40 PM - Leaves The Stardrop Saloon and returns to his bedroom to go to bed.'
			],
			'Monday and Wednesday': [
				'10:00 AM - Wakes up and stands in the middle of his bedroom.',
				'11:00 AM - Leaves his bedroom and walks to JojaMart (or Museum if Community Center is restored).',
				'12:50 PM - Arrives at JojaMart (or Museum if Community Center is restored) and starts work.',
				'4:00 PM - Finshes work at JojaMart (or Museum if Community Center is restored) and walks home.',
				'6:00 PM - Arrives in his bedroom and stands in front of his bookshelf.',
				'9:30 PM - Goes to bed.'
			],
			'Friday': [
				'10:00 AM - Wakes up and plays guitar inside his bedroom.',
				'11:00 AM - Leaves his bedroom and skateboards outside of his house.',
				'3:00 PM - Walks to the Stardrop Saloon.',
				'4:00 PM - Arrives at the Stardrop Saloon and plays pool near the arcade.',
				'9:20 PM - Leaves the Stardrop Saloon and walks home.',
				'10:20 PM - Arrives at home.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'11:00 AM - Plays guitar inside his bedroom.',
				'1:40 PM - Leaves his bedroom and walks to the beach by the firepit with his brother Vincent.',
				'7:00 PM - Returns home from the beach.',
				'9:00 PM - Goes into his bedroom to go to bed.'
			],
			'Green Rain (Year 1)': [
				'All day - In the living room.'
			],
			'Summer 9 and 23 (No player has 6 hearts with Penny or Sam)': [
				'6:00 AM - Sleeps in his bed at his home.',
				'9:00 AM - Wakes up and stands in his bedroom.',
				'11:00 AM - Walks into town, stands on the bridge near the Ice Cream Stand.',
				'4:00 PM - Walk to the pink tree in front of 2 Willow Lane, plays his handheld video game.',
				'7:00 PM - Returns home from town.',
				'9:30 PM - Goes into his bedroom to go to bed.'
			],
			'Summer 9 and 23': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'10:40 AM - Plays guitar inside his bedroom.',
				'1:40 PM - Leaves his bedroom, walks into town, and stands near Lewis\' house by the river.',
				'6:30 PM - Returns home from town.',
				'9:00 PM - Goes into his bedroom to go to bed.'
			],
			'Rain (Option 1)': [
				'10:00 AM - Wakes up for the day, stands in front of the dresser in his room.',
				'11:00 AM - Plays guitar inside his room.',
				'3:00 PM - Plays his handheld video game in the kitchen inside his house.',
				'5:00 PM - Returns to his bedroom. and stands in front of his dresser.',
				'6:30 PM - At his desk inside his bedroom.',
				'8:00 PM - Goes to go to bed.'
			],
			'Rain (Option 2)': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'11:00 AM - Moves around inside his home.',
				'2:00 PM - Leaves the his bedroom walks to The Stardrop Saloon. "Nothing like an ice cold Joja Cola on a sopping wet day, huh? Just kidding. Hehehe."',
				'7:40 PM - Leaves The Stardrop Saloon and returns to his bedroom to go to bed.'
			],
			'Monday and Wednesday': [
				'10:00 AM - Wakes up and stands in the middle of his bedroom.',
				'11:00 AM - Leaves his bedroom and walks to JojaMart (or Museum if Community Center is restored).',
				'12:50 PM - Arrives at JojaMart (or Museum if Community Center is restored) and starts work.',
				'4:00 PM - Finshes work at JojaMart (or Museum if Community Center is restored) and walks home.',
				'6:00 PM - Arrives in his bedroom and stands in front of his bookshelf.',
				'9:30 PM - Goes to bed.'
			],
			'Friday': [
				'10:00 AM - Wakes up and plays guitar inside his bedroom.',
				'11:00 AM - Leaves his bedroom and skateboards outside of his house.',
				'3:00 PM - Walks to the Stardrop Saloon.',
				'4:00 PM - Arrives at the Stardrop Saloon and plays pool near the arcade.',
				'9:20 PM - Leaves the Stardrop Saloon and walks home.',
				'10:20 PM - Arrives at home.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'10:40 AM - Plays guitar inside his bedroom.',
				'1:20 PM - Leaves his bedroom walks to The Forest southwest of Leah\'s Cottage.',
				'7:00 PM - Returns home from The Forest.',
				'9:00 PM - Goes into his bedroom to go to bed.'
			],
			'Fall 11': [
				'10:00 AM - Wakes up for the day inside his bedroom. "I gotta go visit Uncle Doctor today... Great."',
				'11:30 AM - Walks to the clinic for his annual checkup, plays his handheld video game in the waiting room.',
				'1:30 PM - Gets medical checkup at the clinic. "I\'m a healthy boy, doc. Can I go now? This is boring."',
				'4:00 PM - Leaves the clinic to walk into town. "I just got out of the doctor\'s office. Completely healthy and vigorous, just as I expected."',
				'9:00 PM - Returns to his bedroom to go to bed.'
			],
			'Fall 9 and 23 (No player has 6 hearts with Penny or Sam)': [
				'6:00 AM - Sleeps in his bed at his home.',
				'9:00 AM - Wakes up and stands in his bedroom.',
				'11:00 AM - Walks into town, stands on the bridge near the Ice Cream Stand.',
				'4:00 PM - Walk to the pink tree in front of 2 Willow Lane, plays his handheld video game.',
				'7:00 PM - Returns home from town.',
				'9:30 PM - Goes into his bedroom to go to bed.'
			],
			'Fall 9 and 23': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'10:40 AM - Plays guitar inside his bedroom.',
				'1:40 PM - Leaves his bedroom, walks into town, and stands near Lewis\' house by the river.',
				'6:30 PM - Returns home from town.',
				'9:00 PM - Goes into his bedroom to go to bed.'
			],
			'Rain (Option 1)': [
				'10:00 AM - Wakes up for the day, stands in front of the dresser in his room.',
				'11:00 AM - Plays guitar inside his room.',
				'3:00 PM - Plays his handheld video game in the kitchen inside his house.',
				'5:00 PM - Returns to his bedroom. and stands in front of his dresser.',
				'6:30 PM - At his desk inside his bedroom.',
				'8:00 PM - Goes to go to bed.'
			],
			'Rain (Option 2)': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'11:00 AM - Moves around inside his home.',
				'2:00 PM - Leaves the his bedroom walks to The Stardrop Saloon. "Nothing like an ice cold Joja Cola on a sopping wet day, huh? Just kidding. Hehehe."',
				'7:40 PM - Leaves The Stardrop Saloon and returns to his bedroom to go to bed.'
			],
			'Monday and Wednesday': [
				'10:00 AM - Wakes up and stands in the middle of his bedroom.',
				'11:00 AM - Leaves his bedroom and walks to JojaMart (or Museum if Community Center is restored).',
				'12:50 PM - Arrives at JojaMart (or Museum if Community Center is restored) and starts work.',
				'4:00 PM - Finshes work at JojaMart (or Museum if Community Center is restored) and walks home.',
				'6:00 PM - Arrives in his bedroom and stands in front of his bookshelf.',
				'9:30 PM - Goes to bed.'
			],
			'Friday': [
				'10:00 AM - Wakes up and plays guitar inside his bedroom.',
				'11:00 AM - Leaves his bedroom and skateboards outside of his house.',
				'3:00 PM - Walks to the Stardrop Saloon.',
				'4:00 PM - Arrives at the Stardrop Saloon and plays pool near the arcade.',
				'9:20 PM - Leaves the Stardrop Saloon and walks home.',
				'10:20 PM - Arrives at home.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'10:40 AM - Plays guitar inside his bedroom.',
				'1:20 PM - Leaves his bedroom and walks to the Stardrop Saloon.',
				'7:00 PM - Returns home from the Stardrop Saloon.',
				'9:00 PM - Goes into his bedroom to go to bed.'
			],
			'Winter 17': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'10:40 AM - Plays guitar inside his bedroom.',
				'5:00 PM - Attends the Night Market.',
				'12:00 AM - Goes into his bedroom to go to bed.'
			],
			'Winter 9 and 23 (No player has 6 hearts with Penny or Sam)': [
				'6:00 AM - Sleeps in his bed at his home.',
				'9:00 AM - Wakes up and stands in his bedroom.',
				'11:00 AM - Walks into town, stands on the bridge near the Ice Cream Stand.',
				'4:00 PM - Walk to the pink tree in front of 2 Willow Lane, plays his handheld video game.',
				'7:00 PM - Returns home from town.',
				'9:30 PM - Goes into his bedroom to go to bed.'
			],
			'Winter 9 and 23': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'10:40 AM - Plays guitar inside his bedroom.',
				'1:40 PM - Leaves his bedroom, walks into town, and stands near Lewis\' house by the river.',
				'6:30 PM - Returns home from town.',
				'9:00 PM - Goes into his bedroom to go to bed.'
			],
			'Rain (Option 1)': [
				'10:00 AM - Wakes up for the day, stands in front of the dresser in his room.',
				'11:00 AM - Plays guitar inside his room.',
				'3:00 PM - Plays his handheld video game in the kitchen inside his house.',
				'5:00 PM - Returns to his bedroom. and stands in front of his dresser.',
				'6:30 PM- At his desk inside his bedroom.',
				'8:00 PM - Goes to go to bed.'
			],
			'Rain (Option 2)': [
				'10:00 AM - Wakes up for the day, moves around his room.',
				'11:00 AM - Moves around inside his home.',
				'2:00 PM - Leaves the his bedroom walks to The Stardrop Saloon. "Nothing like an ice cold Joja Cola on a sopping wet day, huh? Just kidding. Hehehe."',
				'7:40 PM - Leaves The Stardrop Saloon and returns to his bedroom to go to bed.'
			],
			'Monday and Wednesday': [
				'10:00 AM - Wakes up and stands in the middle of his bedroom.',
				'11:00 AM - Leaves his bedroom and walks to JojaMart (or Museum if Community Center is restored).',
				'12:50 PM - Arrives at JojaMart (or Museum if Community Center is restored) and starts work.',
				'4:00 PM - Finshes work at JojaMart (or Museum if Community Center is restored) and walks home.',
				'6:00 PM - Arrives in his bedroom and stands in front of his bookshelf.',
				'9:30 PM - Goes to bed.'
			],
			'Friday': [
				'10:00 AM - Wakes up and plays guitar inside his bedroom.',
				'11:00 AM - Leaves his bedroom and skateboards outside of his house.',
				'3:00 PM - Walks to the Stardrop Saloon.',
				'4:00 PM - Arrives at the Stardrop Saloon and plays pool near the arcade.',
				'9:20 PM - Leaves the Stardrop Saloon and walks home.',
				'10:20 PM - Arrives at home.'
			]
		},
		'Marriage': {
			'Green Rain (Year 1)': [
				'6:10 AM - Walks to his parents\' living room.'
			],
			'Spring 15 (Bus Service Restored)': [
				'10:20 AM - Walks to the Desert Festival and stands west of the pond near the cactus stand.',
				'1:00 AM - Returns home.'
			],
			'Monday': [
				'6:00 AM - At home.',
				'8:00 AM - Leaves home and heads for Pelican Town.',
				'9:30 AM - Arrives at 1 Willow Lane and stands in the kitchen.',
				'11:00 AM - Moves to living room.',
				'3:00 PM - Leaves 1 Willow Lane to return home.',
				'4:00 PM - Arrives at the farmhouse.',
				'10:00 PM - Goes to bed.'
			],
			'Friday': [
				'6:00 AM - At home.',
				'8:00 AM - Leaves home and heads for Pelican Town.',
				'9:30 AM - Arrives at 1 Willow Lane and stands in the kitchen.',
				'11:00 AM - Leaves house.',
				'11:50 AM - Skateboarding south of the Stardrop Saloon, by the benches.',
				'3:00 PM - Heads into the Stardrop Saloon.',
				'3:30 PM - Playing pool in the Stardrop Saloon.',
				'9:00 PM - Leaves the Saloon to return home.',
				'11:00 PM - Arrives at the farmhouse.'
			]
		}
	},
	Demetrius: {
		'Spring': {
			'Regular Schedule': [
				'7:50 AM - At home, standing in front of the sink in his kitchen.',
				'11:00 AM - Taking notes at the microscope.',
				'2:30 PM - Stands outside, next to the potted plant next to his garage.',
				'3:30 PM - Stands at the cliff southeast of his house.',
				'7:00 PM - Goes inside and stands in front of the fridge in his kitchen.',
				'8:40 PM - Stands in front of the stove in his kitchen.',
				'9:00 PM - Stands next to the bookshelf in his bedroom.',
				'10:30 PM - Goes to bed.'
			],
			'Spring 16 (Bus Service Restored)': [
				'11:30 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:40 AM - Stands by the chef stand.',
				'1:20 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Rain': [
				'7:50 AM - In his Home, reading a newspaper in the laboratory.',
				'11:00 AM - Taking notes at the microscope.',
				'3:00 PM - Behind the counter of the Carpenter\'s Shop in the entryway.',
				'3:40 PM - Moves back to the microscope in the laboratory.',
				'6:00 PM - Stands in front of the fridge in his kitchen.',
				'7:20 PM - Stands in front of the stove in his kitchen.',
				'8:00 PM - Stands next to the bookshelf in his bedroom.',
				'10:00 PM - Goes to bed.'
			],
			'Friday': [
				'7:50 AM - At home, taking notes at the microscope.',
				'4:00 PM - Heads to The Saloon.',
				'5:50 PM - In The Saloon standing next to Robin.',
				'7:20 PM - Dances with Robin in the Saloon.',
				'9:00 PM - Heads home from the Saloon to sleep.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'7:50 AM - At home, standing in front of the sink in his kitchen.',
				'11:00 AM - Goes to the fountain west of the Community Center.',
				'7:00 PM - Heads home to stand in front of the fridge in his kitchen.',
				'8:40 PM - Stands in front of the stove in his kitchen.',
				'9:00 PM - Stands next to the bookshelf in his bedroom.',
				'10:30 PM - Goes to bed.'
			],
			'Green Year 1': [
				'All day - Collects samples at a bush near his house.'
			],
			'Summer 25': [
				'8:40 AM - Leaves home for the Clinic.',
				'1:30 PM - Moves to the left examination room in the Clinic.',
				'4:00 PM - Leaves the Clinic to go home and stand next to the bookcase in his bedroom.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'7:50 AM - In his Home, reading a newspaper in the laboratory.',
				'11:00 AM - Taking notes at the microscope.',
				'3:00 PM - Behind the counter of the Carpenter\'s Shop in the entryway.',
				'3:40 PM - Moves back to the microscope in the laboratory.',
				'6:00 PM - Stands in front of the fridge in his kitchen.',
				'7:20 PM - Stands in front of the stove in his kitchen.',
				'8:00 PM - Stands next to the bookshelf in his bedroom.',
				'10:00 PM - Goes to bed.'
			],
			'Friday': [
				'7:50 AM - At home, taking notes at the microscope.',
				'4:00 PM - Heads to The Saloon.',
				'5:50 PM - In The Saloon standing next to Robin.',
				'7:20 PM - Dances with Robin in the Saloon.',
				'9:00 PM - Heads home from the Saloon to sleep.',
				'10:40 PM - Arrives home with Robin.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'7:50 AM - At home, standing in front of the sink in his kitchen.',
				'11:00 AM - Heads outside to take notes by the northern end of the lake.',
				'7:00 PM - Heads home to stand in front of the fridge in his kitchen.',
				'8:40 PM - Stands in front of the stove in his kitchen.',
				'9:00 PM - Stands next to the bookshelf in his bedroom.',
				'10:30 PM - Goes to bed.'
			],
			'Rain': [
				'7:50 AM - In his Home, reading a newspaper in the laboratory.',
				'11:00 AM - Taking notes at the microscope.',
				'3:00 PM - Behind the counter of the Carpenter\'s Shop in the entryway.',
				'3:40 PM - Moves back to the microscope in the laboratory.',
				'6:00 PM - Stands in front of the fridge in his kitchen.',
				'7:20 PM - Stands in front of the stove in his kitchen.',
				'8:00 PM - Stands next to the bookshelf in his bedroom.',
				'10:00 PM - Goes to bed.'
			],
			'Friday': [
				'7:50 AM - At home, taking notes at the microscope.',
				'4:00 PM - Heads to The Saloon.',
				'5:50 PM - In The Saloon standing next to Robin.',
				'7:20 PM - Dances with Robin in the Saloon.',
				'9:00 PM - Heads home from the Saloon to sleep.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'7:50 AM - In his Home, reading a newspaper in the laboratory.',
				'11:00 AM - Taking notes at the microscope.',
				'3:00 PM - Behind the counter of the Carpenter\'s Shop in the entryway.',
				'3:40 PM - Moves back to the microscope in the laboratory.',
				'6:00 PM - Stands in front of the fridge in his kitchen.',
				'7:20 PM - Stands in front of the stove in his kitchen.',
				'8:00 PM - Stands next to the bookshelf in his bedroom.',
				'10:00 PM - Goes to bed.'
			],
			'Winter 16': [
				'7:50 AM - In his Home, reading a newspaper in the laboratory.',
				'11:00 AM - Taking notes at the microscope.',
				'3:00 PM - Behind the counter of the Carpenter\'s Shop in the entryway.',
				'3:40 PM - Leaves home to attend the Night Market.',
				'11:30 PM - Leaves Night Market to return home and sleep.'
			],
			'Rain': [
				'7:50 AM - In his Home, reading a newspaper in the laboratory.',
				'11:00 AM - Taking notes at the microscope.',
				'3:00 PM - Behind the counter of the Carpenter\'s Shop in the entryway.',
				'3:40 PM - Moves back to the microscope in the laboratory.',
				'6:00 PM - Stands in front of the fridge in his kitchen.',
				'7:20 PM - Stands in front of the stove in his kitchen.',
				'8:00 PM - Stands next to the bookshelf in his bedroom.',
				'10:00 PM - Goes to bed.'
			],
			'Friday': [
				'7:50 AM - At home, taking notes at the microscope.',
				'4:00 PM - Heads to The Saloon.',
				'5:50 PM - In The Saloon standing next to Robin.',
				'7:20 PM - Dances with Robin in the Saloon.',
				'9:00 PM - Heads home from the Saloon to sleep.'
			]
		}
	},
	Dwarf: {
		'All Seasons': {
			'Regular Schedule': [
				'The Dwarf lives just to the east of the entrance to the mines and does not move from there.'
			]
		}
	},
	Willy: {
		'All Seasons': {
			'Regular Season': [
				'6:10 AM - Wakes up for the day, goes fishing outside his fish shop.',
				'8:50 AM - Goes back inside fish shop from the beach.',
				'9:00 AM - Starts working at the counter in the fish shop, goods are available for sale.',
				'5:00 PM - Leaves the fish shop, goes out to fish on the beach.',
				'10:00 PM - Leaves the beach to head home for the night.'
			],
			'Spring 9': [
				'6:10 AM - Wakes up for the day, goes fishing outside his fish shop.',
				'8:50 AM - Goes back inside fish shop from the beach.',
				'9:00 AM - Starts working at the counter in the fish shop, goods are available for sale.',
				'10:10 AM - Leaves the fish shop, walks over to the Harvey\'s Clinic.',
				'1:30 PM - Continues checkup at the Harvey\'s Clinic.',
				'5:00 PM - Leaves the Harvey\'s Clinic, walks over to the saloon.',
				'11:20 PM - Leaves the saloon to head home for the night.'
			],
			'Spring 15, 16 and 17 (Bus Service Restored)': [
				'9:00 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'9:10 AM - Stands at his fishing challenge.'
			],
			'Summer 20 and 21': [
				'6:10 AM - Wakes up for the day, goes fishing outside his fish shop.',
				'8:50 AM - Returns to the fish shop.',
				'10:00 AM - Leaves the beach, goes to Cindersap Forest to fish in the Trout Derby in the river to the southwest of Leah\'s Cottage.',
				'11:20 PM - Leaves Cindersap Forest to head home for the night.'
			],
			'Winter 12 and 13': [
				'6:10 AM - Wakes up for the day, goes fishing outside his fish shop.',
				'8:50 AM - Returns to the fish shop.',
				'12:00 PM - Heads out to the beach to fish in the SquidFest.',
				'11:20 PM - Leaves the beach to head home for the night.'
			],
			'Winter 15, 16 and 17': [
				'4:30 PM - At The Stardrop Saloon.',
				'12:20 AM - Returns to the fish shop.'
			],
			'Green Rain (Year 1)': [
				'All day - In The Stardrop Saloon.'
			],
			'Rain': [
				'6:10 AM - Wakes up for the day, goes fishing outside his fish shop.',
				'8:50 AM - Goes back inside fish shop from the beach.',
				'9:00 AM - Starts working at the counter in the fish shop, goods are available for sale.',
				'5:00 PM - Leaves the fish shop, walks over to the saloon.',
				'11:20 PM - Leaves the saloon to head home for the night.'
			],
			'Friday': [
				'6:10 AM - Wakes up for the day, goes fishing outside his fish shop.',
				'8:50 AM - Goes back inside fish shop from the beach.',
				'9:00 AM - Starts working at the counter in the fish shop, goods are available for sale.',
				'5:00 PM - Leaves the fish shop, walks over to the saloon.',
				'11:20 PM - Leaves the saloon to head home for the night.'
			],
			'Saturday': [
				'6:10 AM - Wakes up for the day, walks through town to go fishing at the river outside Leah\'s cottage.',
				'2:00 PM - Leaves the river and heads into Pelican Town for more river fishing.',
				'7:00 PM - Walks over to the saloon.',
				'11:00 PM - Leaves the saloon to head home for the night.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'6:10 AM - Wakes up for the day, goes fishing outside his fish shop.',
				'8:50 AM - Goes back inside fish shop from the beach.',
				'9:00 AM - Starts working at the counter in the fish shop, goods are available for sale.',
				'5:00 PM - Leaves the fish shop, walks over to the saloon.',
				'11:20 PM - Leaves the saloon to head home for the night.'
			],
		}
	},
	Leo: {
		'All Seasons (Fewer than 6 hearts with the player)': {
			'Regular Schedule': [
				'9:00 AM - Inside his hut.',
				'10:30 AM - Stands outside the entrance to his hut.',
				'12:00 PM - Walks to the docks at Island South, stands at the northwest corner, next to the parrot perch.',
				'3:00 PM - Walks to Island North, stands at the northwest corner of the map, west of the volcano entrance.',
				'8:00 PM - Returns home and goes to bed.'
			],
			'Rain': [
				'9:00 AM - Inside his hut.',
				'11:00 AM - Stands outside the entrance to his hut.',
				'2:00 PM - Returns inside his hut.',
				'9:00 PM - Goes to bed.'
			],
			'Tuesday': [
				'9:00 AM - Inside his hut.',
				'10:30 AM - Walks to the dock on Island South, stands near the entrance to Island Southeast.',
				'1:30 PM - Walks to the jungle outside his hut (Island East), stands near the bushes at the southwest corner.',
				'5:00 PM - Walks to Island North, stands to the right of the Island Trader.',
				'8:00 PM - Goes home to bed.'
			],
			'Sunday': [
				'9:00 AM - Inside his hut.',
				'9:30 AM - Walks to the Gem Bird Shrine, through the hidden passage in the east of the Jungle.',
				'2:00 PM - Stands outside the entrance to his hut.',
				'5:00 PM - Enters his hut.',
				'9:00 PM - Goes to bed.'
			]
		},
		'Spring (6 hearts or more with the player)': {
			'Spring 16 (Bus Service Restored)': [
				'9:00 AM - Leaves his treehouse to head to the desert festival and stand north-east of the cactus stand.',
				'12:00 AM - Returns home.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Spring 9 and 23': [
				'6:30 AM - In his treehouse.',
				'7:00 AM - Stands to the east of his treehouse.',
				'9:30 AM - Walks to the west of the mountain lake.',
				'2:00 PM - Returns to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'7:00 AM - In his treehouse.',
				'10:00 AM - Visits Linus\' tent.',
				'3:00 PM - Stands to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Monday': [
				'6:00 AM - In his hut on Ginger Island.',
				'9:30 AM - Next to the parrot perch in Island South.',
				'2:00 PM - Stands outside his hut.',
				'5:00 PM - Enters his hut.',
				'9:00 PM - Goes to bed.'
			],
			'Tuesday and Wednesday': [
				'6:00 AM - In his treehouse.',
				'9:00 AM - Walks to the museum library.',
				'2:00 PM - South of the museum.',
				'4:20 PM - Leaves the museum to stands to the east of his treehouse.',
				'8:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Thursday and Friday': [
				'6:30 AM - In his treehouse.',
				'7:00 AM - Stands to the east of his treehouse.',
				'9:30 AM - Walks to the west of the mountain lake.',
				'2:00 PM - Returns to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Saturday': [
				'9:40 AM - Leaves his treehouse to stand next to Haley and Emily\'s house.',
				'12:00 PM - Plays on the playground.',
				'5:00 PM - Stands to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Sunday': [
				'6:10 AM - Walks to his hut on Ginger Island.',
				'10:30 AM - In Island South, near the entrance to Island Southeast.',
				'1:30 PM - Outside his hut.',
				'5:00 PM - To the east of the Island Trader.',
				'8:00 PM - Goes to bed in his hut.'
			]
		},
		'Summer (6 hearts or more with the player)': {
			'Summer 9 and 23': [
				'6:30 AM - In his treehouse.',
				'7:00 AM - Stands to the east of his treehouse.',
				'9:30 AM - Walks to the west of the mountain lake.',
				'2:00 PM - Returns to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'7:00 AM - In his treehouse.',
				'10:00 AM - Visits Linus\' tent.',
				'3:00 PM - Stands to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Monday': [
				'6:00 AM - In his hut on Ginger Island.',
				'9:30 AM - Next to the parrot perch in Island South.',
				'2:00 PM - Stands outside his hut.',
				'5:00 PM - Enters his hut.',
				'9:00 PM - Goes to bed.'
			],
			'Tuesday and Wednesday': [
				'6:00 AM - In his treehouse.',
				'9:00 AM - Walks to the museum library.',
				'2:00 PM - South of the museum.',
				'4:20 PM - Leaves the museum to stands to the east of his treehouse.',
				'8:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Thursday and Friday': [
				'6:30 AM - Stands outside of his treehouse.',
				'9:40 AM - Stands on the west edge of the mountain lake.',
				'1:00 PM - Walks around the tree to the southwest of the mountain lake.',
				'4:00 PM - Stands to the east of his treehouse.',
				'8:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Saturday': [
				'9:40 AM - Leaves his treehouse to stand next to Haley and Emily\'s house.',
				'12:00 PM - Plays on the playground.',
				'5:00 PM - Stands to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Sunday': [
				'6:10 AM - In his hut on Ginger Island.',
				'10:30 AM - In Island South, near the entrance to Island Southeast.',
				'1:30 PM - Outside his hut.',
				'5:00 PM - To the east of the Island Trader.',
				'8:00 PM - Goes to bed in his hut.'
			]
		},
		'Fall (6 hearts or more with the player)': {
			'Fall 9 and 23': [
				'6:30 AM - In his treehouse.',
				'7:00 AM - Stands to the east of his treehouse.',
				'9:30 AM - Walks to the west of the mountain lake.',
				'2:00 PM - Returns to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'7:00 AM - In his treehouse.',
				'10:00 AM - Visits Linus\' tent.',
				'3:00 PM - Stands to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Monday': [
				'6:00 AM - In his hut on Ginger Island.',
				'9:30 AM - Next to the parrot perch in Island South.',
				'2:00 PM - Stands outside his hut.',
				'5:00 PM - Enters his hut.',
				'9:00 PM - Goes to bed.'
			],
			'Tuesday and Wednesday': [
				'6:00 AM - In his treehouse.',
				'9:00 AM - Walks to the museum library.',
				'2:00 PM - South of the museum.',
				'4:20 PM - Leaves the museum to stands to the east of his treehouse.',
				'8:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Thursday and Friday': [
				'7:00 AM - In his treehouse.',
				'7:40 AM - Stands to the east of his treehouse.',
				'9:00 AM - Stands south of the community center.',
				'2:00 PM - Stands to the west of the mountain lake.',
				'8:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Saturday': [
				'9:40 AM - Leaves his treehouse to stand next to Haley and Emily\'s house.',
				'12:00 PM - Plays on the playground.',
				'5:00 PM - Stands to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Sunday': [
				'6:10 AM - Walks to his hut on Ginger Island.',
				'10:30 AM - In Island South, near the entrance to Island Southeast.',
				'1:30 PM - Outside his hut.',
				'5:00 PM - To the east of the Island Trader.',
				'8:00 PM - Goes to bed in his hut.'
			]
		},
		'Winter (6 hearts or more with the player)': {
			'Winter 15': [
				'11:00 AM - Walks to Linus\' tent and stands outside the entrance.',
				'4:00 PM - Walks to beach to attend Night Market.',
				'11:30 PM - Goes home to bed.'
			],
			'Winter 9 and 23': [
				'6:30 AM - In his treehouse.',
				'7:00 AM - Stands to the east of his treehouse.',
				'9:30 AM - Walks to the west of the mountain lake.',
				'2:00 PM - Returns to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'7:00 AM - In his treehouse.',
				'10:00 AM - Visits Linus\' tent.',
				'3:00 PM - Stands to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Monday:': [
				'6:00 AM - In his hut on Ginger Island.',
				'9:30 AM - Next to the parrot perch in Island South.',
				'2:00 PM - Stands outside his hut.',
				'5:00 PM - Enters his hut.',
				'9:00 PM - Goes to bed.'
			],
			'Tuesday and Wednesday': [
				'6:00 AM - In his treehouse.',
				'9:00 AM - Walks to the museum library.',
				'2:00 PM - South of the museum.',
				'4:20 PM - Leaves the museum to stands to the east of his treehouse.',
				'8:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Thursday and Friday': [
				'11:00 AM - Stands to the east of his treehouse.',
				'2:00 PM - Reads books in the museum library.',
				'8:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Saturday': [
				'9:40 AM - Leaves his treehouse to stand next to Haley and Emily\'s house.',
				'12:00 PM - Plays on the playground.',
				'5:00 PM - Stands to the east of his treehouse.',
				'7:00 PM - Enters his treehouse.',
				'10:00 PM - Goes to bed.'
			],
			'Sunday': [
				'6:10 AM - Walks to his hut on Ginger Island.',
				'10:30 AM - In Island South, near the entrance to Island Southeast.',
				'1:30 PM - Outside his hut.',
				'5:00 PM - To the east of the Island Trader.',
				'8:00 PM - Goes to bed in his hut.'
			]
		}
	},
	Penny: {
		'Spring': {
			'Spring 16 (Bus Service Restored)': [
				'9:30 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'10:00 AM - Stands near the Calico warp statue.',
				'1:00 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and takes bus back to the Valley.'
			],
			'Spring 9 and 23 (No player has 6 hearts with Penny or Sam)': [
				'6:00 AM - Sleeps in her bed in the trailer.',
				'9:00 AM - Wakes up and stands in her bedroom.',
				'11:00 AM - Walks to town and sits on the bridge near the Ice Cream Stand.',
				'4:00 PM - Returns from town to the trailer and does some dishes.',
				'6:40 PM - Goes to bed in her room in the trailer for the evening.'
			],
			'Spring 9 and 23': [
				'6:00 AM - Sleeps in her bed in the trailer.',
				'8:00 AM - Leaves her trailer and goes outside to read near the town graveyard.',
				'12:30 PM - Returns to the trailer to wash dishes.',
				'4:00 PM - Leaves the trailer again to go outside the saloon where she sits on a bench with Maru.',
				'6:40 PM - Returns to her trailer for the evening.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In her bedroom in the Trailer.',
				'11:00 AM - Moves to the kitchen.',
				'1:00 PM - Does some dishes.',
				'3:00 PM - Sits on the couch, probably watching TV.',
				'6:00 PM - Returns to her bedroom, reading by the bookshelf.',
				'9:00 PM - Goes to bed for the evening.'
			],
			'Rain (Option 2)': [
				'8:10 AM - Leaves the trailer and walks to the Museum to sit outside.',
				'12:00 PM - Goes inside the Museum to look at the bookshelves.',
				'4:00 PM - Leaves the Museum and returns to the trailer to watch some television.',
				'7:00 PM - Moves over to the sink in the trailer to do some dishes.',
				'9:00 PM - Goes to bed for the evening.'
			],
			'Monday, Thursday and Sunday': [
				'8:00 AM - Leaves her trailer and goes outside to read near the Graveyard.',
				'12:30 PM - Returns to the trailer to wash dishes.',
				'4:00 PM - Leaves the trailer again to go outside the saloon where she sits on a bench with Maru.',
				'6:40 PM - Returns to her trailer for the evening.'
			],
			'Tuesday, Wednesday and Friday': [
				'9:00 AM - Leaves her trailer and goes to the museum/library to tutor Jas and Vincent.',
				'2:00 PM - Leaves the library and stands near the Ice Cream Stand watching over Jas and Vincent.',
				'4:20 PM - Walks Vincent to 1 Willow Lane and says goodbye.',
				'5:50 PM - Walks Jas to Marnie\'s Ranch and says goodbye.',
				'6:30 PM - Returns to her trailer for the evening.'
			],
			'Saturday': [
				'9:00 AM - In her room.',
				'10:00 AM - Leaves her trailer to meet up with Jas and Vincent near the town graveyard.',
				'12:00 PM - Walks Jas and Vincent to the playground north of town square and watches them play.',
				'5:00 PM - Walks Jas and Vincent back to town and drops them off in front of Emily and Haley\'s house.',
				'6:30 PM - Returns to her trailer for the evening.'
			]
		},
		'Summer': {
			'Green Rain (Year 1)': [
				'All day - In The Stardrop Saloon.'
			],
			'Summer 9 and 23 (No player has 6 hearts with Penny or Sam)': [
				'6:00 AM - Sleeps in her bed in the trailer.',
				'9:00 AM - Wakes up and stands in her bedroom.',
				'11:00 AM - Walks to town and sits on the bridge near the Ice Cream Stand.',
				'4:00 PM - Returns from town to the trailer and does some dishes.',
				'6:40 PM - Goes to bed in her room in the trailer for the evening.'
			],
			'Summer 9 and 23': [
				'6:00 AM - Sleeps in her bed in the trailer.',
				'8:00 AM - Leaves her trailer and goes outside to read near the town graveyard.',
				'12:30 PM - Returns to the trailer to wash dishes.',
				'4:00 PM - Leaves the trailer again to go outside the saloon where she sits on a bench with Maru.',
				'6:40 PM - Returns to her trailer for the evening.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In her bedroom in the Trailer.',
				'11:00 AM - Moves to the kitchen.',
				'1:00 PM - Does some dishes.',
				'3:00 PM - Sits on the couch, probably watching TV.',
				'6:00 PM - Returns to her bedroom, reading by the bookshelf.',
				'9:00 PM - Goes to bed for the evening.'
			],
			'Rain (Option 2)': [
				'8:10 AM - Leaves the trailer and walks to the Museum to sit outside.',
				'12:00 PM - Goes inside the Museum to look at the bookshelves.',
				'4:00 PM - Leaves the Museum and returns to the trailer to watch some television.',
				'7:00 PM - Moves over to the sink in the trailer to do some dishes.',
				'9:00 PM - Goes to bed for the evening.'
			],
			'Sunday': [
				'8:00 AM - Leaves her trailer and walks to the river above JojaMart.',
				'1:00 PM - Goes to the garden beside the Community Center and sits inside.',
				'6:00 PM - Leaves Community Center Garden and returns to the trailer to do dishes.',
				'9:00 PM - Goes to bed in her room in the trailer for the evening.'
			],
			'Monday and Thursday': [
				'8:00 AM - Wakes up and walks through town to stand by the river behind JojaMart.',
				'9:30 AM - Watching the river behind JojaMart.',
				'1:00 PM - Walks back through town and to the Community Center.',
				'2:30 PM - Sitting on a bench to the right of the Community Center.',
				'6:00 PM - Leaves town and returns to the trailer.',
				'7:00 PM - Arrives at the trailer for the evening.'
			],
			'Tuesday, Wednesday and Friday': [
				'9:00 AM - Leaves the trailer and walks to the Museum.',
				'10:00 AM - In the Museum.',
				'2:00 PM - Pelican Town, outside of the Museum near bridge.',
				'4:00 PM - Outside 2 Willow Lane, walking Vincent and Jas home.',
				'6:30 PM - Leaves Marnie\'s Ranch and returns to home for the evening.',
				'8:00 PM - Arrives at the trailer for the evening.'
			],
			'Saturday': [
				'10:00 AM - Leaves her trailer and goes outside near the town graveyard.',
				'11:00 AM - With the kids near the town graveyard.',
				'12:00 PM - Walk kids to the playground, west of the Community Center.',
				'1:00 PM - At the playground, play with kids.',
				'5:00 PM - Walks Jas and Vincent to Emily\'s house.',
				'6:00 PM - Beside Emily\'s house, talking with Jas and Vincent.',
				'8:00 PM - Goes to the trailer.',
				'9:00 PM - Arrives at the trailer for the evening.'
			]
		},
		'Fall': {
			'Fall 9 and 23 (No player has 6 hearts with Penny or Sam)': [
				'6:00 AM - Sleeps in her bed in the trailer.',
				'9:00 AM - Wakes up and stands in her bedroom.',
				'11:00 AM - Walks to town and sits on the bridge near the Ice Cream Stand.',
				'4:00 PM - Returns from town to the trailer and does some dishes.',
				'6:40 PM - Goes to bed in her room in the trailer for the evening.'
			],
			'Fall 9 and 23': [
				'6:00 AM - Sleeps in her bed in the trailer.',
				'8:00 AM - Leaves her trailer and goes outside to read near the town graveyard.',
				'12:30 PM - Returns to the trailer to wash dishes.',
				'4:00 PM - Leaves the trailer again to go outside the saloon where she sits on a bench with Maru.',
				'6:40 PM - Returns to her trailer for the evening.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In her bedroom in the Trailer.',
				'11:00 AM - Moves to the kitchen.',
				'1:00 PM - Does some dishes.',
				'3:00 PM - Sits on the couch, probably watching TV.',
				'6:00 PM - Returns to her bedroom, reading by the bookshelf.',
				'9:00 PM - Goes to bed for the evening.'
			],
			'Rain (Option 2)': [
				'8:10 AM - Leaves the trailer and walks to the Museum to sit outside.',
				'12:00 PM - Goes inside the Museum to look at the bookshelves.',
				'4:00 PM - Leaves the Museum and returns to the trailer to watch some television.',
				'7:00 PM - Moves over to the sink in the trailer to do some dishes.',
				'9:00 PM - Goes to bed for the evening.'
			],
			'Monday, Thursday and Sunday': [
				'8:00 AM - Leaves her trailer and goes outside to read near the Graveyard.',
				'12:30 PM - Returns to the trailer to wash dishes.',
				'4:00 PM - Leaves the trailer again to go outside the saloon where she sits on a bench with Maru.',
				'6:40 PM - Returns to her trailer for the evening.'
			],
			'Tuesday, Wednesday and Friday': [
				'9:00 AM - Leaves her trailer and goes to the museum/library to tutor Jas and Vincent.',
				'2:00 PM - Leaves the library and stands near the Ice Cream Stand watching over Jas and Vincent.',
				'4:20 PM - Walks Vincent to 1 Willow Lane and says goodbye.',
				'5:50 PM - Walks Jas to Marnie\'s Ranch and says goodbye.',
				'6:30 PM - Returns to her trailer for the evening.'
			],
			'Saturday': [
				'9:00 AM - In her room.',
				'10:00 AM - Leaves her trailer to meet up with Jas and Vincent near the town graveyard.',
				'12:00 PM - Walks Jas and Vincent to the playground north of town square and watches them play.',
				'5:00 PM - Walks Jas and Vincent back to town and drops them off in front of Emily and Haley\'s house.',
				'6:30 PM - Returns to her trailer for the evening.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'9:00 AM - Wakes up and moves around her trailer.',
				'10:30 AM - Leaves her trailer and walks to the tree west of the graveyard to read.',
				'6:00 PM - Leaves the Museum and returns to the trailer to do dishes.',
				'9:00 PM - Goes to bed in her room in the trailer for the evening.'
			],
			'Winter 4': [
				'9:00 AM - Wakes up and moves around her trailer.',
				'11:30 AM - Walks from her trailer to Harvey\'s Clinic for her annual checkup.',
				'1:30 PM - Continues her checkup at the clinic.',
				'4:00 PM - Leaves the clinic and goes to sit by the bridge west from JojaMart.',
				'7:00 PM - Leaves town and returns to the trailer to do dishes.',
				'9:00 PM - Goes to bed in her room in the trailer for the evening.'
			],
			'Winter 15': [
				'9:00 AM - Trailer is unlocked. Penny is in her bedroom.',
				'11:00 AM - Moves to the kitchen.',
				'1:00 PM - Does some dishes.',
				'3:00 PM - Sits on the couch, probably watching TV.',
				'4:00 PM - Attends the Night Market.',
				'11:50 PM - Goes to bed for the evening.'
			],
			'Winter 9 and 23 (No player has 6 hearts with Penny or Sam)': [
				'6:00 AM - Sleeps in her bed in the trailer.',
				'9:00 AM - Wakes up and stands in her bedroom.',
				'11:00 AM - Walks to town and sits on the bridge near the Ice Cream Stand.',
				'4:00 PM - Returns from town to the trailer and does some dishes.',
				'6:40 PM - Goes to bed in her room in the trailer for the evening.'
			],
			'Winter 9 and 23': [
				'6:00 AM - Sleeps in her bed in the trailer.',
				'8:00 AM - Leaves her trailer and goes outside to read near the town graveyard.',
				'12:30 PM - Returns to the trailer to wash dishes.',
				'4:00 PM - Leaves the trailer again to go outside the saloon where she sits on a bench with Maru.',
				'6:40 PM - Returns to her trailer for the evening.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In her bedroom in the Trailer.',
				'11:00 AM - Moves to the kitchen.',
				'1:00 PM - Does some dishes.',
				'3:00 PM - Sits on the couch, probably watching TV.',
				'6:00 PM - Returns to her bedroom, reading by the bookshelf.',
				'9:00 PM - Goes to bed for the evening.'
			],
			'Rain (Option 2)': [
				'8:10 AM - Leaves the trailer and walks to the Museum to sit outside.',
				'12:00 PM - Goes inside the Museum to look at the bookshelves.',
				'4:00 PM - Leaves the Museum and returns to the trailer to watch some television.',
				'7:00 PM - Moves over to the sink in the trailer to do some dishes.',
				'9:00 PM - Goes to bed for the evening.'
			],
			'Tuesday, Wednesday and Friday': [
				'9:00 AM - Leaves her trailer and goes to the museum/library to tutor Jas and Vincent.',
				'2:00 PM - Leaves the library and stands near the Ice Cream Stand watching over Jas and Vincent.',
				'4:20 PM - Walks Vincent to 1 Willow Lane and says goodbye.',
				'5:50 PM - Walks Jas to Marnie\'s Ranch and says goodbye.',
				'6:30 PM - Returns to her trailer for the evening.'
			],
			'Saturday': [
				'9:00 AM - In her room.',
				'10:00 AM - Leaves her trailer to meet up with Jas and Vincent near the town graveyard.',
				'12:00 PM - Walks Jas and Vincent to the playground north of town square and watches them play.',
				'5:00 PM - Walks Jas and Vincent back to town and drops them off in front of Emily and Haley\'s house.',
				'6:30 PM - Returns to her trailer for the evening.'
			],
			'Community Center Restored': [
				'9:00 AM - Wakes up and moves around her trailer.',
				'10:30 AM - Leaves her trailer and walks to the Community Center to read.',
				'3:00 PM - Continues moving around the Community Center.',
				'6:00 PM - Leaves the Community Center and returns to the trailer to do dishes.',
				'9:00 PM - Goes to bed in her room in the trailer for the evening.'
			]
		},
		'Marriage': {
			'Spring 16 (Bus Service Restored)': [
				'9:30 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'10:00 AM - Stands near the Calico warp statue.',
				'1:00 AM - Boards the bus back to the Valley.'
			],
			'Monday': [
				'8:30 AM - Leaves the farmhouse and heads to Pierre\'s General Store.',
				'11:30 AM - Leaves Pierre\'s. In town, reading.',
				'4:00 PM - Sitting in town.',
				'6:10 PM - Leaves town to return home to the farm.',
				'10:00 PM - Goes to bed'
			],
			'Tuesday, Wednesday and Friday': [
				'8:30 AM - Leaves the the farm and walks to the Museum.',
				'2:00 PM - Leaves the Museum and walks with Vincent and Jas to town.',
				'4:20 PM - In front of Haley and Emily\'s house while walking Vincent and Jas home.',
				'5:50 PM - Walks Jas home to Marnie\'s Ranch in the woods west of town.',
				'6:30 PM - Leaves Marnie\'s Ranch and returns to home for the evening.',
				'8:10 PM - Arrives back at the Farmhouse.',
				'10:00 PM - Goes to bed.'
			]
		}
	},
	Elliot: {
		'Spring': {
			'Regular Schedule': [
				'8:00 AM - At home.',
				'12:00 PM - Leaves his cabin to stand on the beach south of his house.',
				'1:30 PM - Leaves the beach and returns to his cabin.',
				'3:00 PM - Leaves his cabin to stand on the bridge just north of the beach.',
				'6:00 PM - Leaves the bridge to return home for the night.'
			],
			'Spring 15 (Bus Service Restored)': [
				'11:00 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:40 AM - Stands at the cliffside south of the racing line.',
				'1:40 AM - Boards bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Rain': [
				'All day - Inside his house.'
			],
			'Thursday': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home and heads to Pierre\'s General Store.',
				'5:30 PM - Leaves Pierre\'s and heads home for the night.'
			],
			'Friday (Any player has at least 6 hearts with Elliott)': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home and heads to Pierre\'s General Store.',
				'5:30 PM - Leaves Pierre\'s and heads home for the night.'
			],
			'Friday and Sunday (No player has 6 hearts with Leah)': [
				'8:00 AM - At home.',
				'12:00 PM - Leaves his cabin to stand on the docks next to Willy\'s house.',
				'5:00 PM - Leaves the docks to visit The Stardrop Saloon.',
				'11:40 PM - Leaves the saloon to return home for the night.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home, heads to the forest south of Leah\'s Cottage.',
				'6:00 PM - Leaves the forest to return home for the night.',
				'7:40 PM - Arrives home and goes to bed.'
			],
			'Summer 9': [
				'10:30 AM - Leaves his house and goes to the Clinic.',
				'1:30 PM - Moves from waiting room to examination room inside Clinic.',
				'4:00 PM - Leaves the clinic and returns home for the night.'
			],
			'Green Rain (Year 1)': [
				'All day - In the Saloon.'
			],
			'Rain': [
				'All day - Inside his house.'
			],
			'Thursday': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home and heads to Pierre\'s General Store.',
				'5:30 PM - Leaves Pierre\'s and heads home for the night.'
			],
			'Friday (Any player has at least 6 hearts with Elliott)': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home and heads to Pierre\'s General Store.',
				'5:30 PM - Leaves Pierre\'s and heads home for the night.'
			],
			'Friday and Sunday (No player has 6 hearts with Leah)': [
				'8:00 AM - At home.',
				'11:00 AM - Leaves his cabin to stand on the docks next to Willy\'s house.',
				'5:00 PM - Leaves the docks to visit The Stardrop Saloon.',
				'11:40 PM - Leaves the saloon to return home for the night.'
			],
			'Friday and Sunday': [
				'8:00 AM - At home.',
				'12:00 PM - Leaves his cabin to stand on the beach south of his house.',
				'1:30 PM - Leaves the beach and returns to his cabin.',
				'3:00 PM - Leaves his cabin to stand on the bridge just north of the beach.',
				'6:00 PM - Leaves the bridge to return home for the night.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home, heads to the Library.',
				'5:30 PM - Leaves the library to return home for the night.',
				'6:40 PM - Returns home and stands by his bonsai tree.',
				'9:00 PM - Leaves his bonsai tree and walks over to his writing desk.'
			],
			'Rain': [
				'All day - Inside his house.'
			],
			'Thursday': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home and heads to Pierre\'s General Store.',
				'5:30 PM - Leaves Pierre\'s and heads home for the night.'
			],
			'Friday (Any player has at least 6 hearts with Elliott)': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home and heads to Pierre\'s General Store.',
				'5:30 PM - Leaves Pierre\'s and heads home for the night.'
			],
			'Friday and Sunday (No player has 6 hearts with Leah)': [
				'8:00 AM - At home.',
				'11:00 AM - Leaves his cabin to stand on the docks next to Willy\'s house.',
				'5:00 PM - Leaves the docks to visit The Stardrop Saloon.',
				'11:40 PM - Leaves the saloon to return home for the night.'
			],
			'Friday and Sunday': [
				'8:00 AM - At home.',
				'12:00 PM - Leaves his cabin to stand on the beach south of his house.',
				'1:30 PM - Leaves the beach and returns to his cabin.',
				'3:00 PM - Leaves his cabin to stand on the bridge just north of the beach.',
				'6:00 PM - Leaves the bridge to return home for the night.'
			]
		},
		'Winter': {
			'Rain': [
				'All day - Inside his house.'
			],
			'Winter 17': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home, heads to the Museum.',
				'4:50 PM - Leaves the library to attend the Night Market.',
				'1:00 AM - Leaves the Night Market and returns to his cabin.'
			],
			'Winter 12 and 13': [
				'8:00 AM - Leaves his cabin to stand on the docks next to Willy\'s house.',
				'5:00 PM - Leaves the docks to visit The Stardrop Saloon.',
				'12:00 AM - Leaves the saloon to return home for the night.'
			],
			'Thursday': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home and heads to Pierre\'s General Store.',
				'5:30 PM - Leaves Pierre\'s and heads home for the night.'
			],
			'Friday (Any player has at least 6 hearts with Elliott)': [
				'8:00 AM - At home.',
				'11:30 AM - Leaves home and heads to Pierre\'s General Store.',
				'5:30 PM - Leaves Pierre\'s and heads home for the night.'
			],
			'Friday and Sunday (No player has 6 hearts with Leah)': [
				'8:00 AM - At home.',
				'11:00 AM - Leaves his cabin to stand on the docks next to Willy\'s house.',
				'5:00 PM - Leaves the docks to visit The Stardrop Saloon.',
				'11:40 PM - Leaves the saloon to return home for the night.'
			],
			'Friday and Sunday': [
				'8:00 AM - At home.',
				'12:00 PM - Leaves his cabin to stand on the beach south of his house.',
				'1:30 PM - Leaves the beach and returns to his cabin.',
				'3:00 PM - Leaves his cabin to stand on the bridge just north of the beach.',
				'6:00 PM - Leaves the bridge to return home for the night.'
			]
		},
		'Marriage': {
			'Spring 15 (Bus Service Restored)': [
				'8:30 AM - Leaves home to attend the Desert Festival and stand on the cliff overlooking the Oasis.',
				'12:30 AM - Leaves the Desert Festival and heads home to the farm.'
			],
			'Monday': [
				'8:30 AM - Leaves the Farmhouse and heads to the beach.',
				'5:00 PM - Leaves the beach and heads home to the farm.'
			]
		}
	},
	Jodi: {
		'Spring': {
			'Regular Schedule': [
				'9:00 AM - In kitchen.',
				'11:30 AM - Sits in living room.',
				'1:30 PM - Leaves and heads to Town Square.',
				'4:00 PM - Leaves and heads to her home.',
				'4:30 PM - Stands in kitchen.',
				'7:30 PM - Stands in living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Spring 17 (Bus Service Restored)': [
				'10:20 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'10:30 AM - Stands by one of the villager shops with Vincent.',
				'12:10 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Spring 11': [
				'9:00 AM - In the kitchen.',
				'11:30 AM - Walks to the waiting room at Harvey\'s Clinic.',
				'1:30 PM - Moves to the left examination room.',
				'4:00 PM - Walks to Vincent\'s room.',
				'8:00 PM - Moves to the living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Spring 18': [
				'8:00 AM - In the kitchen.',
				'11:30 AM - Walks to the waiting room at Harvey\'s Clinic.',
				'1:30 PM - Moves to the left examination room.',
				'4:00 PM - Returns to the kitchen.',
				'7:30 PM - In the living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Rain': [
				'8:00 AM - In the kitchen.',
				'11:30 AM - Moves to the living room.',
				'4:00 PM - In the kitchen.',
				'7:30 PM - In the living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Tuesday': [
				'9:00 AM - In the kitchen.',
				'10:10 AM - Leaves her house, heading to Pierre\'s General Store.',
				'11:00 AM - Enters Pierre\'s General Store.',
				'11:30 AM - Standing by the fireplace in the back area of Pierre\'s.',
				'1:00 PM - Begins exercising with Marnie, Caroline, Emily, and Robin.',
				'4:00 PM - Stands by the fireplace with Caroline, Marnie, and Robin.',
				'6:20 PM - Exits Pierre\'s, heading home.',
				'7:10 PM - Enters her house.',
				'9:10 PM - Puts Vincent to bed.',
				'10:00 PM - Leaves Vincent\'s room, heads to bed.',
				'10:20 PM - Enters her bedroom and goes to sleep.'
			],
			'Wednesday and Friday (Community Center Restored)': [
				'9:00 AM - Inside her house, in the kitchen.',
				'11:00 AM - Arrives at Pierre\'s General Store.',
				'5:00 PM - Inside her house, in the kitchen.',
				'9:00 PM - Vincent\'s Room.',
				'10:00 PM - Go to bed.'
			],
			'Wednesday and Friday': [
				'9:00 AM - In kitchen.',
				'11:00 AM - Leaves her house and heads for JojaMart.',
				'12:50 PM - Arrives at JojaMart.',
				'5:00 PM - Leaves JojaMart and heads home.',
				'6:30 PM - At home in front of fridge.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM	Heads to bed'
			],
			'Saturday (Community Center Restored)': [
				'8:00 AM - In the kitchen.',
				'11:00 AM - Leaves home, walks to Community Center, stands inside main room.',
				'5:00 PM - Returns home, stands in living room.',
				'9:00 PM - Goes to bed'
			],
			'Sunday': [
				'9:00 AM - At home in the kitchen.',
				'10:00 AM - Leaves home, walks to Pierre\'s General Store.',
				'11:00 AM - Arrives at Pierre\'s, walks into the Chapel in the back.',
				'4:00 PM - Leaves Pierre\'s General Store, walks home.',
				'5:00 PM - At home on Couch.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'9:00 AM - In kitchen.',
				'11:30 AM - Sits in living room.',
				'1:30 PM - Leaves and heads to Town Square.',
				'4:00 PM - Leaves and heads to her home.',
				'4:30 PM - Stands in kitchen.',
				'7:30 PM - Stands in living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Green Rain (Year 1)': [
				'All day - In the living room.'
			],
			'Rain': [
				'8:00 AM - In the kitchen.',
				'11:30 AM - Moves to the living room.',
				'4:00 PM - In the kitchen.',
				'7:30 PM - In the living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Tuesday': [
				'9:00 AM - In the kitchen.',
				'10:10 AM - Leaves her house, heading to Pierre\'s General Store.',
				'11:00 AM - Enters Pierre\'s General Store.',
				'11:30 AM - Standing by the fireplace in the back area of Pierre\'s.',
				'1:00 PM - Begins exercising with Marnie, Caroline, Emily, and Robin.',
				'4:00 PM - Stands by the fireplace with Caroline, Marnie, and Robin.',
				'6:20 PM - Exits Pierre\'s, heading home.',
				'7:10 PM - Enters her house.',
				'9:10 PM - Puts Vincent to bed.',
				'10:00 PM - Leaves Vincent\'s room, heads to bed.',
				'10:20 PM - Enters her bedroom and goes to sleep.'
			],
			'Wednesday and Friday (Community Center Restored)': [
				'9:00 AM - Inside her house, in the kitchen.',
				'11:00 AM - Arrives at Pierre\'s General Store.',
				'5:00 PM - Inside her house, in the kitchen.',
				'9:00 PM - Vincent\'s Room.',
				'10:00 PM - Go to bed.'
			],
			'Wednesday and Friday': [
				'9:00 AM - In kitchen.',
				'11:00 AM - Leaves her house and heads for JojaMart.',
				'12:50 PM - Arrives at JojaMart.',
				'5:00 PM - Leaves JojaMart and heads home.',
				'6:30 PM - At home in front of fridge.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Saturday (Community Center Restored)': [
				'8:00 AM - In the kitchen.',
				'11:00 AM - Leaves home, walks to Community Center, stands inside main room.',
				'5:00 PM - Returns home, stands in living room.',
				'9:00 PM - Goes to bed.'
			],
			'Sunday': [
				'9:00 AM - At home in the kitchen.',
				'10:00 AM - Leaves home, walks to Pierre\'s General Store.',
				'11:00 AM - Arrives at Pierre\'s, walks into the Chapel in the back.',
				'4:00 PM - Leaves Pierre\'s General Store, walks home.',
				'5:00 PM - At home on Couch.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'9:00 AM - In kitchen.',
				'11:30 AM - Sits in living room.',
				'1:30 PM - Leaves and heads to Town Square.',
				'4:00 PM - Leaves and heads to her home.',
				'4:30 PM - Stands in kitchen.',
				'7:30 PM - Stands in living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Rain': [
				'8:00 AM - In the kitchen.',
				'11:30 AM - Moves to the living room.',
				'4:00 PM - In the kitchen.',
				'7:30 PM - In the living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Tuesday': [
				'9:00 AM - In the kitchen.',
				'10:10 AM - Leaves her house, heading to Pierre\'s General Store.',
				'11:00 AM - Enters Pierre\'s General Store.',
				'11:30 AM - Standing by the fireplace in the back area of Pierre\'s.',
				'1:00 PM - Begins exercising with Marnie, Caroline, Emily, and Robin.',
				'4:00 PM - Stands by the fireplace with Caroline, Marnie, and Robin.',
				'6:20 PM - Exits Pierre\'s, heading home.',
				'7:10 PM - Enters her house.',
				'9:10 PM - Puts Vincent to bed.',
				'10:00 PM - Leaves Vincent\'s room, heads to bed.',
				'10:20 PM - Enters her bedroom and goes to sleep.'
			],
			'Wednesday and Friday (Community Center Restored)': [
				'9:00 AM - Inside her house, in the kitchen.',
				'11:00 AM - Arrives at Pierre\'s General Store.',
				'5:00 PM - Inside her house, in the kitchen.',
				'9:00 PM - Vincent\'s Room.',
				'10:00 PM - Go to bed.'
			],
			'Wednesday and Friday': [
				'9:00 AM - In kitchen.',
				'11:00 AM - Leaves her house and heads for JojaMart.',
				'12:50 PM - Arrives at JojaMart.',
				'5:00 PM - Leaves JojaMart and heads home.',
				'6:30 PM - At home in front of fridge.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Saturday (Community Center Restored)': [
				'8:00 AM - In the kitchen.',
				'11:00 AM - Leaves home, walks to Community Center, stands inside main room.',
				'5:00 PM - Returns home, stands in living room.',
				'9:00 PM - Goes to bed.'
			],
			'Sunday': [
				'9:00 AM - At home in the kitchen.',
				'10:00 AM - Leaves home, walks to Pierre\'s General Store.',
				'11:00 AM - Arrives at Pierre\'s, walks into the Chapel in the back.',
				'4:00 PM - Leaves Pierre\'s General Store, walks home.',
				'5:00 PM - At home on Couch.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'9:00 AM - In kitchen.',
				'11:30 AM - Sits in living room.',
				'1:30 PM - Leaves and heads to Town Square.',
				'4:00 PM - Leaves and heads to her home.',
				'4:30 PM - Stands in kitchen.',
				'7:30 PM - Stands in living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Winter 17': [
				'9:00 AM - Inside her house, in the kitchen.',
				'11:40 AM - Inside her house, in the living room, sitting on the blue sofa.',
				'2:00 PM - Meets with Caroline in the north near her house.',
				'4:30 PM - Attends the Night Market.',
				'11:30 PM - Returns home.'
			],
			'Rain': [
				'8:00 AM - In the kitchen.',
				'11:30 AM - Moves to the living room.',
				'4:00 PM - In the kitchen.',
				'7:30 PM - In the living room.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Tuesday': [
				'9:00 AM - In the kitchen.',
				'10:10 AM - Leaves her house, heading to Pierre\'s General Store.',
				'11:00 AM - Enters Pierre\'s General Store.',
				'11:30 AM - Standing by the fireplace in the back area of Pierre\'s.',
				'1:00 PM - Begins exercising with Marnie, Caroline, Emily, and Robin.',
				'4:00 PM - Stands by the fireplace with Caroline, Marnie, and Robin.',
				'6:20 PM - Exits Pierre\'s, heading home.',
				'7:10 PM - Enters her house.',
				'9:10 PM - Puts Vincent to bed.',
				'10:00 PM - Leaves Vincent\'s room, heads to bed.',
				'10:20 PM - Enters her bedroom and goes to sleep.'
			],
			'Wednesday and Friday (Community Center Restored)': [
				'9:00 AM - Inside her house, in the kitchen.',
				'11:00 AM - Arrives at Pierre\'s General Store.',
				'5:00 PM - Inside her house, in the kitchen.',
				'9:00 PM - Vincent\'s Room.',
				'10:00 PM - Go to bed.'
			],
			'Wednesday and Friday': [
				'9:00 AM - In kitchen.',
				'11:00 AM - Leaves her house and heads for JojaMart.',
				'12:50 PM - Arrives at JojaMart.',
				'5:00 PM - Leaves JojaMart and heads home.',
				'6:30 PM - At home in front of fridge.',
				'9:00 PM - Puts Vincent to bed.',
				'10:00 PM - Heads to bed.'
			],
			'Saturday (Community Center Restored)': [
				'8:00 AM - In the kitchen.',
				'11:00 AM - Leaves home, walks to Community Center, stands inside main room.',
				'5:00 PM - Returns home, stands in living room.',
				'9:00 PM - Goes to bed.'
			],
			'Sunday': [
				'9:00 AM - At home in the kitchen.',
				'10:00 AM - Leaves home, walks to Pierre\'s General Store.',
				'11:00 AM - Arrives at Pierre\'s, walks into the Chapel in the back.',
				'4:00 PM - Leaves Pierre\'s General Store, walks home.',
				'5:00 PM - At home on Couch.'
			]
		}
	},
	Abigail: {
		'Spring': {
			'Regular Schedule': [
				'9:00 AM - Leaves her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s store.',
				'1:00 PM - Leaves the house to go to stand on bridge near JojaMart.',
				'1:30 PM - Standing on the bridge near JojaMart.',
				'4:30 PM - Heads home.',
				'5:20 PM - In her room, playing video games.',
				'7:30 PM - Goes to bed.'
			],
			'Spring 4': [
				'9:00 AM - In her room.',
				'12:30 PM - Leaves her room to go to the clinic for her annual check-up.',
				'1:30 PM - Leaves the waiting room and enters the exam room of the clinic.',
				'4:00 PM - Leaves the clinic and goes home back to her room.',
				'8:00 PM - Goes to bed.'
			],
			'Spring 15 (Bus Service Restored)': [
				'10:10 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:00 AM - Stands at the cliffside west of the cactus stand.',
				'1:30 AM - Starts walking back to the bus.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Spring 6 and 16': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'3:00 PM - Goes to the Mountain, standing on the southwest corner of the lake, playing the flute.',
				'8:00 PM - Heads home to go to bed.',
				'9:40 PM - Arrives at home.'
			],
			'Spring 11 and 25 (No player has 6 hearts with Sebastian or Abigail)': [
				'9:00 AM - In bed.',
				'10:30 AM - Leaves Pierre\'s store.',
				'12:00 PM - Arrives in Sebastian\'s room.',
				'5:00 PM - Leaves Sebastian\'s room.',
				'6:30 PM - Returns home.',
				'6:50 PM - Back in room.'
			],
			'Spring 11 and 25': [
				'9:00 AM - Leaves her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s store.',
				'1:00 PM - Leaves the house to go to stand on bridge near JojaMart.',
				'1:30 PM - Standing on the bridge near JojaMart.',
				'4:30 PM - Heads home.',
				'5:20 PM - In her room, playing video games.',
				'7:30 PM - Goes to bed.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaves her room to stand in Pierre\'s General Store.',
				'1:00 PM - Goes to the kitchen.',
				'3:00 PM - Returns to her room.',
				'10:00 PM - Goes to bed.'
			],
			'Rain (Option 2)': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'11:00 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'2:00 PM - Leaving the house to go to the Stardrop Saloon.',
				'2:50 PM - In the Stardrop Saloon, sitting on a sofa in the arcade.',
				'9:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Wednesday': [
				'10:00 AM - Leaves home to go to Museum.',
				'12:00 PM - Inside Museum library looking at books.',
				'6:00 PM - Walks to the Graveyard.',
				'7:00 PM - Standing in front of Mona\'s grave.',
				'10:00 PM - Heads home.',
				'10:40 PM - Arrives at home.'
			],
			'Friday': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'11:00 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'3:00 PM - Leaving home to go to the Stardrop Saloon.',
				'3:50 PM - In the Stardrop Saloon, sitting on a sofa in the arcade.',
				'9:00 PM - Heads home.',
				'9:40 PM - Arrives home.'
			],
			'Sunday': [
				'9:00 AM - In her room.',
				'10:30 AM - Leaves her room to go into Caroline and Pierre\'s room.',
				'1:00 PM - Leaving home to go to the Wizard\'s Tower.',
				'4:00 PM - Near Wizard\'s Tower in Cindersap Forest.',
				'8:00 PM - Heads home.',
				'10:30 PM - Arrives home.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'11:00 AM - Leaves home, walks to the Train Platform.',
				'1:00 PM - Waiting in front of the Train Platform.',
				'2:00 PM - Walks to the lake east of the Carpenter\'s Shop.',
				'3:00 PM - Standing by the Mountain lake east of the Carpenter\'s Shop.',
				'5:30 PM - Heads home.',
				'7:30 PM - Arrives home.',
				'8:00 PM - Plays video games.',
				'8:10 PM - Goes to bed.'
			],
			'Green Rain (Year 1)': [
				'All day - In the living room.'
			],
			'Summer 6 and 16': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'3:00 PM - Goes to the Mountain, standing on the southwest corner of the lake, playing the flute.',
				'8:00 PM - Heads home to go to bed.',
				'9:40 PM - Arrives at home.'
			],
			'Summer 11 and 25 (No player has 6 hearts with Sebastian or Abigail)': [
				'9:00 AM - In bed.',
				'10:30 AM - Leaves Pierre\'s store.',
				'12:00 PM - Arrives in Sebastian\'s room.',
				'5:00 PM - Leaves Sebastian\'s room.',
				'6:30 PM - Returns home.',
				'6:50 PM - Back in room.'
			],
			'Summer 11 and 25': [
				'9:00 AM - Leaves her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s store.',
				'1:00 PM - Leaves the house to go to stand on bridge near JojaMart.',
				'1:30 PM - Standing on the bridge near JojaMart.',
				'4:30 PM - Heads home.',
				'5:20 PM - In her room, playing video games.',
				'7:30 PM - Goes to bed.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaves her room to stand in Pierre\'s General Store.',
				'1:00 PM - Goes to the kitchen.',
				'3:00 PM - Returns to her room.',
				'10:00 PM - Goes to bed.'
			],
			'Rain (Option 2)': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'11:00 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'2:00 PM - Leaving the house to go to the Stardrop Saloon.',
				'2:50 PM - In the Stardrop Saloon, sitting on a sofa in the arcade.',
				'9:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Wednesday': [
				'10:00 AM - Leaves home to go to the library.',
				'12:00 PM - Inside library, looking at books.',
				'6:00 PM - Walks to the Graveyard.',
				'7:00 PM - Standing in front of Mona\'s grave.',
				'10:00 PM - Heads home.',
				'10:40 PM - Arrives at home.'
			],
			'Friday': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'11:00 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'3:00 PM - Leaving home to go to the the Stardrop Saloon.',
				'3:50 PM - In the Stardrop Saloon, sitting on a sofa in the arcade.',
				'9:00 PM - Heads home.',
				'9:40 PM - Arrives home.'
			],
			'Sunday': [
				'10:30 AM - Leaves her room to go into Caroline and Pierre\'s room.',
				'1:00 PM - Leaves home, walks to the Wizard\'s Tower.',
				'4:00 PM - Standing in front of the Wizard\'s Tower in Cindersap Forest.',
				'8:00 PM - Heads home.',
				'10:30 PM - Arrives home.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'9:00 AM - Leaves her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'1:00 PM - Leaving the house to go to stand at Bus Stop.',
				'2:20 PM - Standing at Bus Stop.',
				'5:00 PM - Heads home.',
				'6:30 PM - In her room, playing video games.',
				'7:30 PM - Goes to bed.'
			],
			'Fall 6 and 16': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'3:00 PM - Goes to the Mountain, standing on the southwest corner of the lake, playing the flute.',
				'8:00 PM - Heads home to go to bed.',
				'9:40 PM - Arrives at home.'
			],
			'Fall 11 and 25 (No player has 6 hearts with Sebastian or Abigail)': [
				'9:00 AM - In bed.',
				'10:30 AM - Leaves Pierre\'s store.',
				'12:00 PM - Arrives in Sebastian\'s room.',
				'5:00 PM - Leaves Sebastian\'s room.',
				'6:30 PM - Returns home.',
				'6:50 PM - Back in room.'
			],
			'Fall 11 and 25': [
				'9:00 AM - Leaves her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s store.',
				'1:00 PM - Leaves the house to go to stand on bridge near JojaMart.',
				'1:30 PM - Standing on the bridge near JojaMart.',
				'4:30 PM - Heads home.',
				'5:20 PM - In her room, playing video games.',
				'7:30 PM - Goes to bed.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaves her room to stand in Pierre\'s General Store.',
				'1:00 PM - Goes to the kitchen.',
				'3:00 PM - Returns to her room.',
				'10:00 PM - Goes to bed.'
			],
			'Rain (Option 2)': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'11:00 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'2:00 PM - Leaving the house to go to the Stardrop Saloon.',
				'2:50 PM - In the Stardrop Saloon, sitting on a sofa in the arcade.',
				'9:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Monday': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaving home to go to the Beach.',
				'1:00 PM - Standing at the end of long pier to the left of the Fish Shop.',
				'6:00 PM - Heads home.',
				'7:30 PM - Arrives home and goes to bed.'
			],
			'Wednesday': [
				'10:30 AM - Leaves home to go to library.',
				'12:00 PM - Inside library, looking at books.',
				'6:00 PM - Walks to the Graveyard.',
				'7:00 PM - Standing in front of Mona\'s grave.',
				'10:00 PM - Heads home.',
				'10:40 PM - Arrives at home.'
			],
			'Friday': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'11:00 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'3:00 PM - Leaving Pierre\'s General Store to go to the Stardrop Saloon.',
				'3:50 PM - In the Stardrop Saloon, sitting on a sofa in the arcade.',
				'9:00 PM - Heads home.',
				'9:40 PM - Arrives home.'
			],
			'Sunday': [
				'9:00 AM - In her room.',
				'10:30 AM - Leaves her room to go into Caroline and Pierre\'s room.',
				'1:00 PM - Leaving home to go to the Wizard\'s Tower.',
				'4:00 PM - Near the Wizard\'s Tower in Cindersap Forest.',
				'8:00 PM - Heads home.',
				'10:30 PM - Arrives at home.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'10:30 AM - Walking to the Carpenter\'s Shop. Stands next to the counter.',
				'2:30 PM - Heads back home and plays video games.',
				'7:30 PM - Goes to bed.'
			],
			'Winter 6 and 16': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'3:00 PM - Goes to the Mountain, standing on the southwest corner of the lake, playing the flute.',
				'8:00 PM - Heads home to go to bed.',
				'9:40 PM - Arrives at home.'
			],
			'Winter 11 and 25 (No player has 6 hearts with Sebastian or Abigail)': [
				'9:00 AM - In bed.',
				'10:30 AM - Leaves Pierre\'s store.',
				'12:00 PM - Arrives in Sebastian\'s room.',
				'5:00 PM - Leaves Sebastian\'s room.',
				'6:30 PM - Returns home.',
				'6:50 PM - Back in room.'
			],
			'Winter 11 and 25': [
				'9:00 AM - Leaves her room to go to the kitchen.',
				'10:30 AM - Leaves the kitchen to stand in Pierre\'s store.',
				'1:00 PM - Leaves the house to go to stand on bridge near JojaMart.',
				'1:30 PM - Standing on the bridge near JojaMart.',
				'4:30 PM - Heads home.',
				'5:20 PM - In her room, playing video games.',
				'7:30 PM - Goes to bed.'
			],
			'Winter 15': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'10:30 AM - Walking to the Carpenter\'s Shop. Stands next to the counter.',
				'2:30 PM - Walks to beach to attend Night Market.',
				'12:00 AM - Back at home.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In her room.',
				'11:00 AM - Leaves her room to stand in Pierre\'s General Store.',
				'1:00 PM - Goes to the kitchen.',
				'3:00 PM - Returns to her room.',
				'10:00 PM - Goes to bed.'
			],
			'Rain (Option 2)': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'11:00 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'2:00 PM - Leaving the house to go to the Stardrop Saloon.',
				'2:50 PM - In the Stardrop Saloon, sitting on a sofa in the arcade.',
				'9:00 PM - Heads home.',
				'10:00 PM - Goes to bed.'
			],
			'Wednesday': [
				'10:00 AM - Leaves home to go to the library.',
				'12:00 PM - Inside the library, looking at books.',
				'6:00 PM - Walks to the Graveyard.',
				'7:00 PM - Standing in front of Mona\'s grave.',
				'10:00 PM - Heads home.',
				'10:40 PM - Arrives at home.'
			],
			'Friday': [
				'9:00 AM - Leaving her room to go to the kitchen.',
				'11:00 AM - Leaves the kitchen to stand in Pierre\'s General Store.',
				'3:00 PM - Leaving Pierre\'s General Store to go to the Stardrop Saloon.',
				'3:50 PM - In the Stardrop Saloon, sitting on a sofa in the arcade.',
				'9:00 PM - Heads home.',
				'9:40 PM - Arrives home.'
			],
			'Sunday': [
				'9:00 AM - In her room.',
				'10:30 AM - Leaves her room to go into Caroline and Pierre\'s room.',
				'1:00 PM - Leaving home to go to the Wizard\'s Tower.',
				'4:00 PM - Near the Wizard\'s Tower in Cindersap Forest.',
				'8:00 PM - Heads home.',
				'10:30 PM - Arrives home.'
			]
		},
		'Marriage': {
			'Spring 16 (Bus Service Restored)': [
				'8:00 AM - Leaves home to go to the Desert Festival and stand north of the fishing pond.',
				'1:30 AM - Returns home.'
			],
			'Green Rain (Year 1)': [
				'6:10 AM - Walks to her parent\'s living room.'
			],
			'Monday': [
				'6:00 AM - At home, in the kitchen.',
				'8:30 AM - Leaves home to go to Pierre\'s General Store.',
				'9:30 AM - Arrives at Pierre\'s General Store, stands by the counter near Pierre.',
				'1:00 PM - Leaves Pierre\'s General Store, walking to the Graveyard.',
				'1:40 PM - Standing in front of Mona\'s grave.',
				'5:00 PM - Leaves the Graveyard, heading to the Stardrop Saloon.',
				'5:30 PM - Arrives at the Stardrop Saloon, heads to the arcade.',
				'5:40 PM - Begins playing Journey of the Prairie King.',
				'8:30 PM - Stops playing Journey of the Prairie King, starts walking home.',
				'10:00 PM - At home in bed.'
			],
			'Friday': [
				'6:00 AM - At home.',
				'8:30 AM - Heads to Pierre\'s General Store and stands in the kitchen.',
				'11:00 AM - Walking to the Mountain.',
				'11:40 AM - West side of the Mountain Lake.',
				'3:00 PM - Walking to the Stardrop Saloon.',
				'5:30 PM - In the Stardrop Saloon, sitting on a sofa in the arcade.',
				'8:30 PM - Walking home.',
				'10:00 PM - At home in bed.'
			]
		}
	},
	Sandy: {
		'All Seasons': {
			'Regular Schedule': [
				'All day - Behind the counter at the Oasis.'
			],
			'Spring 15, 16, & 17 (Bus Repaired)': [
				'8:30 AM - Exits the Oasis to stand at Emily\'s outfit services.',
				'12:00 AM - Returns to the Oasis.'
			],
			'Fall 15 (Bus Repaired)': [
				'9:00 AM - Stands behind the counter in the Oasis.',
				'12:00 PM - Chats sideways with Emily behind the counter.',
				'1:00 PM - Leaves the Oasis and stands next to the bench on the left.',
				'3:00 PM - Goes to the pond in the northwest section.',
				'5:00 PM - Leaves and then stands next to the Sand Dragon.',
				'6:00 PM - Goes to the side of the bus.',
				'7:00 PM - Moves to the front of the Desert Trader.',
				'8:00 PM - Returns to the front of the Oasis.',
				'10:50 PM - Leaves the front of the Oasis.',
				'11:30 PM - Arrives by the bench next to the bus.',
				'12:00 AM - Says goodbye to Emily.',
				'12:10 AM - Goes back to the Oasis.'
			]
		}
	},
	Marnie: {
		'All Seasons': {
			'Regular Schedule': [
				'6:00 AM - At home in her room.',
				'9:00 AM - Stands behind the counter of her shop.',
				'4:00 PM - Closes her shop and walks to her room.',
				'5:00 PM - Leaves her house and walks to The Stardrop Saloon.',
				'11:00 PM - Leaves the Saloon and walks back to her house to go to bed.'
			],
			'Spring 17 (Bus Service Restored)': [
				'10:50 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:10 AM - Stands at the bus stop next to the Desert Trader.',
				'11:40 PM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Fall 18': [
				'6:00 AM - At home in her room.',
				'10:30 AM - Leaves her house and walks to Harvey\'s Clinic.',
				'12:00 PM - Arrives at Harvey\'s Clinic, stands in the waiting room.',
				'1:30 PM - Walks into the exam room at Harvey\'s Clinic.',
				'4:00 PM - Leaves Harvey\'s Clinic and walks back to her house.',
				'5:30 PM - Arrives home and stands in the kitchen.',
				'9:00 PM - Walks to her room and goes to sleep.'
			],
			'Winter 16': [
				'6:00 AM - At home in her room.',
				'9:00 AM - Stands behind the counter of her shop.',
				'4:00 PM - Attends the Night Market.',
				'11:40 PM - Walks back to her house to go to bed.'
			],
			'Winter 18': [
				'9:00 AM - At home in her room.',
				'11:00 AM - Leaves her house to take Jas to Harvey\'s Clinic.',
				'12:00 PM - Stands in clinic waiting room.',
				'1:40 PM - Walks into clinic examination room.',
				'4:00 PM - Leaves clinic and walks back to her house.',
				'6:00 PM - Arrives at home and stands in the kitchen.',
				'9:00 PM - Walks to her room and goes to bed.'
			],
			'Green Rain (Year 1)': [
				'All day - In the kitchen.'
			],
			'Rain': [
				'6:00 AM - At home in her room.',
				'9:00 AM - Stands behind the counter of her shop.',
				'4:00 PM - Closes her shop and walks to the kitchen.',
				'6:00 PM - Leaves the kitchen and walks to her room. Stands in front of her dresser.',
				'9:00 PM - Goes to bed.'
			],
			'Monday': [
				'6:00 AM - At home in her room.',
				'8:10 AM - Leaves her house and walks to Pierre\'s General Store.',
				'12:00 PM - Leaves Pierre\'s General Store and walks back to her house.',
				'1:30 PM - Arrives at home and stands in the kitchen.',
				'9:00 PM - Walks to her room and goes to bed.'
			],
			'Tuesday': [
				'6:00 AM - At home in her room.',
				'10:00 AM - Leaves her house and walks to Pierre\'s General Store.',
				'12:00 PM - Arrives at Pierre\'s General Store to exercise with Caroline, Jodi, Emily, and Robin.',
				'4:00 PM - Chats with the other ladies after exercise class.',
				'6:10 PM - Leaves Pierre\'s General Store and walks back to her house.',
				'8:00 PM - Arrives home and stands in the kitchen.',
				'9:00 PM - Walks to her room and goes to bed.'
			],
			'Thursday': [
				'6:00 AM - At home in her room.',
				'9:00 AM - Stands behind the counter of her shop.',
				'4:00 PM - Closes her shop and walks to the kitchen.',
				'6:00 PM - Leaves the kitchen and walks to her room. Stands in front of her dresser.',
				'9:00 PM - Goes to bed.'
			]
		}
	},
	Robin: {
		'All Seasons': {
			'Regular Schedule': [
				'6:00 AM - In her bedroom at home.',
				'8:00 AM - Walks to the counter of her shop.',
				'5:00 PM - Leaves her shop and heads outside to the Mountain area.',
				'7:30 PM - Leaves the Mountain and walks into her bedroom.',
				'9:00 PM - Goes to bed.'
			],
			'Spring 16 (Bus Service Restored)': [
				'11:20 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:40 AM - Chats with Marlon and Gil at the Adventurer\'s Guild challenge booth.',
				'12:20 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and takes bus back to the Valley.'
			],
			'Green Rain (Year 1)': [
				'All day - In Sebastian\'s room.'
			],
			'Summer 18': [
				'6:00 AM - In her bedroom at home.',
				'7:00 AM - Walks to the counter of her shop.',
				'8:00 AM - Leaves home and walks to Harvey\'s Clinic.',
				'4:00 PM - Leaves Harvey\'s Clinic and walks home.',
				'9:00 PM - Goes to bed.'
			],
			'Rain': [
				'6:00 AM - In her bedroom at home.',
				'8:00 AM - Walks to the counter of her shop.',
				'5:00 PM - Leaves the counter of her shop and walks to the kitchen.',
				'7:30 PM - Walks to her bedroom.',
				'9:00 PM - Goes to bed.'
			],
			'Monday (Community Center Restored)': [
				'6:00 AM - In her bedroom at home.',
				'8:00 AM - Walks to the counter of her shop.',
				'5:00 PM - Leaves her shop and walks to the Community Center.',
				'7:30 PM - Leaves Community Center to return home.',
				'10:00 PM - Goes to bed.'
			],
			'Winter 16': [
				'6:00 AM - In her bedroom at home.',
				'8:00 AM - Walks to the counter of her shop.',
				'5:00 PM - Leaves her shop to attend Night Market.',
				'11:30 PM - Leaves Night Market to return home.'
			],
			'Tuesday': [
				'6:00 AM - In her bedroom at home.',
				'9:30 AM - Walks towards Pierre\'s General Store.',
				'1:00 PM - Starts to exercise.',
				'4:00 PM - Finishes the exercise, talks with Jodi, Caroline, and Marnie.',
				'6:00 PM - Leaves Pierre\'s General Store and walks back to the kitchen.',
				'7:30 PM - Leaves the kitchen and walks to her bedroom.',
				'9:00 PM - Goes to bed.'
			],
			'Friday': [
				'6:00 AM - In her bedroom at home.',
				'8:00 AM - Walks to the counter of her shop.',
				'4:00 PM - Leaves her shop and walks to the Stardrop Saloon.',
				'7:20 PM - At the Stardrop Saloon, dancing with Demetrius.',
				'9:00 PM - Leaves the Stardrop Saloon and walks home to go to bed.'
			]
		}
	},
	George: {
		'All Seasons': {
			'Regular Schedule': [
				'6:30 AM - At home, watching TV.',
				'12:00 PM - At his kitchen table.',
				'3:00 PM - Goes to watch TV again.',
				'8:00 PM - Goes to his bedroom for the night.'
			],
			'Spring 17 (Bus Service Restored)': [
				'9:40 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'9:50 AM - With Evelyn, at the roadside near the bus.',
				'10:50 PM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Winter 17': [
				'6:30 AM - At home, watching TV.',
				'12:00 PM - At his kitchen table.',
				'4:20 PM - Leaves home to attend the Night Market.',
				'11:40 PM - Leaves the Night Market to return home.'
			],
			'Green Rain (Year 1)': [
				'All day - In the kitchen.'
			],
			'Tuesday the 23rd (All Seasons)': [
				'6:30 AM - At home, at the kitchen table.',
				'10:30 AM - Leaves home for the waiting room of Harvey\'s Clinic.',
				'1:30 PM - Moves to the left exam room inside the Clinic.',
				'4:00 PM - Leaves the Clinic to watch TV at home.',
				'8:00 PM - Goes to his bedroom for the night.'
			],
			'Rain': [
				'6:30 AM - At home, watching TV.',
				'12:00 PM - At his kitchen table.',
				'3:00 PM - Goes to watch TV again.',
				'8:00 PM - Goes to his bedroom for the night.'
			],
			'Summer Friday': [
				'6:30 AM - At home, watching TV.',
				'12:00 PM - Leaves home to sit outside, under the tree west of his house.',
				'3:00 PM - Returns home to watch TV.',
				'8:00 PM - Goes to his bedroom for the night.'
			],
			'Sunday (Alex\'s 14 heart event seen)': [
				'6:30 AM - At home, watching TV.',
				'11:00 AM - Heads to the back room of the Saloon to watch sports.',
				'3:00 PM - Returns home to watch TV.',
				'8:00 PM - Goes to his bedroom for the night.'
			],
			'Sunday': [
				'6:30 AM - At home, watching TV.',
				'10:00 AM - Leaves home and heads for the Statue of Yoba inside Pierre\'s home.',
				'2:00 PM - Leaves the Statue of Yoba and heads home to watch TV.',
				'8:00 PM - Goes to his bedroom for the night.'
			]
		}
	},
	Krobus: {
		'All Seasons': {
			'Regular Schedule': [
				'Krobus can always be found in the Sewers once the Player obtains the Rusty Key.'
			]
		}
	},
	Linus: {
		'Spring': {
			'Regular Schedule': [
				'6:00 AM - Inside his tent.',
				'6:30 AM - Exits tent, stands behind bush west of his tent.',
				'7:00 AM - Walks to west of campfire in front of his tent.',
				'9:30 AM - Walks to west side of lake.',
				'2:00 PM - Walks to west of campfire in front of his tent.',
				'7:00 PM - Returns to his tent.',
				'11:00 PM - Goes to bed.'
			],
			'Spring 16 (Bus Service Restored)': [
				'9:50 AM - Takes the bus to Calico Desert to attend the Desert Festival.',
				'10:20 AM - Stands by a trash can behind the Calico Egg merchant.',
				'1:40 AM - Heads back to the bus.'
			],
		},
		'Summer': {
			'Regular Schedule': [
				'6:00 AM - Inside his tent.',
				'6:30 AM - Walks to cliff overlooking lake, east of his tent.',
				'9:40 AM - Walks to south of fence, west of lake.',
				'1:00 PM - Walks further south, west of lake.',
				'4:00 PM - Walks to west of campfire in front of his tent.',
				'8:00 PM - Walks behind bush west of his tent.',
				'8:20 PM - Returns to his tent for the night.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'6:00 AM - Inside his tent.',
				'7:00 AM - Exits tent, stands behind bush west of his tent.',
				'7:40 AM - Walks to west of campfire in front of his tent.',
				'9:00 AM - Walks to Spa, stands at east side of building.',
				'2:00 PM - Walks to west side of lake.',
				'6:00 PM - Returns to his tent for the night.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'6:00 AM - Inside his tent.',
				'11:00 AM - Exits tent, stands west of campfire in front of his tent.',
				'2:00 PM - Walks to Spa, stands inside entrance.',
				'6:00 PM - Returns to his tent for the night.'
			],
			'Winter 15': [
				'6:00 AM - Inside his tent.',
				'11:00 AM - Exits tent, stands west of campfire in front of his tent.',
				'4:00 PM - Walks to beach to attend Night Market.',
				'11:30 PM - Returns to his tent for the night.'
			]
		},
		'All Seasons': {
			'Green Rain (Year 1)': [
				'6:00 AM - Stands at the cliff south of his tent.',
				'12:00 PM - Moves to the cliff west of his tent.',
				'5:00 PM - Stands by the campfire.',
				'10:00 PM - Goes inside his tent to sleep.'
			],
			'Rain': [
				'6:00 AM - Inside his tent.',
				'9:30 AM - Exits tent, stands behind bush west of his tent.',
				'10:10 AM - Returns to his tent.',
				'3:00 PM - Exits tent, stands under tree west of his tent.',
				'7:00 PM - Returns to his tent.',
				'11:30 PM - Goes to bed.'
			]
		}
	},
	Caroline: {
		'All Seasons': {
			'Regular Schedule': [
				'8:00 AM - In the kitchen of Pierre\'s General Store.',
				'10:00 AM - In her sunroom, near her tea sapling.',
				'12:00 PM - Walks to an aisle of the general store.',
				'1:30 PM - Leaves home to stand in town square with Jodi.',
				'4:00 PM - Returns home and stands in her living room.',
				'9:00 PM - Goes to bed.'
			],
			'Spring 15 (Bus Service Restored)': [
				'10:40 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:00 AM - Stands east of the villager shops.',
				'12:50 AM - Boards bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Fall 25': [
				'8:00 AM-  In the kitchen of Pierre\'s General Store.',
				'10:00 AM - Leaves the kitchen, walks to her bedroom.',
				'12:00 PM - Walks to Harvey\'s Clinic and stands in waiting room.',
				'1:30 PM - Moves to the left examination room in Harvey\'s Clinic.',
				'4:00 PM - Returns home and stands in her living room.',
				'9:00 PM - Goes to bed.'
			],
			'Winter 16': [
				'8:00 AM - In the kitchen of Pierre\'s General Store.',
				'12:00 PM - Walks to an aisle of the general store.',
				'1:30 PM - Goes to stand in the town square.',
				'4:00 PM - Leaves the town square to attend the Night Market.',
				'11:30 PM - Leaves the Night Market to return home and sleep.'
			],
			'Green Rain (Year 1)': [
				'All day - In the living room.'
			],
			'Rain': [
				'8:00 AM - In the kitchen of Pierre\'s General Store.',
				'12:00 PM - Walks to an aisle of the general store.',
				'1:30 PM - Walks to her bedroom and reads next to her bookcase.',
				'4:00 PM - Leaves bedroom to stand in the living room.',
				'9:00 PM - Goes to bed.'
			],
			'Tuesday': [
				'8:00 AM - In her living room, near the uppermost dresser.',
				'10:30 AM - Moves more towards the middle of the living room.',
				'1:00 PM - Caroline exercises with the Aerobics class in her living room.',
				'4:00 PM - Aerobics class ends, she stands in the living room chatting.',
				'6:10 PM - Walks to kitchen and eats some cookies.',
				'9:00 PM - Goes to bed.'
			],
			'Wednesday': [
				'8:00 AM - In the kitchen of Pierre\'s General Store.',
				'10:00 AM - In her sunroom, near her tea sapling.',
				'12:00 PM - Walks to the fountain to the west of the Community Center.',
				'5:00 PM - Returns home and stands in her living room.',
				'9:00 PM - Goes to bed.'
			],
			'Friday': [
				'8:00 AM - In the kitchen of Pierre\'s General Store.',
				'10:00 AM - In her sunroom, near her tea sapling.',
				'12:00 PM - Goes to the Museum to read between some bookshelves.',
				'5:00 PM - Returns home and stands in her living room.',
				'9:00 PM - Goes to bed.'
			],
			'Saturday': [
				'8:00 AM - In the kitchen of Pierre\'s General Store.',
				'11:00 AM - Walks to Community Center and stands in the reading area in the main room.',
				'5:00 PM - Returns home and stands in her living room.',
				'9:00 PM - Goes to bed.'
			],
			'Sunday': [
				'9:00 AM - Stands in her bedroom.',
				'10:40 AM - Moves one space over to stand in front of her bookshelf.',
				'1:30 PM - Walks to an aisle of the general store.',
				'2:40 PM - Leaves home to stand below the tree south of the Community Center.',
				'6:30 PM - Returns home to stand in her bedroom.',
				'9:00 PM - Goes to bed.'
			]
		}
	},
	Sebastian: {
		'Spring': {
			'Regular Schedule': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his computer and goes to the kitchen.',
				'3:30 PM - Leaves the kitchen to go back to his room.',
				'4:10 PM - On his computer.',
				'6:30 PM - Leaves home and walks to lake next to his house to smoke.',
				'7:30 PM - Smoking by the lake next to his house.',
				'9:30 PM - Goes back to his house.'
			],
			'Spring 15 (Bus Service Restored)': [
				'11:10 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'12:00 PM - Hangs out near the flamingo.',
				'1:40 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Spring 11 (No player has 6 hearts with Sebastian)': [
				'9:00 AM - In his bed.',
				'10:00 AM - Gets out of bed and moves to his computer.',
				'12:00 PM - In his room, standing by couch. Abigail arrives.',
				'5:00 PM - Abigail leaves.',
				'5:10 PM - Leaving his room to go to the kitchen.',
				'6:00 PM - Leaving kitchen to return to his room.',
				'6:20 PM - Back in room.',
				'9:30 PM - Goes to bed.'
			],
			'Spring 15': [
				'9:00 AM - In his bed.',
				'10:00 AM - Gets out of bed and moves to his computer.',
				'12:00 PM - In his room, standing by couch. Abigail arrives.',
				'5:00 PM - Abigail leaves.',
				'5:10 PM - Leaving his room to go to the kitchen.',
				'6:00 PM - Leaving kitchen to return to his room.',
				'6:20 PM - Back in room.',
				'9:30 PM - Goes to bed.'
			],
			'Spring 11 and 25 (Any player has at least 6 hearts with Sebastian)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his computer and goes to the kitchen.',
				'3:30 PM - Leaves the kitchen to go back to his room.',
				'4:10 PM - On his computer.',
				'6:30 PM - Leaves home and walks to lake next to his house to smoke.',
				'7:30 PM - Smoking by the lake next to his house.',
				'9:30 PM - Goes back to his house.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and leaves house to go to the beach.',
				'1:30 PM - Standing at the end of long pier furthest west of the fish shop.',
				'5:00 PM - Leaves the pier to go home.',
				'7:40 PM - Arrives home and goes to bed.'
			],
			'Rain (Option 2)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaving house to go to the Saloon.',
				'5:20 PM - At the Saloon, standing by red sofa in arcade.',
				'9:10 PM - Heads home.',
				'11:10 PM - Arrives home.'
			],
			'Thursday (Railroad Accessible)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'2:00 PM - Leaving home to go smoke by train station.',
				'3:00 PM - Smoking by the train station.',
				'6:20 PM - Standing east of train station, by tunnel.',
				'8:10 PM - Standing west of train station, by tunnel.',
				'9:30 PM - Heads home.',
				'10:20 PM - Arrives home.'
			],
			'Friday': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his room to go play pool with Sam at the Saloon.',
				'5:20 PM - In the Saloon, playing pool with Sam.',
				'9:10 PM - Heads home.',
				'11:10 PM - Arrives home.'
			],
			'Saturday': [
				'9:00 AM - Leaves house to go to Sam\'s house.',
				'11:30 AM - In front of Haley and Emily\'s house with Sam.',
				'12:30 PM - Follows Sam to his room.',
				'1:00 PM - In Sam\'s room.',
				'6:00 PM - Leaves Sam\'s house with Sam and goes to the river.',
				'6:20 PM - Smoking by the river outside Sam\'s house with him.',
				'7:30 PM - Going home from in front of Sam\'s house.',
				'9:40 PM - Arrives home.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his computer and goes to the kitchen.',
				'3:30 PM - Leaves the kitchen to go back to his room.',
				'4:10 PM - On his computer.',
				'6:30 PM - Leaves home and walks to lake next to his house to smoke.',
				'7:30 PM - Smoking by the lake next to his house.',
				'9:30 PM - Goes back to his house.'
			],
			'Green Rain (Year 1)': [
				'All day - In his room.'
			],
			'Summer 4': [
				'9:00 AM - In his room, by bookcase.',
				'10:00 AM - Leaving house to go to the clinic.',
				'11:50 AM - In the clinic\'s waiting room.',
				'1:40 PM - In the clinic\'s examination room.',
				'4:00 PM - Heads home.',
				'6:00 PM - Arrives at his room and goes to bed.'
			],
			'Summer 11 (No player has 6 hearts with Sebastian)': [
				'9:00 AM - In his bed.',
				'10:00 AM - Gets out of bed and moves to his computer.',
				'12:00 PM - In his room, standing by couch.',
				'5:30 PM - Leaving his room to go to the kitchen.',
				'6:30 PM - On his computer.',
				'9:30 PM - Goes to bed.'
			],
			'Summer 15': [
				'9:00 AM - In his bed.',
				'10:00 AM - Gets out of bed and moves to his computer.',
				'12:00 PM - In his room, standing by couch.',
				'5:30 PM - Leaving his room to go to the kitchen.',
				'6:30 PM - On his computer.',
				'9:30 PM - Goes to bed.'
			],
			'Summer 11 and 25 (Any player has at least 6 hearts with Sebastian)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his computer and goes to the kitchen.',
				'3:30 PM - Leaves the kitchen to go back to his room.',
				'4:10 PM - On his computer.',
				'6:30 PM - Leaves home and walks to lake next to his house to smoke.',
				'7:30 PM - Smoking by the lake next to his house.',
				'9:30 PM - Goes back to his house.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and leaves house to go to the beach.',
				'1:30 PM - Standing at the end of long pier to the left of the fish shop.',
				'5:00 PM - Leaves the pier to go home.',
				'7:40 PM - Arrives home and goes to bed.'
			],
			'Rain (Option 2)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaving house to go to the Saloon.',
				'5:20 PM - At the Saloon, standing by red sofa in arcade.',
				'9:10 PM - Heads home.',
				'11:10 PM - Arrives home.'
			],
			'Thursday (Railroad Accessible)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'2:00 PM - Leaving home to go smoke by train station.',
				'3:00 PM - Smoking by the train station.',
				'6:20 PM - Standing east of train station, by tunnel.',
				'8:10 PM - Standing west of train station, by tunnel.',
				'9:30 PM - Heads home.',
				'10:20 PM - Arrives home.'
			],
			'Friday': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his room to go play pool with Sam at the Saloon.',
				'5:20 PM - In the Saloon, playing pool with Sam.',
				'9:10 PM - Heads home.',
				'11:10 PM - Arrives home.'
			],
			'Saturday': [
				'9:00 AM - Leaves house to go to Sam\'s house.',
				'11:30 AM - In front of Haley and Emily\'s house with Sam.',
				'12:30 PM - Follows Sam to his room.',
				'1:00 PM - In Sam\'s room.',
				'6:00 PM - Leaves Sam\'s house with Sam and goes to the river.',
				'6:20 PM - Smoking by the river outside Sam\'s house with him.',
				'7:30 PM - Going home from in front of Sam\'s house.',
				'9:40 PM - Arrives home.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'12:00 PM - Leaves home and walks to lake next to his house.',
				'2:00 PM - Goes to the part of the lake outside the mines entrance.',
				'3:00 PM - Leaves the mines entrance and heads to the other side of the lake.',
				'3:30 PM - Is smoking at the edge of the lake close to the bridge.',
				'4:00 PM - Returns home to his kitchen.',
				'5:30 PM - Leaves his kitchen.',
				'6:00 PM - On his computer.',
				'9:30 PM - Leaves his computer and goes to bed.'
			],
			'Fall 11 (No player has 6 hearts with Sebastian)': [
				'9:00 AM - In his bed.',
				'10:00 AM - Gets out of bed and moves to his computer.',
				'12:00 PM - In his room, standing by couch.',
				'5:30 PM - Leaving his room to go to the kitchen.',
				'6:00 PM - Leaves the kitchen to go back to his room.',
				'6:30 PM - On his computer.',
				'9:30 PM - Goes to bed.'
			],
			'Fall 15': [
				'9:00 AM - In his bed.',
				'10:00 AM - Gets out of bed and moves to his computer.',
				'12:00 PM - In his room, standing by couch.',
				'5:30 PM - Leaving his room to go to the kitchen.',
				'6:00 PM - Leaves the kitchen to go back to his room.',
				'6:30 PM - On his computer.',
				'9:30 PM - Goes to bed.'
			],
			'Fall 11 and 25 (Any player has at least 6 hearts with Sebastian)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his computer and goes to the kitchen.',
				'3:30 PM - Leaves the kitchen to go back to his room.',
				'4:10 PM - On his computer.',
				'6:30 PM - Leaves home and walks to lake next to his house to smoke.',
				'7:30 PM - Smoking by the lake next to his house.',
				'9:30 PM - Goes back to his house.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and leaves house to go to the beach.',
				'1:30 PM - Standing at the end of long pier to the left of the fish shop.',
				'5:00 PM - Leaves the pier to go home.',
				'7:40 PM - Arrives home and goes to bed.'
			],
			'Rain (Option 2)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaving house to go to the Saloon.',
				'5:20 PM - At the Saloon, standing by red sofa in arcade.',
				'9:10 PM - Heads home.',
				'11:10 PM - Arrives home.'
			],
			'Thursday (Railroad Accessible)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'2:00 PM - Leaving home to go smoke by train station.',
				'3:00 PM - Smoking by the train station.',
				'6:20 PM - Standing east of train station, by tunnel.',
				'8:10 PM - Standing west of train station, by tunnel.',
				'9:30 PM - Heads home.',
				'10:20 PM - Arrives home.'
			],
			'Friday': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his room to go play pool with Sam at the Saloon.',
				'5:20 PM - In the Saloon, playing pool with Sam.',
				'9:10 PM - Heads home.',
				'11:10 PM - Arrives home.'
			],
			'Saturday': [
				'9:00 AM - Leaves house to go to Sam\'s house.',
				'11:30 AM - In front of Haley and Emily\'s house with Sam.',
				'12:30 PM - Follows Sam to his room.',
				'1:00 PM - In Sam\'s room.',
				'6:00 PM - Leaves Sam\'s house with Sam and goes to the river.',
				'6:20 PM - Smoking by the river outside Sam\'s house with him.',
				'7:30 PM - Going home from in front of Sam\'s house.',
				'9:40 PM - Arrives home.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his computer and goes to the kitchen.',
				'3:30 PM - Leaves the kitchen to go back to his room.',
				'4:10 PM - On his computer.',
				'6:30 PM - Leaves home and walks to lake next to his house to smoke.',
				'7:30 PM - Smoking by the lake next to his house.',
				'9:30 PM - Goes back to his house.'
			],
			'Winter 16': [
				'10:30 AM - Wakes up and goes to his computer.',
				'3:00 PM - Leaves room and goes to kitchen.',
				'3:40 PM - Goes back to room and returns to his computer.',
				'5:00 PM - Leaves his home to attend Night Market.',
				'11:30 PM - Leaves Night Market to return home.'
			],
			'Winter 11 (No player has 6 hearts with Sebastian)': [
				'9:00 AM - In his bed.',
				'10:00 AM - Gets out of bed and moves to his computer.',
				'12:00 PM - In his room, standing by couch.',
				'5:30 PM - Leaving his room to go to the kitchen.',
				'6:30 PM - On his computer.',
				'9:30 PM - Goes to bed.'
			],
			'Winter 15': [
				'9:00 AM - In his bed.',
				'10:00 AM - Gets out of bed and moves to his computer.',
				'12:00 PM - In his room, standing by couch.',
				'5:30 PM - Leaving his room to go to the kitchen.',
				'6:30 PM - On his computer.',
				'9:30 PM - Goes to bed.'
			],
			'Winter 11 and 25 (Any player has at least 6 hearts with Sebastian)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his computer and goes to the kitchen.',
				'3:30 PM - Leaves the kitchen to go back to his room.',
				'4:10 PM - On his computer.',
				'6:30 PM - Leaves home and walks to lake next to his house to smoke.',
				'7:30 PM - Smoking by the lake next to his house.',
				'9:30 PM - Goes back to his house.'
			],
			'Rain (Option 1)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and leaves house to go to the beach.',
				'1:30 PM - Standing at the end of long pier to the left of the fish shop.',
				'5:00 PM - Leaves the pier to go home.',
				'7:40 PM - Arrives home and goes to bed.'
			],
			'Rain (Option 2)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaving house to go to the Saloon.',
				'5:20 PM - At the Saloon, standing by red sofa in arcade.',
				'9:10 PM - Heads home.',
				'11:10 PM - Arrives home.'
			],
			'Thursday (Railroad Accessible)': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'2:00 PM - Leaving home to go smoke by train station.',
				'3:00 PM - Smoking by the train station.',
				'6:20 PM - Standing east of train station, by tunnel.',
				'8:10 PM - Standing west of train station, by tunnel.',
				'9:30 PM - Heads home.',
				'10:20 PM - Arrives home.'
			],
			'Friday': [
				'9:00 AM - In his bed.',
				'10:30 AM - Gets out of bed and moves to his computer.',
				'3:00 PM - Leaves his room to go play pool with Sam at the Saloon.',
				'5:20 PM - In the Saloon, playing pool with Sam.',
				'9:10 PM - Heads home.',
				'11:10 PM - Arrives home.'
			],
			'Saturday': [
				'9:00 AM - Leaves house to go to Sam\'s house.',
				'11:30 AM - In front of Haley and Emily\'s house with Sam.',
				'12:30 PM - Follows Sam to his room.',
				'1:00 PM - In Sam\'s room.',
				'6:00 PM - Leaves Sam\'s house with Sam and goes to the river.',
				'6:20 PM - Smoking by the river outside Sam\'s house with him.',
				'7:30 PM - Going home from in front of Sam\'s house.',
				'9:40 PM - Arrives home.'
			]
		},
		'Marriage': {
			'Spring 15 (Bus Service Restored)': [
				'8:30 AM - Leaves home to go to the Desert Festival and stand north-east of the cactus stand.',
				'1:20 AM - Leaves to go home.'
			],
			'Green Rain (Year 1)': [
				'6:10 AM - Leaves home to walk to his old room.'
			],
			'Monday': [
				'6:00 AM - At home.',
				'9:00 AM - Leaves to go to the mountain.',
				'9:30 AM - Walks through the town square.',
				'10:30 AM - Arrives at his old spot by the mountain lake.',
				'1:00 PM - Leaves to go visit Robin.',
				'5:20 PM - Leaves the mountain and heads home.',
				'7:20 PM - Arrives home.',
				'10:00 PM - Goes to bed.'
			],
			'Friday': [
				'6:00 AM - At home.',
				'9:00 AM - Leaves to go the beach.',
				'11:00 AM - Standing at the end of the long pier to the left of the fish shop.',
				'3:00 PM - Leaves to go to The Stardrop Saloon.',
				'4:30 PM - Arrives at the saloon, playing at the pool table with Sam.',
				'9:30 PM - Leaves to go home.',
				'10:50 PM - Arrives home.'
			]
		}
	},
	Harvey: {
		'Spring': {
			'Regular Schedule': [
				'7:00 AM - Stands in front of refrigerator in his room.',
				'8:30 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Walks around the park west of the town square.',
				'5:30 PM - Returns to clinic, stands at right side of front desk.',
				'6:40 PM - Goes upstairs to his room, reads in front of bookshelf.',
				'10:00 PM - Goes to bed.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Spring 15, 16 and 17 (Bus Service Restored)': [
				'8:20 AM - Boards bus to Calico Desert to attend the Desert Festival.',
				'8:40 AM - Stands at the medical tent.'
			],
			'Rain': [
				'8:00 AM - In his room.',
				'8:40 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes upstairs to his room, sits in front of radio.',
				'4:00 PM - Moves to bookshelf to read.',
				'5:30 PM - Heads to the Stardrop Saloon.',
				'10:00 PM - Returns home and goes to bed.'
			],
			'Tuesday and Thursday': [
				'7:30 AM - In exam room of clinic.',
				'12:50 PM - Moves to waiting room.',
				'1:30 PM - Returns to exam room.',
				'4:30 PM - Works at the clinic\'s front desk.',
				'6:00 PM - Goes up to his room, stands in front of bookshelf.',
				'11:00 PM - Goes to bed.'
			],
			'Friday': [
				'7:00 AM - Stands in front of refrigerator in his room.',
				'8:30 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes to Pierre\'s General Store.',
				'3:00 PM - Returns to his room above the clinic.',
				'10:00 PM - Goes to bed.'
			],
			'Saturday': [
				'8:30 AM - Leaves home to go to the Museum.',
				'3:00 PM - Leaves the Museum to return to his room above the clinic.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'7:00 AM - Stands in front of refrigerator in his room.',
				'8:30 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Walks south of fountain west of the Community Center.',
				'5:30 PM - Returns to clinic, stands at right side of front desk.',
				'6:40 PM - Goes up to his room, reads in front of bookshelf.',
				'10:00 PM - Goes to bed.'
			],
			'Green Rain (Year 1)': [
				'All day - At the Stardrop Saloon.'
			],
			'Rain': [
				'8:00 AM - In his room.',
				'8:40 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes upstairs to his room, sits in front of radio.',
				'4:00 PM - Moves to bookshelf to read.',
				'5:30 PM - Heads to the Stardrop Saloon.',
				'10:00 PM - Returns home and goes to bed.'
			],
			'Tuesday and Thursday': [
				'7:30 AM - In exam room of clinic.',
				'12:50 PM - Moves to waiting room.',
				'1:30 PM - Returns to exam room.',
				'4:30 PM - Works at the clinic\'s front desk.',
				'6:00 PM - Goes upstairs to his room, reads in front of bookshelf.',
				'11:00 PM - Goes to bed.'
			],
			'Friday': [
				'7:00 AM - Stands in front of refrigerator in his room.',
				'8:30 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes to Pierre\'s General Store.',
				'3:00 PM - Returns to his room above the clinic.',
				'10:00 PM - Goes to bed.'
			],
			'Saturday': [
				'8:30 AM - Leaves home to go to the Museum.',
				'3:00 PM - Leaves the Museum to return to his room above the clinic.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'7:00 AM - Stands in front of refrigerator in his room.',
				'8:30 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Walks into town, stands by tree west of bridge to the Beach.',
				'5:00 PM - Returns to his room, sits in front of radio.',
				'10:00 PM - Goes to bed.'
			],
			'Rain': [
				'8:00 AM - In his room.',
				'8:40 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes upstairs to his room, sits in front of radio.',
				'4:00 PM - Moves to bookshelf to read.',
				'5:30 PM - Heads to the Stardrop Saloon.',
				'10:00 PM - Returns home and goes to bed.'
			],
			'Tuesday and Thursday': [
				'7:30 AM - In exam room of clinic.',
				'12:50 PM - Moves to waiting room.',
				'1:30 PM - Returns to exam room.',
				'4:30 PM - Works at the clinic\'s front desk.',
				'6:00 PM - Goes upstairs to his room, reads in front of bookshelf.',
				'11:00 PM - Goes to bed.'
			],
			'Friday': [
				'7:00 AM - Stands in front of refrigerator in his room.',
				'8:30 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes to Pierre\'s General Store.',
				'3:00 PM - Returns to his room above the clinic.',
				'10:00 PM - Goes to bed.'
			],
			'Saturday': [
				'8:30 AM - Leaves home to go to the Museum.',
				'3:00 PM - Leaves the Museum to return to his room above the clinic.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'8:00 AM - In his room.',
				'8:40 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes upstairs to his room, sits in front of radio.',
				'4:00 PM - Moves to bookshelf to read.',
				'5:50 PM - Heads to the Stardrop Saloon.',
				'10:00 PM - Returns home and goes to bed.'
			],
			'Winter 15': [
				'8:00 AM - Stands in front of microwave in his room.',
				'8:40 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes upstairs to his room, sits in front of radio.',
				'4:00 PM - Moves to bookshelf in his room.',
				'5:00 PM - Walks to beach to attend Night Market.',
				'12:00 AM - Returns home and goes to bed.'
			],
			'Rain': [
				'8:00 AM - In his room.',
				'8:40 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes upstairs to his room, sits in front of radio.',
				'4:00 PM - Moves to bookshelf to read.',
				'5:30 PM - Heads to the Stardrop Saloon.',
				'10:00 PM - Returns home and goes to bed.'
			],
			'Tuesday and Thursday': [
				'7:30 AM - In exam room of clinic.',
				'12:50 PM - Moves to waiting room.',
				'1:30 PM - Returns to exam room.',
				'4:30 PM - Works at the clinic\'s front desk.',
				'6:00 PM - Goes upstairs to his room, reads in front of bookshelf.',
				'11:00 PM - Goes to bed.'
			],
			'Friday': [
				'7:00 AM - Stands in front of refrigerator in his room.',
				'8:30 AM - Works at the clinic\'s front desk.',
				'12:00 PM - Goes to Pierre\'s General Store.',
				'3:00 PM - Returns to his room above the clinic.',
				'10:00 PM - Goes to bed.'
			],
			'Saturday': [
				'8:30 AM - Leaves home to go to the Museum.',
				'3:00 PM - Leaves the Museum to return to his room above the clinic.'
			]
		},
		'Marriage': {
			'Spring 15, 16 and 17 (Bus Service Restored)': [
				'9:00 AM - Leaves the farmhouse and heads to the Desert Festival.',
				'9:40 AM - Stands at the medical tent.'
			],
			'Monday': [
				'8:30 AM - Leaves the farmhouse and heads to Pierre\'s General Store.',
				'12:00 PM - Walks to fountain left of Community Center.',
				'5:00 PM - Leaves town and heads home to the farm.'
			],
			'Tuesday and Thursday': [
				'6:30 AM - Leaves the farmhouse and heads to the clinic.',
				'6:00 PM - Leaves the clinic to return home to the farm.'
			]
		}
	},
	Wizard: {
		'All Seasons': {
			'Everyday': [
				'The Wizard does not leave the Wizard\'s Tower (except for certain Festival days) and can be found there when the tower is accessible (6am to 11pm). After the player has unlocked the Witch\'s Hut, he can be found in his tower after 11pm by using the warp spot in the Witch\'s Hut. The Wizard never visits the Beach Resort on Ginger Island.'
			]
		}
	},
	Evelyn: {
		'All Seasons': {
			'Regular Schedule': [
				'8:00 AM - Standing in her kitchen.',
				'10:40 AM - Stands next to the TV with George.',
				'12:10 PM - Stands at her kitchen table.',
				'1:00 PM - Goes to tend the plants just southeast of town square.',
				'4:30 PM - Stands in her kitchen, near the appliances.',
				'7:00 PM - Moves to stand in front of the bookcase in her living room.',
				'9:30 PM - Goes to her bedroom.'
			],
			'Spring 17 (Bus Service Restored)': [
				'9:50 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'10:00 AM - With George, at the roadside near the bus.',
				'10:50 PM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Green Rain (Year 1)': [
				'All day - Standing in her kitchen.'
			],
			'Tuesday the 2nd': [
				'8:00 AM - Standing in her kitchen.',
				'10:30 AM - Leaves home to sit in the waiting room of Harvey\'s clinic.',
				'1:30 PM - Moves to the left examination room.',
				'4:00 PM - Returns home from the clinic to stand in her kitchen.',
				'7:00 PM - Moves to stand in front of the bookcase in her living room.',
				'9:30 PM - Goes to her bedroom.'
			],
			'Tuesday the 23rd': [
				'8:00 AM - Standing in her kitchen.',
				'10:40 AM - Leaves home to wait in Harvey\'s clinic with George.',
				'1:30 PM - Moves to the left examination room with George.',
				'4:10 PM - Returns home from the clinic to stand in her kitchen.',
				'7:00 PM - Moves to stand in front of the bookcase in her living room.',
				'9:30 PM - Goes to her bedroom.'
			],
			'Winter 17': [
				'8:00 AM - Standing in her kitchen.',
				'10:40 AM - Stands next to the TV with George.',
				'12:10 PM - Stands at her kitchen table.',
				'1:00 PM - Sits in her house.',
				'4:30 PM - Arrives at the Night Market.',
				'11:40 PM - Arrives in her bedroom.'
			],
			'Rain': [
				'8:00 AM - Standing in her kitchen.',
				'10:40 AM - Stands next to the TV with George.',
				'12:10 PM - Stands at her kitchen table.',
				'4:30 PM - Stands in her kitchen, near the appliances.',
				'7:00 PM - Moves to stand in front of the bookcase in her living room.',
				'9:30 PM - Goes to her bedroom.'
			],
			'Monday, Thursday and Saturday (Community Center Restored)': [
				'8:00 AM - Standing in her kitchen.',
				'10:40 AM - Stands next to the TV with George.',
				'12:10 PM - Heads to the community center to sit in the armchair in the crafts room.',
				'4:30 PM - Stands in her kitchen, near the appliances.',
				'7:00 PM - Moves to stand in front of the bookcase in her living room.',
				'9:30 PM - Goes to her bedroom.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'8:00 AM - Standing in her kitchen.',
				'10:40 AM - Stands next to the TV with George.',
				'12:10 PM - Stands at her kitchen table.',
				'1:00 PM - Goes to tend the plants just northwest of town square.',
				'4:30 PM - Stands in her kitchen, near the appliances.',
				'7:00 PM - Moves to stand in front of the bookcase in her living room.',
				'9:30 PM - Goes to her bedroom.'
			]
		}
	},
	Leah: {
		'Spring': {
			'Regular Schedule': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Walks to the edge of the river near the island southwest of her cottage.',
				'3:00 PM - Walks to the end of the pier over the forest pond and draws.',
				'6:30 PM - Walks to the west side of the forest pond.',
				'7:30 PM - Walks back to her cottage and stands in front of her bookcase.',
				'10:00 PM - Stands at the table in her house.',
				'12:00 AM - Goes to bed for the night.'
			],
			'Spring 15 (Bus Service Restored)': [
				'10:40 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:20 AM - Stands by the sand sculpture south of the racing line.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at her booth.',
				'12:00 AM - Leaves booth and boards bus back to the Valley.'
			],
			'Spring 16': [
				'9:00 AM - Sculpts in her cottage.',
				'10:30 AM - Goes to the waiting room of Harvey\'s Clinic.',
				'1:30 PM - Moves from the waiting room to the left exam room in the Clinic.',
				'4:00 PM - Leaves the Clinic and walks to The Stardrop Saloon.',
				'11:40 PM - Leaves the Saloon to return home and sleep.'
			],
			'Rain': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Moves to her easel to paint.',
				'2:00 PM - Stands in front of the bookcase in her cottage.',
				'4:00 PM - Leaves her cottage and walks to The Stardrop Saloon.',
				'11:40 PM - Leaves the Saloon to return home and sleep.'
			],
			'Monday': [
				'9:00 AM - Sculpts in her cottage.',
				'11:00 AM - Goes to shop at Pierre\'s General Store.',
				'5:00 PM - Leaves the store to return home and stand in front of her bookcase.',
				'10:00 PM - Stands at the table in her house.',
				'12:00 AM - Goes to bed for the night.'
			],
			'Friday and Saturday': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Moves to her easel to paint.',
				'2:00 PM - Stands in front of the bookcase in her cottage.',
				'4:00 PM - Leaves her cottage and walks to The Stardrop Saloon.',
				'11:40 PM - Leaves the Saloon to return home and sleep.'
			]
		},
		'Summer': {
			'Regular Schedule': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Leaves her cottage to draw at the beach.',
				'7:00 PM - Leaves the beach to return home and stands in front of her bookcase.',
				'10:00 PM - Stands at the table in her house.',
				'12:00 AM - Goes to bed for the night.'
			],
			'Regular Schedule (Beach Bridge Repaired)': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Leaves her cottage to draw at the tidal pools at the beach.',
				'7:00 PM - Leaves the beach to return home and stands in front of her bookcase.',
				'10:00 PM - Stands at the table in her house.',
				'12:00 AM - Goes to bed for the night.'
			],
			'Green Rain (Year 1)': [
				'6:10 AM - Stands outside her cottage.',
				'1:00 PM - Stands in her cottage, next to her bed.',
				'10:00 PM - In bed.'
			],
			'Rain': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Moves to her easel to paint.',
				'2:00 PM - Stands in front of the bookcase in her cottage.',
				'4:00 PM - Leaves her cottage and walks to The Stardrop Saloon.',
				'11:40 PM - Leaves the Saloon to return home and sleep.'
			],
			'Monday': [
				'9:00 AM - Sculpts in her cottage.',
				'11:00 AM - Goes to shop at Pierre\'s General Store.',
				'5:00 PM - Leaves the store to return home and stands in front of her bookcase.',
				'10:00 PM - Stands at the table in her house.',
				'12:00 AM - Goes to bed for the night.'
			],
			'Friday and Saturday': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Moves to her easel to paint.',
				'2:00 PM - Stands in front of the bookcase in her cottage.',
				'4:00 PM - Leaves her cottage and walks to The Stardrop Saloon.',
				'11:40 PM - Leaves the Saloon to return home and sleep.'
			]
		},
		'Fall': {
			'Regular Schedule': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Walks to the east side of the river in town, above the Blacksmith.',
				'7:00 PM - Leaves town to return home and stand in front of her bookcase.',
				'10:00 PM - Stands at the table in her house.',
				'12:00 AM - Goes to bed for the night.'
			],
			'Rain': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Moves to her easel to paint.',
				'2:00 PM - Stands in front of the bookcase in her cottage.',
				'4:00 PM - Leaves her cottage and walks to The Stardrop Saloon.',
				'11:40 PM - Leaves the Saloon to return home and sleep.'
			],
			'Monday': [
				'9:00 AM - Sculpts in her cottage.',
				'11:00 AM - Goes to shop at Pierre\'s General Store.',
				'5:00 PM - Leaves the store to return home and stand in front of her bookcase.',
				'10:00 PM - Stands at the table in her house.',
				'12:00 AM - Goes to bed for the night.'
			],
			'Friday and Saturday': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Moves to her easel to paint.',
				'2:00 PM - Stands in front of the bookcase in her cottage.',
				'4:00 PM - Leaves her cottage and walks to The Stardrop Saloon.',
				'11:40 PM - Leaves the Saloon to return home and sleep.'
			]
		},
		'Winter': {
			'Regular Schedule': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Moves to her easel to paint.',
				'2:00 PM - Stands in front of the bookcase in her cottage.',
				'4:00 PM - Leaves her cottage and walks to The Stardrop Saloon.',
				'11:40 PM - Leaves the Saloon to return home and sleep.'
			],
			'Winter 16': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Moves to her easel to paint.',
				'2:00 PM - Stands in front of the bookcase in her cottage.',
				'4:00 PM - Leaves her cottage to attend the Night Market.',
				'11:40 PM - Leaves the Night Market to return home and sleep.'
			],
			'Rain': [
				'9:00 AM - Sculpts in her cottage.',
				'12:00 PM - Moves to her easel to paint.',
				'2:00 PM - Stands in front of the bookcase in her cottage.',
				'4:00 PM - Leaves her cottage and walks to The Stardrop Saloon.',
				'11:40 PM - Leaves the Saloon to return home and sleep.'
			],
			'Monday': [
				'9:00 AM - Sculpts in her cottage.',
				'11:00 AM - Goes to shop at Pierre\'s General Store.',
				'5:00 PM - Leaves the store to return home and stand in front of her bookcase.',
				'10:00 PM - Stands at the table in her house.',
				'12:00 AM - Goes to bed for the night.'
			]
		},
		'Marriage': {
			'Spring 15 (Bus Service Restored)': [
				'9:00 AM - Leaves home to head to the Desert Festival and stand by the fishing pond.',
				'1:20 AM - Returns home.'
			],
			'Green Rain (Year 1)': [
				'6:10 AM - Leaves home to walk to her cottage and stand outside.',
				'1:00 PM - Stands in her cottage, next to her bed.',
				'10:00 PM - In bed in her cottage.'
			],
			'Monday': [
				'8:30 AM - Leaves the farmhouse to walk to the bridge near the small island southwest of her cottage.',
				'3:00 PM - Stands outside of her cottage.',
				'5:30 PM - Leaves the forest to return home to the farm.'
			]
		}
	},
	Clint: {
		'All Seasons': {
			'Regular Schedule': [
				'9:00 AM - Behind the counter of the Blacksmith.',
				'5:00 PM - Moves to work on the anvil.',
				'7:00 PM - Heads to The Saloon.',
				'8:20 PM - In the Saloon.',
				'12:00 AM - Returns home to sleep.'
			],
			'Spring 16 (Bus Service Restored)': [
				'11:20 AM - Boards the bus to Calico Desert to attend the Desert Festival.',
				'11:40 AM - Stands east of the Oasis.',
				'1:30 AM - Boards the bus back to the Valley.'
			],
			'Desert Festival (As Vendor)': [
				'11:10 AM - Boards the bus to Calico Desert.',
				'11:30 AM - Arrives at his booth.',
				'12:00 AM - Leaves booth and takes the bus back to the Valley.'
			],
			'Winter 15': [
				'8:50 AM - Behind the counter of the Blacksmith.',
				'5:00 PM - Leaves the Blacksmith to attend the Night Market.',
				'12:00 AM - Returns to the Blacksmith to sleep.'
			],
			'Winter 16': [
				'9:00 AM - Behind the counter of the Blacksmith.',
				'10:30 AM - Leaves the Blacksmith to go to the waiting room of Harvey\'s Clinic.',
				'1:30 PM - Moves to the left examination room in the Clinic.',
				'4:00 PM - Leaves the Clinic for The Saloon.',
				'12:00 AM - Returns home to sleep.'
			],
			'Green Rain (Year 1)': [
				'6:00 AM - Leaves home and heads to the Saloon.',
				'7:20 AM - In the Saloon.'
			],
			'Rain': [
				'9:00 AM - Behind the counter of the Blacksmith.',
				'5:00 PM - Moves to work on the anvil.',
				'7:00 PM - Heads to The Saloon.',
				'12:00 AM - Returns home to sleep.'
			],
			'Friday (Community Center Restored)': [
				'8:50 AM - Leaves home, heads to the Community Center Boiler Room.',
				'5:00 PM - Leaves the Community Center and heads to The Saloon.',
				'12:00 AM - Returns home to sleep.'
			]
		}
	}
}

export default schedules