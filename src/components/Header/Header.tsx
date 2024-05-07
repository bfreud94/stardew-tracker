import { FC } from 'react'
import { data } from '../../api/index'
import makeStyles from './Header.styles'
import { SEASON_ID_MAP, SeasonId, isValidSeasonId } from '../../constants'

const Header: FC = () => {
	const styles = makeStyles()
	// change this
	const seasonId = data.season as SeasonId

	if (!isValidSeasonId(seasonId)) {
		return null
	}

	const season = SEASON_ID_MAP[seasonId]
	return (
		<div style={styles.header}>
			<span>{season}</span>
		</div>
	)
}

export default Header
