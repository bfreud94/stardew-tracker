import { Affinity } from '../types'

export const getAffinityLabel = (affinity: Affinity) => affinity.charAt(0).toUpperCase() + affinity.slice(1)