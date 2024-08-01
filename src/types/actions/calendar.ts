import { Dispatch, SetStateAction } from 'react'
import { Season } from '../'

export type SetSeasonStateAction = Dispatch<SetStateAction<Season>>

export type SetShowAffinitiesAction = Dispatch<SetStateAction<boolean>>