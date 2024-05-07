import { FC } from 'react'
import makeStyles from './Modal.styles'
import { ModalProps } from './Modal.types'

const Modal: FC<ModalProps> = () => {
	const styles = makeStyles()
	return (
		<div>
			Modal
		</div>
	)
}

export default Modal
