import { FC } from 'react'
import { Button } from '@mui/material'
import {
	ArrowBack as ArrowBackIcon,
	ArrowForward as ArrowForwardIcon
 } from '@mui/icons-material'
 import { SEASONS } from '../../../constants'
 import { Season } from '../../../types'
 import { changeSeason } from '../../../util'
import makeStyles from './CalendarHeader.styles'
import { CalendarHeaderProps } from './CalendarHeader.types'

const CalendarHeader: FC<CalendarHeaderProps> = ({
	season,
	setSeason
}) => {
	const styles = makeStyles()
	const calendarButtons = SEASONS.map((season: Season) => (
		<Button
			key={season}
			disableRipple
			style={styles.changeSeasonButton}
			sx={styles.changeSeasonButtonSx}
			onClick={() => setSeason(season)}
		>
			{season}
		</Button>
	))
	calendarButtons.splice(2, 0, <span key='current-season'>{season}</span>)
	return (
		<div style={styles.header}>
			<ArrowBackIcon style={styles.header} onClick={() => changeSeason(false, season, setSeason)} />
			{calendarButtons}
			<ArrowForwardIcon style={styles.header} onClick={() => changeSeason(true, season, setSeason)} />
		</div>
	)
}

export default CalendarHeader
