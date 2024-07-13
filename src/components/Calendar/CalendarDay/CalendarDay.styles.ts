import { CalendarDayStyles } from './CalendarDay.types'

const makeStyles = (): CalendarDayStyles => ({
	day: {
		alignItems: 'center',
        border: '1px solid black',
		cursor: 'pointer',
		flex: 1,
		fontFamily: 'SVFont',
		fontSize: '32px',
        height: '200px',
        justifyContent: 'center',
		overflow: 'auto',
        width: '200px'
	},
	dayNumber: {
		margin: '5px 0px 0px 5px'
	}
})

export default makeStyles