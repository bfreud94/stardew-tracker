import { FC } from 'react'
import makeStyles from './VillagerSchedule.styles'
import { VillagerScheduleProps } from './VillagerSchedule.types'

const VillagerSchedule: FC<VillagerScheduleProps> = ({
	villager
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.villagerScheduleContainer}>
			{Object.keys(villager.schedule).map((season: string) => {
				const schedule = villager.schedule[season]
				return (
					<div key={season}>
						<h2>{season}</h2>
						{Object.keys(schedule).map((timePeriod: string) => (
							<div key={`${season} ${timePeriod}`}>
								<h3>{timePeriod}</h3>
								{schedule[timePeriod].map((activity: string) => (
									<div key={activity}>{activity}</div>
								))}
							</div>
						))}
					</div>
				)
			})}
		</div>
	)
}

export default VillagerSchedule
