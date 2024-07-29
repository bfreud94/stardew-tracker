import { FC, useState } from 'react'
import { Button } from '@mui/material'
import VillagerSchedule from '../VillagerSchedule/VillagerSchedule'
import { getButtonText } from '../../../util'
import makeStyles from './VillagerScheduleContainer.styles'
import { VillagerScheduleContainerProps } from './VillagerScheduleContainer.types'

const VillagerScheduleContainer: FC<VillagerScheduleContainerProps> = ({
	villager
}) => {
	const [showSchedule, setShowSchedule] = useState<boolean>(false)
	const styles = makeStyles()
	return (
		<div>
			<div style={styles.villagerScheduleContainer}>
				<h1>Schedule</h1>
				<Button
					color='primary'
					disableRipple
					style={styles.villagerScheduleButton}
					sx={styles.villagerScheduleButtonSx}
					variant='outlined'
					onClick={() => setShowSchedule(!showSchedule)}>
					{getButtonText(showSchedule, 'Schedule')}
				</Button>
			</div>
			{showSchedule && <VillagerSchedule villager={villager} />}
		</div>
	)
}

export default VillagerScheduleContainer
