import { FC } from 'react'
import ResetButton from '../ResetButton/ResetButton'
import { resetFishAndOtherItems } from '../../../state'
import makeStyles from './CalculatorHeader.styles'
import { CalculatorHeaderProps } from './CalculatorHeader.types'

const CalculatorHeader: FC<CalculatorHeaderProps> = ({
	fishTotal,
	otherItemsTotal,
	setFishState,
	setOtherItemsState
}) => {
	const styles = makeStyles()
	return (
		<>
			<h2 style={styles.calculatorHeader}>Total Money {fishTotal + otherItemsTotal}</h2>
			<ResetButton buttonText='Reset All' resetFunction={resetFishAndOtherItems} functionArgs={[setFishState, setOtherItemsState]} />
		</>
	)
}

export default CalculatorHeader
