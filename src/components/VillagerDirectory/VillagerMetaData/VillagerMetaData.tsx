import { FC } from 'react'
import ImageComponent from '../../ImageComponent/ImageComponent'
import { SEASON_ID_MAP } from '../../../constants'
import { FamilyMember } from '../../../types'
import { getVillagerMarriage } from '../../../util'
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
				<p style={styles.zeroMargin}>Address: {villager.address}</p>
				<p style={styles.zeroMargin}>{`Marriage: ${getVillagerMarriage(villager.loveInterest)}`}</p>
			</div>
			<div style={styles.villagerFamily}>
				<p style={styles.zeroMargin}>Family:</p>
				{villager.family.map((familyMember: FamilyMember) => (
					<p style={styles.zeroMargin} key={familyMember.name}>{`${familyMember.name} - ${familyMember.relationship}`}</p>
				))}
			</div>
		</div>
	)
}

export default VillagerMetaData
