import { VillagerDirectoryStyles } from './VillagerDirectory.types'

const makeStyles = (): VillagerDirectoryStyles => ({
	villagerContainer: {
		marginBottom: '25px'
	},
	villagerDirectoryContainer: {
		display: 'grid',
		fontFamily: 'SVFont',
		fontSize: '24px',
		gridTemplateColumns: 'repeat(8, 1fr)',
		marginTop: '10px',
		padding: '0px 10px'
	},
	zeroMargin: {
		margin: '0'
	}
})

export default makeStyles
