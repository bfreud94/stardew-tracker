import { CommonBenchmarksStyles } from './CommonBenchmarks.types'

const makeStyles = (): CommonBenchmarksStyles => ({
	commonBenchmarksContainer: {
		backgroundColor: '#FFF0BA',
		display: 'flex',
		flexDirection: 'column',
		fontFamily: 'SVFont',
		fontSize: '24px',
		marginTop: 0,
		minHeight: '100vh',
		padding: '15px'
	},
	cost: {
		margin: '0 0 10px 0'
	},
	zeroMargin: {
		margin: 0
	}
})

export default makeStyles
