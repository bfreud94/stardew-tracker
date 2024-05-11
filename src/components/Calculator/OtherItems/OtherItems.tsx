import { FC, useState } from 'react'
import { data } from '../../../api'
import { createOtherItemsState } from '../../../state'
import { getTotalForOtherItems } from '../../../util'
import OtherItemsHeader from './OtherItemsHeader/OtherItemsHeader'
import OtherItemComponent from './OtherItemsComponent/OtherItemsComponent'
import makeStyles from './OtherItems.styles'
import { OtherItemsState } from './OtherItems.types'

const OtherItems: FC = () => {
	const [otherItemsState, setOtherItemsState] = useState<OtherItemsState>({
		gems: createOtherItemsState(data.items.gems),
		minerals: createOtherItemsState(data.items.minerals),
		geodes: createOtherItemsState(data.items.geodes)
	})
	const styles = makeStyles()
	const total = getTotalForOtherItems(otherItemsState)
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
