import { AppHeaderStyles } from './AppHeader.types'

const makeStyles = (): AppHeaderStyles => ({
	container: {
		alignItems: 'center',
		display: 'flex',
		fontFamily: 'SVFont',
		fontSize: '24px',
		padding: '15px 15px',
		backgroundColor: 'lightblue'
	},
	headerElement: {
		cursor: 'pointer',
		margin: '0 10px'
	}
})

export default makeStyles
