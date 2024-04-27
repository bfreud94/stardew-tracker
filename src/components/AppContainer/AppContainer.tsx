import { FC } from 'react'
import makeStyles from './AppContainer.styles'
import { AppContainerProps } from './AppContainer.types'

const AppContainer: FC<AppContainerProps> = ({ children }) => {
	const styles = makeStyles()
	return (
		<div style={styles.container}>
			{children}
		</div>
	)
}

export default AppContainer
