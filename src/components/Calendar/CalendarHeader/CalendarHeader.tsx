import { FC } from 'react'
import { Button } from '@mui/material'
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
			<ArrowBackIcon style={styles.header} onClick={() => changeSeason(false, season, setSeason)} />
			<Button style={styles.changeSeasonButton} sx={styles.changeSeasonButtonSx} onClick={() => setSeason('Spring')}>
				Spring
			</Button>
			<Button style={styles.changeSeasonButton} sx={styles.changeSeasonButtonSx} onClick={() => setSeason('Summer')}>
				Summer
			</Button>
			<span>{season}</span>
			<Button style={styles.changeSeasonButton} sx={styles.changeSeasonButtonSx} onClick={() => setSeason('Fall')}>
				Fall
			</Button>
			<Button style={styles.changeSeasonButton} sx={styles.changeSeasonButtonSx} onClick={() => setSeason('Winter')}>
				Winter
			</Button>
			<ArrowForwardIcon style={styles.header} onClick={() => changeSeason(true, season, setSeason)} />
		</div>
	)
}

export default CalendarHeader
