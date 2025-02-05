import { FC, useState } from 'react'
import CalculatorHeader from './CalculatorHeader/CalculatorHeader'
import FishContainer from './FishContainer/FishContainer'
import OtherItems from './OtherItems/OtherItems'
import { data } from '../../api'
import { createFishState, createOtherItemsState } from '../../state'
import { FishState, OtherItemsState } from '../../types'
import { getFishGrandTotal, getOtherItemsGrandTotal } from '../../util'
import makeStyles from './Calculator.styles'

const Calculator: FC = () => {
	const [fishState, setFishState] = useState<FishState>(createFishState())
	const [otherItemsState, setOtherItemsState] = useState<OtherItemsState>({
		gems: createOtherItemsState(data.items.gems),
		minerals: createOtherItemsState(data.items.minerals),
		geodes: createOtherItemsState(data.items.geodes),
		'Misc Items': createOtherItemsState(data.items['Misc Items'])
	})

	const styles = makeStyles()

	const fishTotal = getFishGrandTotal(fishState)
	const otherItemsTotal = getOtherItemsGrandTotal(otherItemsState)

	return (
		<div style={styles.container}>
			<CalculatorHeader fishTotal={fishTotal} otherItemsTotal={otherItemsTotal} setFishState={setFishState} setOtherItemsState={setOtherItemsState} />
			<FishContainer fishState={fishState} setFishState={setFishState} />
			<OtherItems otherItemsState={otherItemsState} setOtherItemsState={setOtherItemsState} />
		</div>
	)
}

export default Calculator
