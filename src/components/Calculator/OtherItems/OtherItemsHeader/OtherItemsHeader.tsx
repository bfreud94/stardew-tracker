import { FC } from 'react'
import ResetButton from '../../ResetButton/ResetButton'
import { resetEntireOtherItemsState } from '../../../../state'
import { OtherItemsHeaderProps } from './OtherItemsHeader.types'

const OtherItemsHeader: FC<OtherItemsHeaderProps> = ({
	setState,
	total
}) => (
	<h3>
		Other Items {total}
		<ResetButton buttonText='Reset All Other Items' resetFunction={resetEntireOtherItemsState} functionArgs={[setState]} />
	</h3>
)

export default OtherItemsHeader
