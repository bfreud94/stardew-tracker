import { FishContainerStyles } from './FishContainer.types'

const makeStyles = (): FishContainerStyles => ({
	fishAmountInput: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        padding: '10px',
		width: '50px'
    },
	fishHeader: {
		margin: '0px 0px 50px 0px'
	},
	fishNameContainer: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gap: '30px 0px'
	}
})

export default makeStyles
