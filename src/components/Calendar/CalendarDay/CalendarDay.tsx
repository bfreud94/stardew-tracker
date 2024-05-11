import { FC, useCallback, useState } from 'react'
import { data } from '../../../api/index'
import { getBirthday } from '../../../util'
import NoteModal from '../NoteModal/NoteModal'
import makeStyles from './CalendarDay.styles'
import { CalendarDayProps } from './CalendarDay.types'

const CalendarDay: FC<CalendarDayProps> = ({ day }) => {
    const styles = makeStyles()
    const villager = getBirthday(day, data.villagers)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
		if (!open) {
			setOpen(true)
		}
	}

    return (
        <div style={styles.day} onClick={handleOpen}>
            <p style={styles.dayNumber}>{day}</p>
			<NoteModal day={day} villager={villager} open={open} setOpen={setOpen} />
        </div>
    )
}

export default CalendarDay