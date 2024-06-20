import { FC } from 'react'
import { Typography } from '@mui/material'
import ImageComponent from '../../../ImageComponent/ImageComponent'
import makeStyles from './BirthdaySection.styles'
import { BirthdaySectionProps } from './BirthdaySection.types'

const BirthdaySection: FC<BirthdaySectionProps> = ({
	villager
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.birthdaySection}>
			<ImageComponent altText='Birthday' fileName='/Birthday.png' height='37px' width='29px' />
			<Typography style={styles.birthdayText} variant='h6'>{`Today is ${villager.name}'s birthday`}</Typography>
		</div>
	)
}

export default BirthdaySection
