import { VillagerModalStyles } from './VillagerModal.types'

const makeStyles = (): VillagerModalStyles => ({
	affinitiesButton: {
		alignSelf: 'center',
		borderBlockColor: 'black',
		color: 'black',
		fontFamily: 'SVFont',
		fontSize: '18px',
		height: '25px',
		marginLeft: '25px',
		textAlign: 'center'
	},
	affinitiesButtonSx: {
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	affinitiesContainer: {
		display: 'flex'
	},
	villagerBirthday: {
		marginBottom: '5px' 
	},
	villagerModal: {
		bgcolor: 'background.paper',
		border: '1.5px solid #000',
		fontFamily: 'SVFont',
		height: 600,
		left: '50%',
		p: 4,
		position: 'absolute' as 'absolute',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		width: 600
	},
	villagerModalHeader: {
		fontSize: '28px'
	},
	zeroMargin: {
		margin: 0
	}
})

export default makeStyles
