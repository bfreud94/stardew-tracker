import { FC } from 'react'
import ResetButton from '../../ResetButton/ResetButton'
import { resetEntireState } from '../../../../state'
import { OtherItemsHeaderProps } from './OtherItemsHeader.types'

const OtherItemsHeader: FC<OtherItemsHeaderProps> = ({
	setState,
	total
}) => (
	<h3>
		Other Items {total}
		<ResetButton buttonText='Reset All Other Items' resetFunction={resetEntireState} functionArgs={[setState]} />
	</h3>
)

export default OtherItemsHeader
