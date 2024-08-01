import { FC } from 'react'
import { Button, Typography } from '@mui/material'
import ImageComponent from '../../../ImageComponent/ImageComponent'
import { getButtonText } from '../../../../util'
import makeStyles from './BirthdaySection.styles'
import { BirthdaySectionProps } from './BirthdaySection.types'

const BirthdaySection: FC<BirthdaySectionProps> = ({
	showAffinities,
	setShowAffinities,
	villager
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.birthdaySection}>
			<ImageComponent altText='Birthday' fileName='/Birthday.png' height='37px' width='29px' />
			<div style={styles.leftContainer}>
				<Button
					color='primary'
					disableRipple
					style={styles.affinitiesButton}
					sx={styles.affinitiesButtonSx}
					variant='outlined'
					onClick={() => setShowAffinities(!showAffinities)}
				>
					{getButtonText(showAffinities, 'Affinities')}
				</Button>
				<Typography style={styles.birthdayText} variant='h6'>{`Today is ${villager.name}'s birthday`}</Typography>
				<ImageComponent style={styles.villagerIcon} altText={villager.name} fileName={`/villagers/${villager.name}.png`} height='32px' width='32px' />
			</div>
		</div>
	)
}

export default BirthdaySection
