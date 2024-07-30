import { AppHeaderStyles } from './AppHeader.types'

const makeStyles = (): AppHeaderStyles => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		padding: '15px 15px',
		backgroundColor: 'lightblue'
	},
	headerElement: {
		cursor: 'pointer',
		margin: '0 10px'
	}
})

export default makeStyles
