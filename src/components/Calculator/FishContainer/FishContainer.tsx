import { FC } from 'react'
import FishGroup from '../FishGroup/FishGroup'
import FishHeader from '../FishHeader/FishHeader'
import { getFishGrandTotal } from '../../../util'
import makeStyles from './FishContainer.styles'
import { FishContainerProps } from './FishContainer.types'

const FishContainer: FC<FishContainerProps> = ({
	fishState,
	setFishState
}) => {
	const grandTotal = getFishGrandTotal(fishState)
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
