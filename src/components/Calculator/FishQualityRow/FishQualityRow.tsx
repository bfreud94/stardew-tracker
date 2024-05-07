import { FC } from 'react'
import { getEllipses } from '../../../util'
import makeStyles from './FishQualityRow.styles'
import { FishQualityRowProps } from './FishQualityRow.types'

const getFishQualityRowText = (
	fishName: string,
	fishItemValue: number,
	quality: string,
	total: number
) => {
	const ellipses = getEllipses(total)
	let textRightOfInput = `${ellipses} ${total}`
	const fishNameAndQuality = `${fishName} (${quality}) :`
	const multiplier = `${fishItemValue} x`
	return {
		fishNameAndQuality,
		multiplier,
		textRightOfInput
	}
}


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
			<span>{fishNameAndQuality}</span>
			<span>{multiplier}</span>
			<input style={styles.fishAmountInput} type='text' onChange={(e) => {
				setFishState({
					...fishState,
					[fishName]: {
						...fishState[fishName],
						[quality]: e.target.value
					}
				})
			}} value={fishAmount}/>
			{textRightOfInput}
		</div>
	)
}

export default FishQualityRow
