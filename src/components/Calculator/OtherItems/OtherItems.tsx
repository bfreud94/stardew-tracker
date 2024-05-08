import { FC, useState } from 'react'
import { data } from '../../../api/index'
import { createOtherItemsState, getTotalForOtherItems } from '../../../util'
import OtherItemsHeader from './OtherItemsHeader/OtherItemsHeader'
import OtherItemComponent from './OtherItemsComponent/OtherItemsComponent'
import { OtherItemsState } from './OtherItems.types'

const OtherItems: FC = () => {
	const [otherItemsState, setOtherItemsState] = useState<OtherItemsState>({
		gems: createOtherItemsState(data.items.gems),
		minerals: createOtherItemsState(data.items.minerals),
		geodes: createOtherItemsState(data.items.geodes)
	})
	const total = getTotalForOtherItems(otherItemsState)
	return (
		<>
			<OtherItemsHeader total={total} setState={setOtherItemsState} />
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
				{Object.keys(otherItemsState).map((item) => (
					<OtherItemComponent key={item} itemName={item} state={otherItemsState} setState={setOtherItemsState} />
				))}
			</div>
		</>
	)
}
export default OtherItems
