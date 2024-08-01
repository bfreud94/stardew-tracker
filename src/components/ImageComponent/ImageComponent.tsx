import { FC } from 'react'
import { ImageComponentProps } from './ImageComponent.types'

const ImageComponent: FC<ImageComponentProps> = ({
	altText,
	fileName,
	height,
	style,
	width,
}) => (
	<img src={`/assets/${fileName}`} style={style} height={height} width={width} alt={altText} />
)

export default ImageComponent