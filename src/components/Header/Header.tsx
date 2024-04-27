import { FC } from 'react'
import makeStyles from './Header.styles'

const Header: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.header}>
			Spring
		</div>
	)
}

export default Header
