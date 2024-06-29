import { CalendarHeaderStyles } from './CalendarHeader.types'

const makeStyles = (): CalendarHeaderStyles => ({
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