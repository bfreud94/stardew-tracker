import { ItemWithInputStyles } from './ItemWithInput.types'

const makeStyles = (): ItemWithInputStyles => ({
	costAndMultiplier: {
		width: '75px'
	},
	ellipsesAndTotal: {
		width: '130px'
	},
	inputAmount: {
		border: '1px solid #ccc',
		borderRadius: '5px',
		fontSize: '16px',
		margin: '0px 10px 5px 10px',
		padding: '10px',
		width: '50px'
	},
	itemName: {
		width: '205px'
	}
})

export default makeStyles
