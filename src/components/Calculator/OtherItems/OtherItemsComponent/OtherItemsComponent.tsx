import { ChangeEvent, FC } from 'react'
import { data } from '../../../../api'
import { getEllipses } from '../../../../util'
import ItemWithInput from '../../ItemWithInput/ItemWithInput'
import makeStyles from './OtherItemsComponent.styles'
import { OtherItemsComponentProps } from './OtherItemsComponent.types'
import OtherItemHeader from '../OtherItemHeader/OtherItemHeader'

const OtherItemComponent: FC<OtherItemsComponentProps> = ({
	itemName,
	state,
	setState
}) => {
	const styles = makeStyles()
	const item = data.items[itemName as keyof typeof data.items]
	return (
		<div style={styles.otherItemComponent}>
			<OtherItemHeader item={itemName} state={state} setState={setState} />
			{Object.keys(item).map((subItemName: any) => {
				const items = state[itemName as keyof typeof state]
				const value = items[subItemName as keyof typeof items]
				const total = parseInt(String(value)) * parseInt(String(item[subItemName]))
				const ellipsesAndTotal = `${getEllipses(total)} ${total}`
				const costAndMultiplier = `${item[subItemName]} x`
				return (
					<div key={subItemName} style={styles.inputContainer}>
						<ItemWithInput itemName={subItemName} costAndMultiplier={costAndMultiplier} ellipsesAndTotal={ellipsesAndTotal} onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setState({
								...state,
								[itemName]: {
									...items,
									[subItemName]: e.target.value
								}
							})
						}} value={String(value)} />
					</div>
				)
			})}
		</div>
	)
}

export default OtherItemComponent
