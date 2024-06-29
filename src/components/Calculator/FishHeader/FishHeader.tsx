import { FC } from 'react'
import ResetButton from '../ResetButton/ResetButton'
import { createFishState } from '../../../state'
import makeStyles from './FishHeader.styles'
import { FishHeaderProps } from './FishHeader.types'

const FishHeader: FC<FishHeaderProps> = ({
	grandTotal,
	setFishState
}) => {
	const styles = makeStyles()
	return (
		<h3 style={styles.fishHeader}>
			Fish {grandTotal}
			<ResetButton buttonText='Reset All' resetFunction={setFishState} functionArgs={[createFishState()]} />
		</h3>
	)
}

export default FishHeader
