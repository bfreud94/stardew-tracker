import { RandomEventsStyles } from './RandomEvents.types'

const makeStyles = (): RandomEventsStyles => ({
	randomEventsContainer: {
		backgroundColor: '#FFF0BA',
		fontFamily: 'SVFont',
		fontSize: '24px',
		padding: '0px 10px'
	},
	randomEventsHeader: {
		margin: 0,
		paddingTop: '30px'
	},
	randomEventsOdds: {
		margin: 0,
		paddingBottom: '30px'
	}
})

export default makeStyles
