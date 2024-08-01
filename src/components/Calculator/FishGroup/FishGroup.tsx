import { FC } from 'react'
import FishGroupHeader from '../FishGroupHeader/FishGroupHeader'
import FishQualityRow from '../FishQualityRow/FishQualityRow'
import { getFishItemFromData } from '../../../util'
import makeStyles from './FishGroup.styles'
import { FishGroupProps } from './FishGroup.types'

const FishGroup: FC<FishGroupProps> = ({
	fishName,
	fishState,
	setFishState
}) => {
	const styles = makeStyles()
	const fishItem = getFishItemFromData(fishName)

	if (fishItem === null) {
		return null
	}

	const fishItemQualityRows = Object.keys(fishItem).map((quality: string) => (
		<FishQualityRow key={quality} fishName={fishName} fishState={fishState} quality={quality} setState={setFishState} />
	))

	return (
		<div style={styles.fishGroup}>
			<FishGroupHeader fishItem={fishItem} fishName={fishName} fishState={fishState} setState={setFishState} />
			<div key={fishName}>
				{fishItemQualityRows}
			</div>
		</div>
	)
}

export default FishGroup