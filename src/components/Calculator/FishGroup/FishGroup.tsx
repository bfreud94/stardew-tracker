import { FC } from 'react'
import { data } from '../../../api/index'
import { getTotalForFish } from '../../../util'
import FishGroupHeader from '../FishGroupHeader/FishGroupHeader'
import FishQualityRow from '../FishQualityRow/FishQualityRow'
import makeStyles from './FishGroup.styles'
import { FishGroupProps } from './FishGroup.types'

const FishGroup: FC<FishGroupProps> = ({
	fishName,
	fishState,
	setFishState
}) => {
	const styles = makeStyles()
	const fishItem = data.items.fish[fishName]
	const fishItemQualityComponents = Object.keys(fishItem).map((quality) => (
		<FishQualityRow key={quality} fishItem={fishItem} fishName={fishName} fishState={fishState} quality={quality} setFishState={setFishState} />
	))
	return (
		<div style={styles.fishGroup}>
			<FishGroupHeader fishItem={fishItem} fishName={fishName} fishState={fishState} setFishState={setFishState} />
			<div key={fishName}>
				{fishItemQualityComponents}
			</div>
		</div>
	)
}

export default FishGroup

