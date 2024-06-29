import { FC } from 'react'
import ResetButton from '../ResetButton/ResetButton'
import { resetFishAmount } from '../../../state'
import { getTotalForFish } from '../../../util'
import makeStyles from './FishGroupHeader.styles'
import { FishGroupHeaderProps } from './FishGroupHeader.types'

const FishGroupHeader: FC<FishGroupHeaderProps> = ({
	fishItem,
	fishName,
	fishState,
	setState
}) => {
	const styles = makeStyles()
	const totalForFish = getTotalForFish(fishItem, fishName, fishState)
	return (
		<div style={styles.fishGroupHeader}>
			<span>{fishName} {totalForFish}</span>
			<ResetButton buttonText='Reset' resetFunction={resetFishAmount} functionArgs={[fishName, fishState, setState]} />
		</div>
	)
}

export default FishGroupHeader
