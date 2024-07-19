import { FC, useState } from 'react'
import ImageComponent from '../../ImageComponent/ImageComponent'
import NotesSection from '../NotesSection/NotesSection'
import NoteModal from '../NoteModal/NoteModal'
import {
	dayHasEvent,
	getSeasonId,
	getVillagerFromBirthday,
	isValidEvent,
	isValidVillager,
	toggleCalendarModal,
} from '../../../util'
import makeStyles from './CalendarDay.styles'
import { CalendarDayProps } from './CalendarDay.types'

const CalendarDay: FC<CalendarDayProps> = ({
	day,
	season
}) => {
    const styles = makeStyles()
    const [open, setOpen] = useState<boolean>(false)

	const villager = getVillagerFromBirthday(day, season)
	const validVillager = isValidVillager(villager)

	const seasonId = getSeasonId(season)
	const event = dayHasEvent(day, seasonId)
	const validEvent = isValidEvent(event)
	
    return (
        <div style={styles.day} onClick={() => toggleCalendarModal(open, setOpen)}>
            <p style={styles.dayNumber}>{day}</p>
			<NoteModal day={day} open={open} season={season} setOpen={setOpen} />
			{validVillager &&
			<div style={styles.imageContainer}>
				<ImageComponent style={styles.birthday} altText='Birthday' fileName='/Birthday.png' height='37px' width='29px' />
				<ImageComponent altText={villager.name} fileName={`/villagers/${villager.name}.png`} height='32px' width='32px' />
			</div>
			}
			<NotesSection day={day} season={season} />
			{validEvent &&
				<ImageComponent style={styles.event} altText='Event' fileName={event.icon} />
			}
        </div>
    )
}

export default CalendarDay