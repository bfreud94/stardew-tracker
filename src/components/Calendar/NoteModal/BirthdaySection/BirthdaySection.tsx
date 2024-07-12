import { FC, useState } from 'react'
import { Button, Typography } from '@mui/material'
import AffinitiesContainer from '../AffinitiesContainer/AffinitiesContainer'
import ImageComponent from '../../../ImageComponent/ImageComponent'
import makeStyles from './BirthdaySection.styles'
import { BirthdaySectionProps } from './BirthdaySection.types'

const getAffinitiesButtonText = (showAffinities: boolean) => showAffinities ? 'Hide Affinities' : 'Show Affinities'

const BirthdaySection: FC<BirthdaySectionProps> = ({
	villager
}) => {
	const [showAffinities, setShowAffinities] = useState(false)
	const styles = makeStyles()
	return (
		<>
			<div style={styles.birthdaySection}>
				<ImageComponent altText='Birthday' fileName='/Birthday.png' height='37px' width='29px' />
				<div style={styles.leftContainer}>
					<Button
						color='primary'
						disableRipple
						style={styles.affinitiesButton}
						sx={styles.affinitiesButtonSx}
						variant='outlined'
						onClick={() => setShowAffinities(!showAffinities)}>
						{getAffinitiesButtonText(showAffinities)}
					</Button>
					<Typography style={styles.birthdayText} variant='h6'>{`Today is ${villager.name}'s birthday`}</Typography>
					<ImageComponent style={styles.villagerIcon} altText={villager.name} fileName={`/villagers/${villager.name}.png`} height='32px' width='32px' />
				</div>
			</div>
			{showAffinities && <AffinitiesContainer villager={villager} />}
		</>
	)
}

export default BirthdaySection
