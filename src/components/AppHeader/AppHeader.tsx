import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { APP_HEADER_ELEMENTS, setActiveComponent } from '../../util'
import makeStyles from './AppHeader.styles'

const AppHeader: FC = () => {
	const styles = makeStyles()
	const navigate = useNavigate()
    return (
		<div style={styles.container}>
			{APP_HEADER_ELEMENTS.map((element) => (
				<div key={element} style={styles.headerElement} onClick={() => setActiveComponent(element, navigate)}>
					{element}
				</div>
			))}
		</div>
	)
}

export default AppHeader