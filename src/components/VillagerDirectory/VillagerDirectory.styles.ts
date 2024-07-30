import { VillagerDirectoryStyles } from './VillagerDirectory.types'

const makeStyles = (): VillagerDirectoryStyles => ({
	villagerContainer: {
		cursor: 'pointer',
		marginBottom: '25px'
	},
	villagerDirectoryContainer: {
		backgroundColor: '#FFF0BA',
		display: 'grid',
		fontFamily: 'SVFont',
		fontSize: '24px',
		gridTemplateColumns: 'repeat(8, 1fr)',
		minHeight: '100vh',
		padding: '10px 10px 0px 10px'
	},
	zeroMargin: {
		margin: '0'
	}
})

export default makeStyles
