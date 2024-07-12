import { BirthdaySectionStyles } from './BirthdaySection.types'

const makeStyles = (): BirthdaySectionStyles => ({
	affinitiesButton: {
		alignSelf: 'center',
		borderBlockColor: 'black',
		color: 'black',
		fontFamily: 'SVFont',
		fontSize: '18px',
		height: '25px',
		marginRight: '25px',
		textAlign: 'center'
	},
	affinitiesButtonSx: {
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	birthdaySection: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	birthdayText: {
		alignSelf: 'center',
		fontFamily: 'SVFont',
		fontSize: '18px',
		textAlign: 'center'
	},
	leftContainer: {
		display: 'flex'
	},
	villagerIcon: {
		marginLeft: '10px'
	}
})

export default makeStyles
