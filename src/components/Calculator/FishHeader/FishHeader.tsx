import { FC } from 'react'
import { createState } from '../../../util/index'
import makeStyles from './FishHeader.styles'
import { FishHeaderProps } from './FishHeader.types'
import ResetButton from '../ResetButton/ResetButton'

const FishHeader: FC<FishHeaderProps> = ({
	grandTotal,
	setFishState
}) => {
	const styles = makeStyles()
	return (
		<h3 style={styles.fishHeader}>
			Fish {grandTotal}
			<ResetButton buttonText='Reset All' resetFunction={setFishState} functionArgs={[createState()]} />
		</h3>
	)
}

export default FishHeader
