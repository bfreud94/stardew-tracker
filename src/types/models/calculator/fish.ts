import { FishName, QualityName } from '../../calculator'

export type FishData = Record<FishName, FishQuality>

export type FishQuality = Record<QualityName, number>
