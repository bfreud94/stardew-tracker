import { FC, useState } from 'react'
import { data } from '../../../api/index'
import makeStyles from './FishContainer.styles'

const ellipses = ' . . . . . . '

const createState = (): Record<string, any> => {
    return Object.keys(data.items.fish).reduce((acc: Record<string, any>, fishName) => {
        const fishItem = data.items.fish[fishName]
        const fishItemQualityComponents = Object.keys(fishItem).reduce((acc: Record<string, any>, quality) => {
            acc[quality] = 0
            return acc
        }, {})
        acc[fishName] = fishItemQualityComponents
        return acc
    }, {})
}

const getGrandTotal = (fishState: any) => Object.keys(data.items.fish).reduce((acc, fishName) => {
	const fishItem = data.items.fish[fishName]
	const totalForFish = getTotalForFish(fishItem, fishName, fishState)
	return acc + totalForFish
}, 0)

const getTotalForFish = (fishItem: any, fishName: string, fishState: Record<string, any>): number => Object.keys(fishItem)
	.reduce((acc, quality) => {
		const fishAmount = fishState[fishName][quality]
		const fishItemValue = fishItem[quality]
		const total = fishItemValue * fishAmount
		return acc + total
	}, 0)

const resetFishAmount = (fishName: string, fishState: Record<string, any>, setFishState: (fishState: Record<string, any>) => void) => {
	const fishItem = data.items.fish[fishName]
	const fishItemQualityAmounts = Object.keys(fishItem).reduce((acc: Record<string, any>, quality) => {
		acc[quality] = 0
		return acc
	}, {})
	setFishState({
		...fishState,
		[fishName]: fishItemQualityAmounts
	})
}

const FishContainer: FC = () => {
	const [fishState, setFishState] = useState(createState())
	const grandTotal = getGrandTotal(fishState)
	const styles = makeStyles()
	return (
		<>
			<h3 style={styles.fishHeader}>
				Fish {grandTotal}
				<button onClick={() => setFishState(createState())}>Reset All</button>
			</h3>
			<div style={styles.fishNameContainer}>
				{Object.keys(data.items.fish).map((fishName) => {
					const fishItem = data.items.fish[fishName]
					const totalForFish = getTotalForFish(fishItem, fishName, fishState)
					const fishItemQualityComponents = Object.keys(fishItem).map((quality) => {
						const fishItemValue = fishItem[quality]
						const fishAmount = fishState[fishName][quality]
						const total = fishItemValue * fishAmount
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
								}} value={fishAmount} />
								{ellipses}
								{total}
							</div>
						)
					})
					return (
						<div>
							<span>{fishName} {totalForFish}</span>
							<button onClick={() => resetFishAmount(fishName, fishState, setFishState)}>Reset</button>
							<div key={fishName}>
								{fishItemQualityComponents}
							</div>
						</div>
					)
				})}
			</div>
		</>
	)

}

export default FishContainer
