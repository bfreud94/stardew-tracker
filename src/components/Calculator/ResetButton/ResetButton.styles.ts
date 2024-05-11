import { ResetButtonStyles } from './ResetButton.types'

const makeStyles = (): ResetButtonStyles => ({
	resetButton: {
		backgroundColor: '#4CAF50',
		color: 'white',
		cursor: 'pointer',
		display: 'inline-block',
		fontFamily: 'SVFont',
		fontSize: '24px',
		margin: '0px 0px 0px 10px',
		padding: '5px 15px',
		textAlign: 'center',
		textDecoration: 'none'
	}
})

export default makeStyles
