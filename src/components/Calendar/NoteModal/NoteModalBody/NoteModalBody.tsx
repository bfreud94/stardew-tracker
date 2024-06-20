import { FC, useState } from 'react'
import {
	getNoteForDay,
	getVillagerFromBirthday,
	saveNote,
	villagerHasBirthday
} from '../../../../util'
import BirthdaySection from '../BirthdaySection/BirthdaySection'
import makeStyles from './NoteModalBody.styles'
import { NoteModalBodyProps } from './NoteModalBody.types'

const NoteModalBody: FC<NoteModalBodyProps> = ({
	day,
	season
}) => {
	const [note, setNote] = useState('')
	const villager = getVillagerFromBirthday(day)
	const styles = makeStyles()
	const savedNote = getNoteForDay(day, season)
	return (
		<>
			<p>{savedNote}</p>
			{villagerHasBirthday(villager) && <BirthdaySection villager={villager} />}
			<input type='text' placeholder='Enter your note here' style={styles.noteInput} value={note} onChange={(e) => setNote(e.target.value)} />
			<button style={styles.noteButton} onClick={() => saveNote(day, note, setNote, season)}>Save</button>
		</>
	)
}
export default NoteModalBody
