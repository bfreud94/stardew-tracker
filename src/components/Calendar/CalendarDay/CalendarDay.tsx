import { FC } from 'react'
import { data } from '../../../api/index'
import { getBirthday } from '../../../util'
import ImageComponent from '../../ImageComponent/ImageComponent'
import makeStyles from './CalendarDay.styles'
import { CalendarDayProps } from './CalendarDay.types'

const CalendarDay: FC<CalendarDayProps> = ({ day }) => {
	const styles = makeStyles()
	const birthday = getBirthday(day, data.birthdays)
	return (
		<div style={styles.day}>
			<p style={styles.dayNumber}>{day}</p>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<ImageComponent altText='Birthday' fileName='/Birthday.png' height='37px' width='29px' />
				<ImageComponent altText='Stardrop' fileName='/Stardrop.png' height='36px' width='36px' />
				<ImageComponent altText='Gold' fileName='/Gold.png' height='36px' width='36px' />
				<ImageComponent altText='Secret Note' fileName='/SecretNote.png' height='36px' width='36px' />
				<ImageComponent altText='Flag' fileName='/Flag.png' height='32px' width='32px' />
			</div>
		</div>
	)
}

export default CalendarDay
