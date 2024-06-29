import { Dispatch, SetStateAction } from 'react'
import { FishState, OtherItemsState } from '../calculator'

export type SetFishStateAction = Dispatch<SetStateAction<FishState>>

export type SetNoteStateAction = Dispatch<SetStateAction<string>>

export type SetOtherItemsStateAction = Dispatch<SetStateAction<OtherItemsState>>