import { FC } from 'react'
import { ellipses } from '../../../util'
import makeStyles from './FishQualityRow.styles'
import { FishQualityRowProps } from './FishQualityRow.types'

const FishQualityRow: FC<FishQualityRowProps> = ({
	fishItem,
	fishName,
	fishState,
	quality,
	setFishState
}) => {
	const styles = makeStyles()
	const fishAmount = fishState[fishName][quality]
	const fishItemValue = fishItem[quality]
	const total = fishAmount * fishItemValue
	return (
		<div key={quality}>
			{fishName} ({quality}) : {fishItemValue} x
			<input style={styles.fishAmountInput} type='text' onChange={(e) => {
				setFishState({
					...fishState,
					[fishName]: {
						...fishState[fishName],
						[quality]: e.target.value
					}
				})
			}} value={fishAmount}/>
			{ellipses}
			{total}
		</div>
	)
}

export default FishQualityRow
