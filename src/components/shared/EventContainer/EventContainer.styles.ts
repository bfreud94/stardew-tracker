import { EventContainerStyles } from './EventContainer.types'

const makeStyles = (): EventContainerStyles => ({
	eventButton: {
		alignSelf: 'center',
		borderBlockColor: 'black',
		color: 'black',
		fontFamily: 'SVFont',
		fontSize: '18px',
		height: '25px',
		marginLeft: '25px',
		textAlign: 'center'
	},
	eventButtonSx: {
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	eventContainer: {
		fontFamily: 'SVFont',
		fontSize: '24px'
	},
	eventInformationContainer: {
		display: 'flex'
	},
	eventText: {
		margin: '5px 0 0 5px',
		width: '55%'
	}
})

export default makeStyles
