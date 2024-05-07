import { FC } from 'react'
import { createState } from '../../../util/index'
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
			<button onClick={() => setFishState(createState())}>Reset All</button>
		</h3>
	)
}

export default FishHeader
