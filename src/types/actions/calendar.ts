import { Dispatch, SetStateAction } from 'react'
import { Season } from '../calendar'

export type SetOpenStateAction = Dispatch<SetStateAction<boolean>>

export type SetSeasonStateAction = Dispatch<SetStateAction<Season>>