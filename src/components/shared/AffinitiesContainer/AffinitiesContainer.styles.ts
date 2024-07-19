import { AffinitiesContainerStyles } from './AffinitiesContainer.types'

const makeStyles = (): AffinitiesContainerStyles => ({
	affinitiesContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		maxHeight: '200px',
		minWidth: '1100px',
		overflowY: 'auto'
	},
	affinitiesScrollableContainer: {
		overflowX: 'auto'
	}
})

export default makeStyles
