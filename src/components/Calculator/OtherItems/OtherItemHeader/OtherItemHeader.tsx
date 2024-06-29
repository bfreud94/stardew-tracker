import { FC } from 'react'
import ResetButton from '../../ResetButton/ResetButton'
import { getFormattedOtherItem } from '../../../../copy'
import { resetOtherItemState } from '../../../../state'
import { getOtherItemSubTotal } from '../../../../util'
import makeStyles from './OtherItemHeader.styles'
import { OtherItemHeaderProps } from './OtherItemHeader.types'

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
