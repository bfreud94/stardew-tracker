import { FC } from 'react'
import { getOtherItemsGrandTotal } from '../../../util'
import OtherItemsHeader from './OtherItemsHeader/OtherItemsHeader'
import OtherItemComponent from './OtherItemsComponent/OtherItemsComponent'
import makeStyles from './OtherItems.styles'
import { OtherItemsProps } from './OtherItems.types'

const OtherItems: FC<OtherItemsProps> = ({
	otherItemsState,
	setOtherItemsState
}) => {
	const styles = makeStyles()
	const total = getOtherItemsGrandTotal(otherItemsState)
	return (
		<>
			<OtherItemsHeader total={total} setState={setOtherItemsState} />
			<div style={styles.otherItemContainer}>
				{Object.keys(otherItemsState).map((item) => (
					<OtherItemComponent key={item} itemName={item} state={otherItemsState} setState={setOtherItemsState} />
				))}
			</div>
		</>
	)
}
export default OtherItems
