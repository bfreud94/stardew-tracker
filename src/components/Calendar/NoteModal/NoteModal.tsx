import { Dispatch, FC, SetStateAction, useState } from 'react'
import ImageComponent from '../../ImageComponent/ImageComponent'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import makeStyles from './NoteModal.styles'
import { NoteModalProps } from './NoteModal.types'
import { Typography } from '@mui/material'

const BirthdaySection = ({
	villager
}: any) => {
	if (!villager) {
		return null
	}
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between'}}>
			<ImageComponent altText='Birthday' fileName='/Birthday.png' height='37px' width='29px' />
			<Typography style={{ alignSelf: 'center', textAlign: 'center', fontSize: '18px', fontFamily: 'SVFont' }} variant='h6'>{`Today is ${villager.name}'s birthday`}</Typography>
		</div>
	)
}

const NoteModalHeader = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
			<Typography style={{ fontSize: '24px', fontFamily: 'SVFont' }} variant='h6'>Notes</Typography>
		</div>
	)
}

const NoteModalBody = ({
	villager,
	notes,
	setNotes
}: any) => {
	return (
		<div>
			<BirthdaySection villager={villager} />
			<input type='text' placeholder='Enter your note here' style={{ width: '100%', height: '200px', marginTop: '20px' }} value={notes} onChange={(e) => setNotes(e.target.value)} />
		</div>
	)
}

const LOCAL_STORAGE_PREFIX = 'SVPWA-Data'

type LocalStorageData = string | null

const getNoteForDay = (day: number, notes: string) => {
}

/*
TODO
- Fix inline styling
- Fix typing
	- Remove as typeof keyof's
	- Remove [item: string]
- Add local storage to save notes
Structure should look like
{
	Spring: {
		1: 'Note for day 1',
		2: 'Note for day 2',
		...
	},
	Summer: {
		1: 'Note for day 1',
		2: 'Note for day 2',
		...
	}
}
*/

const handleClose = (
	day: number,
	notes: string,
	setOpen: Dispatch<SetStateAction<boolean>>
) => {
	const seasons = ['Spring', 'Summer', 'Fall', 'Winter']
		.map((season: string) => {
			return {
				[season]: {
					[day]: notes
				}
			}
		})
	console.log(seasons)

	setOpen(false)
}

const NoteModal: FC<NoteModalProps> = ({
	day,
	villager,
	open,
	setOpen
}) => {
	const [notes, setNotes] = useState('')
	const styles = makeStyles()
	const images = ['Birthday', 'Stardrop', 'Gold', 'SecretNote', 'Flag']
	return (
		<div>
			<Modal open={open} onClose={() => handleClose(day, notes, setOpen)}>
				<Box sx={styles.noteModal}>
					<NoteModalHeader />	
					<NoteModalBody villager={villager} notes={notes} setNotes={setNotes} />
				</Box>
			</Modal>
		</div>
	)
}

export default NoteModal
