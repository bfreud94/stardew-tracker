import { AffinitiesContainerStyles } from './AffinitiesContainer.types'

const makeStyles = (): AffinitiesContainerStyles => ({
	affinitiesContainer: {
		display: 'flex',
		justifyContent: 'end',
		maxHeight: '200px',
		overflowY: 'auto'
	}
})

export default makeStyles
