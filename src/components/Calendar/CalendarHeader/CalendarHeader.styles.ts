import { CalendarHeaderStyles } from './CalendarHeader.types'

const makeStyles = (): CalendarHeaderStyles => ({
	changeSeasonButton: {
		alignSelf: 'center',
		border: '1px solid black',
		color: 'black',
		fontFamily: 'SVFont',
		fontSize: '28px',
		height: '25px',
		marginLeft: '25px',
		padding: '15px 30px',
		textAlign: 'center',
		textTransform: 'none'
	},
	changeSeasonButtonSx: {
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},	
    header: {
		alignItems: 'center',
		cursor: 'pointer',
		display: 'flex',
        fontFamily: 'SVFont',
        fontSize: '64px',
		justifyContent: 'space-between'
    }
})

export default makeStyles