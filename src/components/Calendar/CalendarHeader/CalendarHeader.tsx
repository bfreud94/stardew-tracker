import { FC } from 'react'
import {
	ArrowBack as ArrowBackIcon,
	ArrowForward as ArrowForwardIcon
 } from '@mui/icons-material'
 import { changeSeason } from '../../../util'
import makeStyles from './CalendarHeader.styles'
import { CalendarHeaderProps } from './CalendarHeader.types'

const CalendarHeader: FC<CalendarHeaderProps> = ({
	season,
	setSeason
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.header}>
			<ArrowBackIcon style={styles.header} onClick={() => changeSeason(season, setSeason)} />
			<span>{season}</span>
			<ArrowForwardIcon style={styles.header} onClick={() => changeSeason(season, setSeason)} />
		</div>
	)
}

export default CalendarHeader
