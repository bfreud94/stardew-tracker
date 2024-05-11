import { FC } from 'react'
import FishContainer from './FishContainer/FishContainer'
import OtherItems from './OtherItems/OtherItems'
import makeStyles from './Calculator.styles'

const Calculator: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.container}>
			<FishContainer />
			<OtherItems />
		</div>
	)
}

export default Calculator
