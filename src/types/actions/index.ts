import { Dispatch, SetStateAction } from 'react'

export type SetActiveComponentStateAction = Dispatch<SetStateAction<string>>

export * from './calculator'
export * from './calendar'
