import { FC } from 'react'
import { Typography } from '@mui/material'
import makeStyles from './NoteModalHeader.styles'
import { NoteModalHeaderProps } from './NoteModalHeader.types'

const NoteModalHeader: FC<NoteModalHeaderProps> = ({
	day,
	season
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.header}>
			<Typography style={styles.notesText} variant='h6'>{`Notes for ${season}, Day ${day}`}</Typography>
		</div>
	)
}

export default NoteModalHeader
