import { FC, useState } from 'react'
import BirthdaySection from '../BirthdaySection/BirthdaySection'
import EventContainer from '../../../shared/EventContainer/EventContainer'
import NoteInput from '../NoteInput/NoteInput'
import SingleNote from '../SingleNote/SingleNote'
import SubmitNoteButton from '../SubmitNoteButton/SubmitNoteButton'
import {
	getEventFromDay,
	getNotesForDay,
	getSeasonId,
	getVillagerFromBirthday,
	isValidEvent,
	isValidVillager
} from '../../../../util'
import { NoteModalBodyProps } from './NoteModalBody.types'

const NoteModalBody: FC<NoteModalBodyProps> = ({
	day,
	season
}) => {
	const [note, setNote] = useState<string>('')
	const [noteEditIndex, setNoteEditIndex] = useState<number>(-1)

	const villager = getVillagerFromBirthday(day, season)
	const savedNotes = getNotesForDay(day, season)

	const seasonId = getSeasonId(season)
	const event = getEventFromDay(day, seasonId)
	const validEvent = isValidEvent(event)

	return (
		<>
			{savedNotes && savedNotes.map((savedNote: string, index: number) => (
				<SingleNote
					day={day}
					index={index}
					key={index}
					note={savedNote}
					noteEditIndex={noteEditIndex}
					season={season}
					setNote={setNote}
					setNoteEditIndex={setNoteEditIndex}
				/>
			))}
			{isValidVillager(villager) && <BirthdaySection villager={villager} />}
			{validEvent && <EventContainer event={event} />}
			<NoteInput note={note} setNote={setNote} />
			<SubmitNoteButton
				day={day}
				note={note}
				noteEditIndex={noteEditIndex}
				season={season}
				setNote={setNote}
				setNoteEditIndex={setNoteEditIndex}
			/>
		</>
	)
}
export default NoteModalBody
