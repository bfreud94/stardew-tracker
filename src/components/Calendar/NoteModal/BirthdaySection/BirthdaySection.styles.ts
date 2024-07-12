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
	affinitiesContainer: {
		display: 'flex',
		justifyContent: 'end',
		maxHeight: '200px',
		overflowY: 'auto'
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
	}
})

export default makeStyles
