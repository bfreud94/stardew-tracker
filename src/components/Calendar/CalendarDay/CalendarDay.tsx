import { FC, useState } from 'react'
import ImageComponent from '../../ImageComponent/ImageComponent'
import NoteModal from '../NoteModal/NoteModal'
import makeStyles from './CalendarDay.styles'
import { CalendarDayProps } from './CalendarDay.types'
import { getVillagerFromBirthday, villagerHasBirthday } from '../../../util'

const CalendarDay: FC<CalendarDayProps> = ({
	day,
	season
}) => {
    const styles = makeStyles()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
		if (!open) {
			setOpen(true)
		}
	}

	const villager = getVillagerFromBirthday(day, season)
	const isValidVillager = villagerHasBirthday(villager)

    return (
        <div style={styles.day} onClick={handleOpen}>
            <p style={styles.dayNumber}>{day}</p>
			<NoteModal day={day} open={open} season={season} setOpen={setOpen} />
			{isValidVillager &&
			<>
				<ImageComponent altText='Birthday' fileName='/Birthday.png' height='37px' width='29px' />
				<ImageComponent altText={villager.name} fileName={`/villagers/${villager.name}.png`} height='32px' width='32px' />
			</>
			}
        </div>
    )
}

export default CalendarDay