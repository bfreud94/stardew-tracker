import { ChangeEvent } from 'react'
import makeStyles from './ItemWithInput.styles'
import { ItemWithInputProps } from './ItemWithInput.types'

const ItemWithInput = ({
	itemName,
	costAndMultiplier,
	ellipsesAndTotal,
	onChangeFunction,
	onChangeFunctionArgs,
	value
}: ItemWithInputProps) => {
	const styles = makeStyles()
	return (
		<>
			<span style={styles.itemName}>{itemName}</span>
			<span style={styles.costAndMultiplier}>{costAndMultiplier}</span>
			<input
				onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeFunction(e.target.value, ...onChangeFunctionArgs)}
				style={styles.inputAmount}
				type='text'
				value={value} />
			<span style={styles.ellipsesAndTotal}>{ellipsesAndTotal}</span>
		</>
	)
}

export default ItemWithInput