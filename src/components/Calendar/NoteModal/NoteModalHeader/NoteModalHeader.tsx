import { FC } from 'react'
import { Typography } from '@mui/material'
import makeStyles from './NoteModalHeader.styles'

const NoteModalHeader: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.header}>
			<Typography style={styles.notesText} variant='h6'>Notes</Typography>
		</div>
	)
}

export default NoteModalHeader
