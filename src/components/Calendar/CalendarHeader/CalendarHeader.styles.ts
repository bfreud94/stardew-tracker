import { CalendarHeaderStyles } from './CalendarHeader.types'

const makeStyles = (): CalendarHeaderStyles => ({
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