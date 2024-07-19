import { FC, useState } from 'react'
import BirthdaySection from '../BirthdaySection/BirthdaySection'
import EventContainer from '../../../shared/EventContainer/EventContainer'
import NoteInput from '../NoteInput/NoteInput'
import SingleNote from '../SingleNote/SingleNote'
import SubmitNoteButton from '../SubmitNoteButton/SubmitNoteButton'
import {
	dayHasEvent,
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

	const villager = getVillagerFromBirthday(day, season)
	const savedNotes = getNotesForDay(day, season)

	const seasonId = getSeasonId(season)
	const event = dayHasEvent(day, seasonId)
	const validEvent = isValidEvent(event)

	return (
		<>
			{savedNotes && savedNotes.map((savedNote: string, index: number) => (
				<SingleNote day={day} index={index} key={index} note={savedNote} season={season} setNote={setNote} />
			))}
			{isValidVillager(villager) && <BirthdaySection villager={villager} />}
			{validEvent && <EventContainer event={event} />}
			<NoteInput note={note} setNote={setNote} />
			<SubmitNoteButton day={day} note={note} season={season} setNote={setNote} />
		</>
	)
}
export default NoteModalBody
