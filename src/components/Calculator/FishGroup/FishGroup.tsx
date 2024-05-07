import { FC } from 'react'
import { data } from '../../../api/index'
import { getTotalForFish, resetFishAmount } from '../../../util'
import { FishGroupProps } from './FishGroup.types'
import FishQualityRow from '../FishQualityRow/FishQualityRow'

const FishGroup: FC<FishGroupProps> = ({
	fishName,
	fishState,
	setFishState
}) => {
	const fishItem = data.items.fish[fishName]
	const totalForFish = getTotalForFish(fishItem, fishName, fishState)
	const fishItemQualityComponents = Object.keys(fishItem).map((quality) => (
		<FishQualityRow fishItem={fishItem} fishName={fishName} fishState={fishState} quality={quality} setFishState={setFishState} />
	))
	return (
		<div>
			<span>{fishName} {totalForFish}</span>
			<button onClick={() => resetFishAmount(fishName, fishState, setFishState)}>Reset</button>
			<div key={fishName}>
				{fishItemQualityComponents}
			</div>
		</div>
	)
}

export default FishGroup

