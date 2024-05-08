import { FC } from 'react'
import FishContainer from './FishContainer/FishContainer'
import OtherItems from './OtherItems/OtherItems'
import makeStyles from './Calculator.styles'

const Calculator: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.container}>
			<div style={styles.fishContainer}>
				<FishContainer />
			</div>
			<OtherItems />
		</div>
	)
}

export default Calculator
