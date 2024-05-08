import { FC } from 'react'
import { data } from '../../../../api'
import ResetButton from '../../ResetButton/ResetButton'
import { resetOtherItemState } from '../../../../util'
import makeStyles from './OtherItemHeader.styles'
import { OtherItemHeaderProps } from './OtherItemHeader.types'

const OtherItemHeader: FC<OtherItemHeaderProps> = ({
	item,
	state,
	setState
}) => {
	const styles = makeStyles()
	const itemData = data.items[item as keyof typeof data.items]
	const itemTotal = Object.keys(itemData)
		.reduce((acc: number, subItem: string) =>
			acc + (Number(state[item as keyof typeof state][subItem]) * Number(itemData[subItem]))
		, 0)
	const formattedItem = item.charAt(0).toUpperCase() + item.slice(1)
	return (
		<h3>
			{formattedItem} {itemTotal}
			<span style={styles.subItem}>
				<ResetButton buttonText={`Reset ${formattedItem}`} resetFunction={resetOtherItemState} functionArgs={[state, setState, item]} />
			</span>
		</h3>
	)
}

export default OtherItemHeader
