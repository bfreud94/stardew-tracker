import { CalendarDayStyles } from './CalendarDay.types'

const makeStyles = (): CalendarDayStyles => ({
	day: {
		alignItems: 'center',
        border: '1px solid black',
		flex: 1,
		fontFamily: 'SVFont',
		fontSize: '32px',
        height: '200px',
        justifyContent: 'center',
		cursor: 'pointer',
        width: '200px'
	},
	dayNumber: {
		margin: '5px 0px 0px 5px'
	}
})

export default makeStyles