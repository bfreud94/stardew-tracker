import { FC, useState } from 'react'
import ImageComponent from '../ImageComponent/ImageComponent'
import VillagerModal from './VillagerModal/VillagerModal'
import { data } from '../../api/index'
import { DEFAULT_VILLAGER } from '../../constants'
import { Villager } from '../../types'
import makeStyles from './VillagerDirectory.styles'
import { VillagerDirectoryProps } from './VillagerDirectory.types'

const VillagerDirectory: FC<VillagerDirectoryProps> = () => {
	const [currentVillager, setCurrentVillager] = useState<Villager>(DEFAULT_VILLAGER)
    const [open, setOpen] = useState(false)

    const handleOpen = (villager: Villager) => {
		if (!open) {
			setCurrentVillager(villager)
			setOpen(true)
		} else {
			setCurrentVillager(DEFAULT_VILLAGER)
		}
	}

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
						onClick={() => handleOpen(villager)}
					/>
					<p style={styles.zeroMargin}>{villager.name}</p>
				</div>
			))}
			<VillagerModal open={open} setOpen={setOpen} villager={currentVillager} />
		</div>
	)
}

export default VillagerDirectory
