import makeStyles from './ItemWithInput.styles'
import { ItemWithInputProps } from './ItemWithInput.types'

const ItemWithInput = ({
	itemName,
	costAndMultiplier,
	ellipsesAndTotal,
	onChange,
	value
}: ItemWithInputProps) => {
	const styles = makeStyles()
	return (
		<>
			<span style={styles.itemName}>{itemName}</span>
			<span style={styles.costAndMultiplier}>{costAndMultiplier}</span>
			<input style={styles.inputAmount} type='text' onChange={onChange} value={value} />
			<span style={styles.ellipsesAndTotal}>{ellipsesAndTotal}</span>
		</>
	)
}

export default ItemWithInput