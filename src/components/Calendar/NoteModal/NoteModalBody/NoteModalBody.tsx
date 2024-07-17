import { FC, useState } from 'react'
import BirthdaySection from '../BirthdaySection/BirthdaySection'
import NoteInput from '../NoteInput/NoteInput'
import SingleNote from '../SingleNote/SingleNote'
import SubmitNoteButton from '../SubmitNoteButton/SubmitNoteButton'
import {
	getNotesForDay,
	getVillagerFromBirthday,
	villagerHasBirthday
} from '../../../../util'
import { NoteModalBodyProps } from './NoteModalBody.types'

const NoteModalBody: FC<NoteModalBodyProps> = ({
	day,
	season
}) => {
	const [note, setNote] = useState<string>('')

	const villager = getVillagerFromBirthday(day, season)
	const savedNotes = getNotesForDay(day, season)

	return (
		<>
			{savedNotes && savedNotes.map((savedNote: string, index: number) => (
				<SingleNote day={day} index={index} key={index} note={savedNote} season={season} setNote={setNote} />
			))}
			{villagerHasBirthday(villager) && <BirthdaySection villager={villager} />}
			<NoteInput note={note} setNote={setNote} />
			<SubmitNoteButton day={day} note={note} season={season} setNote={setNote} />
		</>
	)
}
export default NoteModalBody
