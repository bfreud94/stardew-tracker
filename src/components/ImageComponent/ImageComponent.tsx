import { FC } from 'react'
import { ImageComponentProps } from './ImageComponent.types'

const ImageComponent: FC<ImageComponentProps> = ({
	altText,
	fileName,
	height,
	width,
	...props
}) => (
	<img src={`/assets/${fileName}`} height={height} width={width} alt={altText} {...props} />
)

export default ImageComponent