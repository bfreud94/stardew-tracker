import { FC, SetStateAction, useState } from 'react'
import { data } from '../../../api/index'
import FishHeader from '../FishHeader/FishHeader'
import { createState, getGrandTotal } from '../../../util/index'
import makeStyles from './FishContainer.styles'
import FishGroup from '../FishGroup/FishGroup'

const FishContainer: FC = () => {
	const [fishState, setFishState] = useState(createState())
	const grandTotal = getGrandTotal(fishState)
	const styles = makeStyles()
	return (
		<>
			<FishHeader grandTotal={grandTotal} setFishState={setFishState} />
			<div style={styles.fishNameContainer}>
				{Object.keys(data.items.fish).map((fishName) => 
					<FishGroup fishName={fishName} fishState={fishState} setFishState={setFishState} />
				)}
			</div>
		</>
	)

}

export default FishContainer
