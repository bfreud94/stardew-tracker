import { FC } from 'react'
import { getTotalForFish, resetFishAmount } from '../../../util'
import makeStyles from './FishGroupHeader.styles'
import { FishGroupHeaderProps } from './FishGroupHeader.types'
import ResetButton from '../ResetButton/ResetButton'

const FishGroupHeader: FC<FishGroupHeaderProps> = ({
	fishItem,
	fishName,
	fishState,
	setFishState
}) => {
	const styles = makeStyles()
	const totalForFish = getTotalForFish(fishItem, fishName, fishState)
	return (
		<div style={styles.fishGroupHeader}>
			<span>{fishName} {totalForFish}</span>
			<ResetButton buttonText='Reset' resetFunction={resetFishAmount} functionArgs={[fishName, fishState, setFishState]} />
		</div>
	)
}

export default FishGroupHeader
