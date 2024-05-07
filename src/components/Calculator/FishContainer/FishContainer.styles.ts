import { FishContainerStyles } from './FishContainer.types'

const makeStyles = (): FishContainerStyles => ({
	fishNameContainer: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: '30px 0px'
	}
})

export default makeStyles
