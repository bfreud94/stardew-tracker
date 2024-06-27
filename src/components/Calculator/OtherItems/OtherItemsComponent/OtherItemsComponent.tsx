import { ChangeEvent, FC } from 'react'
import { getOtherItem } from '../../../../util'
import ItemWithInput from '../../ItemWithInput/ItemWithInput'
import OtherItemHeader from '../OtherItemHeader/OtherItemHeader'
import { getOtherItemCopy } from '../../../../copy/calculator'
import { OtherItemsState } from '../../../../types'
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
						<ItemWithInput itemName={subItemName} costAndMultiplier={costAndMultiplier} ellipsesAndTotal={ellipsesAndTotal} onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setState((prevState: OtherItemsState) => {
								const prevItems = prevState[itemName]
								return {
									...prevState,
									[itemName]: {
										...prevItems,
										[subItemName]: e.target.value
									}
								}
							})
						}} value={subItemValue} />
					</div>
				)
			})}
		</div>
	)
}

export default OtherItemComponent
