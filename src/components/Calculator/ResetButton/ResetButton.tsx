import { FC } from 'react'
import makeStyles from './ResetButton.styles'
import { ResetButtonProps } from './ResetButton.types'

const ResetButton: FC<ResetButtonProps> = ({
	buttonText,
	functionArgs,
	resetFunction
}) => {
	const styles = makeStyles()
	return (
		<button style={styles.resetButton} onClick={() => resetFunction(...functionArgs)}>{buttonText}</button>
	)
}

export default ResetButton
