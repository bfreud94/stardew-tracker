import { FC } from 'react'
import ItemWithInput from '../../ItemWithInput/ItemWithInput'
import OtherItemHeader from '../OtherItemHeader/OtherItemHeader'
import { getOtherItemCopy } from '../../../../copy'
import { getOtherItem, itemInputOnChange } from '../../../../util'
import makeStyles from './OtherItemsComponent.styles'
import { OtherItemsComponentProps } from './OtherItemsComponent.types'

const OtherItemComponent: FC<OtherItemsComponentProps> = ({
	itemName,
	state,
	setState
}) => {
	const styles = makeStyles()
	const itemData = getOtherItem(itemName)

	if (!itemData) {
		return null
	}

	return (
		<div style={styles.otherItemComponent}>
			<OtherItemHeader item={itemName} state={state} setState={setState} />
			{Object.keys(itemData).map((subItemName: string) => {
				const { costAndMultiplier, ellipsesAndTotal, subItemValue } = getOtherItemCopy(itemName, itemData, state, subItemName)
				return (
					<div key={subItemName} style={styles.inputContainer}>
						<ItemWithInput
							costAndMultiplier={costAndMultiplier}
							ellipsesAndTotal={ellipsesAndTotal}
							itemName={subItemName}
							onChangeFunction={itemInputOnChange}
							onChangeFunctionArgs={[itemName, setState, subItemName]}
							value={subItemValue}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default OtherItemComponent
