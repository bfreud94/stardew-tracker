import { FC } from 'react'
import { APP_HEADER_ELEMENTS } from '../../util'
import makeStyles from './AppHeader.styles'
import { AppHeaderProps } from './AppHeader.types'

const AppHeader: FC<AppHeaderProps> = ({
	setActiveComponent
}) => {
	const styles = makeStyles()
    return (
		<div style={styles.container}>
			{APP_HEADER_ELEMENTS.map((element, index) => (
				<div key={index} style={styles.headerElement} onClick={() => setActiveComponent(element)}>
					{element}
				</div>
			))}
		</div>
	)
}

export default AppHeader