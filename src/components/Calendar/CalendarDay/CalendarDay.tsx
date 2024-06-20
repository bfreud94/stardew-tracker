import { FC, useState } from 'react'
import NoteModal from '../NoteModal/NoteModal'
import makeStyles from './CalendarDay.styles'
import { CalendarDayProps } from './CalendarDay.types'

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

    return (
        <div style={styles.day} onClick={handleOpen}>
            <p style={styles.dayNumber}>{day}</p>
			<NoteModal day={day} open={open} season={season} setOpen={setOpen} />
        </div>
    )
}

export default CalendarDay