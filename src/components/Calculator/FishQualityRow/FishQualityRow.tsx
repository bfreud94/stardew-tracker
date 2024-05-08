import { ChangeEvent, FC } from 'react'
import { getFishQualityRowText } from '../../../util'
import makeStyles from './FishQualityRow.styles'
import { FishQualityRowProps } from './FishQualityRow.types'
import ItemWithInput from '../ItemWithInput/ItemWithInput'

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
	const { fishNameAndQuality, multiplier, textRightOfInput } = getFishQualityRowText(fishName, fishItemValue, quality, total)
	return (
		<div key={quality} style={styles.fishQualityRow}>
			<ItemWithInput itemName={fishNameAndQuality} costAndMultiplier={multiplier} ellipsesAndTotal={textRightOfInput} onChange={(e: ChangeEvent<HTMLInputElement>) => {
				setFishState({
					...fishState,
					[fishName]: {
						...fishState[fishName],
						[quality]: e.target.value
					}
				})
			}} value={fishAmount} />
		</div>
	)
}

export default FishQualityRow
