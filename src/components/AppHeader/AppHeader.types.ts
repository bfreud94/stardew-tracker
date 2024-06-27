import { CSSProperties, Dispatch, SetStateAction } from 'react'

export interface AppHeaderProps {
    setActiveComponent: Dispatch<SetStateAction<string>>
}

export interface AppHeaderStyles {
	container: CSSProperties
	headerElement: CSSProperties
}