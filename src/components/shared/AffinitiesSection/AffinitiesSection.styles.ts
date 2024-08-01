import { Affinity } from '../../../types'
import { includeLeftMargin } from '../../../util'
import { AffinitiesSectionStyles } from './AffinitiesSection.types'

const makeStyles = (affinity: Affinity): AffinitiesSectionStyles => ({
	affinitiesContainer: {
		marginLeft: includeLeftMargin(affinity) ? '50px' : '0px'
	},
	text: {
		fontFamily: 'SVFont'
	},
})

export default makeStyles
