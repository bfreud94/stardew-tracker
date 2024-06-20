import { BirthdaySectionStyles } from './BirthdaySection.types'

const makeStyles = (): BirthdaySectionStyles => ({
	birthdaySection: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	birthdayText: {
		alignSelf: 'center',
		fontFamily: 'SVFont',
		fontSize: '18px',
		textAlign: 'center'
	}
})

export default makeStyles
