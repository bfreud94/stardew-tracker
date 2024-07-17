import { FC, useState } from 'react'
import ImageComponent from '../ImageComponent/ImageComponent'
import VillagerModal from './VillagerModal/VillagerModal'
import { data } from '../../api/index'
import { DEFAULT_VILLAGER } from '../../constants'
import { Villager } from '../../types'
import { toggleVillagerModal } from '../../util'
import makeStyles from './VillagerDirectory.styles'
import { VillagerDirectoryProps } from './VillagerDirectory.types'

const VillagerDirectory: FC<VillagerDirectoryProps> = () => {
	const [currentVillager, setCurrentVillager] = useState<Villager>(DEFAULT_VILLAGER)
    const [open, setOpen] = useState<boolean>(false)

	const styles = makeStyles()
	return (
		<div style={styles.villagerDirectoryContainer}>
			{data.villagers.map((villager: Villager) => (
				<div style={styles.villagerContainer} key={villager.name}>
					<ImageComponent
						altText={villager.name}
						fileName={`/villagers/${villager.name}.png`}
						height='96px'
						width='96px'
						onClick={() => toggleVillagerModal(open, setCurrentVillager, setOpen, villager)}
					/>
					<p style={styles.zeroMargin}>{villager.name}</p>
				</div>
			))}
			<VillagerModal open={open} setOpen={setOpen} villager={currentVillager} />
		</div>
	)
}

export default VillagerDirectory
