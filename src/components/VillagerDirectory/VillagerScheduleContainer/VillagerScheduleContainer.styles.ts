import { VillagerScheduleContainerStyles } from './VillagerScheduleContainer.types'

const makeStyles = (): VillagerScheduleContainerStyles => ({
	villagerScheduleButton: {
		alignSelf: 'center',
		borderBlockColor: 'black',
		color: 'black',
		fontFamily: 'SVFont',
		fontSize: '18px',
		height: '25px',
		marginLeft: '25px',
		textAlign: 'center'
	},
	villagerScheduleButtonSx: {
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	villagerScheduleContainer: {
		display: 'flex'
	}
})

export default makeStyles
