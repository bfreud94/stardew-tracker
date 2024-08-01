import { Dispatch, SetStateAction } from 'react'
import { FishState, OtherItemsState } from '..'

export type SetFishStateAction = Dispatch<SetStateAction<FishState>>

export type SetNoteStateAction = Dispatch<SetStateAction<string>>

export type SetNoteEditIndexStateAction = Dispatch<SetStateAction<number>>

export type SetOtherItemsStateAction = Dispatch<SetStateAction<OtherItemsState>>