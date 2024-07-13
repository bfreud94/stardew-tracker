import { FC } from 'react'
import { data } from '../../api/index'
import { Villager } from '../../types'
import ImageComponent from '../ImageComponent/ImageComponent'
import makeStyles from './VillagerDirectory.styles'
import { VillagerDirectoryProps } from './VillagerDirectory.types'
import { getSeasonFromSeasonId } from '../../util'

const VillagerDirectory: FC<VillagerDirectoryProps> = () => {
	const styles = makeStyles()
	return (
		<div style={styles.villagerDirectoryContainer}>
			{data.villagers.map((villager: Villager) => (
				<div style={styles.villagerContainer} key={villager.name}>
					<ImageComponent altText={villager.name} fileName={`/villagers/${villager.name}.png`} height='32px' width='32px' />
					<p style={styles.zeroMargin}>{villager.name}</p>
					<p style={styles.zeroMargin}>Birthday</p>
					<p style={styles.zeroMargin}>Season: {getSeasonFromSeasonId(villager.birthday.season)}</p>
					<p style={styles.zeroMargin}>Day: {villager.birthday.day}</p>
				</div>
			))}
		</div>
	)
}

export default VillagerDirectory
