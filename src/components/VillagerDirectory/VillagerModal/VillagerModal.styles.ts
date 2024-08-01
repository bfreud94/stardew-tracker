import { VillagerModalStyles } from './VillagerModal.types'

const makeStyles = (): VillagerModalStyles => ({
	villagerModal: {
		bgcolor: 'background.paper',
		border: '1.5px solid #000',
		fontFamily: 'SVFont',
		height: 600,
		left: '50%',
		overflow: 'auto',
		p: 4,
		position: 'absolute' as const,
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: 600
	}
})

export default makeStyles
