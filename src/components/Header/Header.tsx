import { FC } from 'react'
import makeStyles from './Header.styles'
import { HeaderProps } from './Header.types'

const Header: FC<HeaderProps> = ({
	season
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.header}>
			<span>{season}</span>
		</div>
	)
}

export default Header
