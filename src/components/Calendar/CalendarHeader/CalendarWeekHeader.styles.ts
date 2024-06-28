import { CalendarWeekHeaderStyles } from './CalendarWeekHeader.types'

const makeStyles = (): CalendarWeekHeaderStyles => ({
	header: {
		display: 'flex',
		fontFamily: 'SVFont',
		fontSize: '32px'
	},
	row: {
		flex: 1,
		textAlign: 'center'
	}
})

export default makeStyles