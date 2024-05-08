import { FC, useState } from 'react'
import { data } from '../../../api/index'
import { createOtherItemsState } from '../../../util'
import ItemWithInput from '../ItemWithInput/ItemWithInput'
import makeStyles from './OtherItems.styles'
import { OtherItemsProps } from './OtherItems.types'

const Gems = () => {
	const styles = makeStyles()
	const gems = data.items.gems
	return (
		<div>
			<ItemWithInput itemName='Gems' costAndMultiplier='Cost' ellipsesAndTotal='Total' onChange={() => {}} value={''} />
		</div>
	)

}

const OtherItems: FC<OtherItemsProps> = () => {
	const [otherItemsState, setOtherItemsState] = useState(createOtherItemsState())
	const styles = makeStyles()
	return (
		<div>
			
		</div>
	)
}

export default OtherItems
