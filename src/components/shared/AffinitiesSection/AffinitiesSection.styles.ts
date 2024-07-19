
import { Affinity } from '../../../types'
import { includeLeftMargin } from '../../../util'
import { AffinitiesSectionStyles } from './AffinitiesSection.types'

const makeStyles = (): AffinitiesSectionStyles => ({
	affinitiesContainer: (affinity: Affinity) => ({
		marginLeft: includeLeftMargin(affinity) ? '50px' : '0px'
	}),
	text: {
		fontFamily: 'SVFont'
	},
})

export default makeStyles
