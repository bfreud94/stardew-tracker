import { FC } from 'react'
import ResetButton from '../ResetButton/ResetButton'
import { resetFishAndOtherItems } from '../../../state'
import { CalculatorHeaderProps } from './CalculatorHeader.types'

const CalculatorHeader: FC<CalculatorHeaderProps> = ({
	fishTotal,
	otherItemsTotal,
	setFishState,
	setOtherItemsState
}) => {
	return (
		<div>
			<h2>Total Money {fishTotal + otherItemsTotal}</h2>
			<ResetButton buttonText='Reset All' resetFunction={resetFishAndOtherItems} functionArgs={[setFishState, setOtherItemsState]} />
		</div>
	)
}

export default CalculatorHeader
