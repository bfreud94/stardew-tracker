import { FC } from 'react'
import { createFishState } from '../../../util/index'
import { data } from '../../../api'
import ResetButton from '../ResetButton/ResetButton'
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
