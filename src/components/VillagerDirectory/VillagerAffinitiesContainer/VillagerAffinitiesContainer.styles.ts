import { VillagerAffinitiesContainerStyles } from './VillagerAffinitiesContainer.types'

const makeStyles = (): VillagerAffinitiesContainerStyles => ({
	affinitiesButton: {
		alignSelf: 'center',
		borderBlockColor: 'black',
		color: 'black',
		fontFamily: 'SVFont',
		fontSize: '18px',
		height: '25px',
		marginLeft: '25px',
		textAlign: 'center'
	},
	affinitiesButtonSx: {
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	affinitiesContainer: {
		display: 'flex'
	},
})

export default makeStyles
