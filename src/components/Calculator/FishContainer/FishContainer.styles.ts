import { FishContainerStyles } from './FishContainer.types'

const makeStyles = (): FishContainerStyles => ({
	fishContainer: {
		margin: '50px 0px'
	},
	fishNameContainer: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: '30px 0px'
	}
})

export default makeStyles
