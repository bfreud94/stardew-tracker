import { OtherItemStyles } from './OtherItems.types'

const makeStyles = (): OtherItemStyles => ({
	otherItemContainer: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)'
	}
})

export default makeStyles
