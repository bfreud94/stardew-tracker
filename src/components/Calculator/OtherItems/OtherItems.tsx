import { FC } from 'react'
import OtherItemComponent from './OtherItemsComponent/OtherItemsComponent'
import OtherItemsHeader from './OtherItemsHeader/OtherItemsHeader'
import { getOtherItemsGrandTotal } from '../../../util'
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
				{Object.keys(otherItemsState).map((item: string) => (
					<OtherItemComponent key={item} itemName={item} state={otherItemsState} setState={setOtherItemsState} />
				))}
			</div>
		</>
	)
}
export default OtherItems
