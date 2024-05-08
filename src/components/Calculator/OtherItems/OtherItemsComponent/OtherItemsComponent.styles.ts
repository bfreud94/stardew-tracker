import { OtherItemsComponentStyles } from './OtherItemsComponent.types'

const makeStyles = (): OtherItemsComponentStyles => ({
	inputContainer: {
		display: 'inline-grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		width: '500px'
	},
	otherItemComponent: {
		display: 'flex',
		flexDirection: 'column'
	}
})

export default makeStyles
