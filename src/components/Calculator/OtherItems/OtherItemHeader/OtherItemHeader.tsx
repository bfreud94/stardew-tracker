import { FC } from 'react'
import ResetButton from '../../ResetButton/ResetButton'
import { getOtherItemSubTotal } from '../../../../util'
import { resetOtherItemState } from '../../../../state'
import { getFormattedOtherItem } from '../../../../copy/calculator'
import { OtherItemHeaderProps } from './OtherItemHeader.types'
import makeStyles from './OtherItemHeader.styles'

const OtherItemHeader: FC<OtherItemHeaderProps> = ({
	item,
	state,
	setState
}) => {
	const styles = makeStyles()
	const itemTotal = getOtherItemSubTotal(state, item)
	const formattedItem = getFormattedOtherItem(item)
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
