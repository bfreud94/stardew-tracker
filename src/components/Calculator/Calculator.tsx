import { FC } from 'react'
import FishContainer from './FishContainer/FishContainer'
import makeStyles from './Calculator.styles'

const Calculator: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.container}>
			<div style={styles.fishContainer}>
				<FishContainer />
			</div>
			Other Items
			<div>

			</div>
		</div>
	)
}

export default Calculator
