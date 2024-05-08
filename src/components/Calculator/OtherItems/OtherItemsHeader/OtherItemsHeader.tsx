import { FC } from 'react'
import { data } from '../../../../api'
import ResetButton from '../../ResetButton/ResetButton'
import { resetEntireState } from '../../../../util'
import { OtherItemsHeaderProps } from './OtherItemsHeader.types'

const OtherItemsHeader: FC<OtherItemsHeaderProps> = ({
	setState,
	total
}) => {
	const { fish, ...items } = data.items
	return (
		<h3>
			Other Items {total}
			<ResetButton buttonText='Reset All Other Items' resetFunction={resetEntireState} functionArgs={[items, setState]} />
		</h3>
	)
}

export default OtherItemsHeader
