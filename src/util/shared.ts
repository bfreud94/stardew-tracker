import { Affinity } from '../types'

export const getAffinityLabel = (affinity: Affinity) => affinity.charAt(0).toUpperCase() + affinity.slice(1)

export const getButtonText = (showAffinities: boolean, text: string) => showAffinities ? `Hide ${text}` : `Show ${text}`