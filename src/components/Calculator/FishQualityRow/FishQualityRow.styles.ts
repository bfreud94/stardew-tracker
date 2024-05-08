import { FishQualityRowStyles } from './FishQualityRow.types'

const makeStyles = (): FishQualityRowStyles => ({
	fishAmountInput: {
		border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
		margin: '0px 0px 5px 10px',
        padding: '10px',
		width: '50px'
	},
	fishQualityRow: {
		display: 'inline-grid',
		gridTemplateColumns: 'repeat(4, 1fr)'
	}
})

export default makeStyles
