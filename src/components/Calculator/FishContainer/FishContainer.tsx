import { FC, useState } from 'react'
import { createFishState } from '../../../state'
import { FishState } from '../../../types'
import { getGrandTotal } from '../../../util'
import FishGroup from '../FishGroup/FishGroup'
import FishHeader from '../FishHeader/FishHeader'
import makeStyles from './FishContainer.styles'

const FishContainer: FC = () => {
	const [fishState, setFishState] = useState<FishState>(createFishState())
	const grandTotal = getGrandTotal(fishState)
	const styles = makeStyles()
	return (
		<div style={styles.fishContainer}>
			<FishHeader grandTotal={grandTotal} setFishState={setFishState} />
			<div style={styles.fishNameContainer}>
				{Object.keys(fishState).map((fishName: string) =>
					<FishGroup key={fishName} fishName={fishName} fishState={fishState} setFishState={setFishState} />
				)}
			</div>
		</div>
	)

}

export default FishContainer
