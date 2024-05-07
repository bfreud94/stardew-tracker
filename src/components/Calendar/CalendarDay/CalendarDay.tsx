import { FC, useCallback, useState } from 'react'
import { data } from '../../../api/index'
import { getBirthday } from '../../../util'
import NoteModal from '../NoteModal/NoteModal'
import makeStyles from './CalendarDay.styles'
import { CalendarDayProps } from './CalendarDay.types'

const CalendarDay: FC<CalendarDayProps> = ({ day }) => {
    const styles = makeStyles()
    const birthday = getBirthday(day, data.birthdays)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
		if (!open) {
			setOpen(true)
		}
	}

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div style={styles.day} onClick={handleOpen}>
            <p style={styles.dayNumber}>{day}</p>
			<NoteModal open={open} handleClose={handleClose} />
        </div>
    )
}

export default CalendarDay