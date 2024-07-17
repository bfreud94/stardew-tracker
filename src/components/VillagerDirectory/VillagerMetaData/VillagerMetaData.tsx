import { FC } from 'react'
import ImageComponent from '../../ImageComponent/ImageComponent'
import { SEASON_ID_MAP } from '../../../constants'
import makeStyles from './VillagerMetaData.styles'
import { VillagerMetaDataProps } from './VillagerMetaData.types'

const VillagerMetaData: FC<VillagerMetaDataProps> = ({
	villager
}) => {
	const styles = makeStyles()
	return (
		<div style={styles.villagerModalHeader}>
			<div>
				<ImageComponent
					altText={villager.name}
					fileName={`/villagers/${villager.name}.png`}
					height='96px'
					width='96px'
				/>
				<p style={styles.zeroMargin}>{villager.name}</p>
			</div>
			<div>
				<p style={styles.villagerBirthday}>Birthday</p>
				<p style={styles.zeroMargin}>Season: {SEASON_ID_MAP[villager.birthday.season]}</p>
				<p style={styles.zeroMargin}>Day: {villager.birthday.day}</p>
			</div>
		</div>
	)
}

export default VillagerMetaData
