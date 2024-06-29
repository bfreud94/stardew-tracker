import { CSSProperties } from 'react'
import { SetActiveComponentStateAction } from '../../types/actions'

export interface AppHeaderProps {
    setActiveComponent: SetActiveComponentStateAction
}

export interface AppHeaderStyles {
	container: CSSProperties
	headerElement: CSSProperties
}