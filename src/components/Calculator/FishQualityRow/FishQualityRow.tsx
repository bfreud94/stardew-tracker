import { FC } from 'react'
import ItemWithInput from '../ItemWithInput/ItemWithInput'
import { getFishQualityRowText } from '../../../copy'
import { setFishState } from '../../../state'
import { getFishAmount, getFishItemFromData, getFishRowTotal } from '../../../util'
import { QualityName } from '../../../types'
import makeStyles from './FishQualityRow.styles'
import { FishQualityRowProps } from './FishQualityRow.types'

const FishQualityRow: FC<FishQualityRowProps> = ({
	fishName,
	fishState,
	quality,
	setState
}) => {
	const styles = makeStyles()
	const fishAmount = getFishAmount(fishState, fishName, quality)
	const fishItem = getFishItemFromData(fishName)

	if (fishItem === null) {
		return null
	}

	const fishItemQuality = fishItem[quality as QualityName]
	const total = getFishRowTotal(fishAmount, fishItemQuality)
	const { fishNameAndQuality, multiplier, textRightOfInput } = getFishQualityRowText(fishName, fishItemQuality, quality, total)

	return (
		<div key={quality} style={styles.fishQualityRow}>
			<ItemWithInput
				costAndMultiplier={multiplier}
				ellipsesAndTotal={textRightOfInput}
				itemName={fishNameAndQuality}
				onChangeFunction={setFishState}
				onChangeFunctionArgs={[fishName, quality, setState]}
				value={fishAmount}
			/>
		</div>
	)
}

export default FishQualityRow
