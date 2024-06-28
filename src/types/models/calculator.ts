import { FishName, QualityName } from '../calculator'

export type FishData = Record<FishName, FishQuality>

type FishQuality = Record<QualityName, number>

export type OtherItemData = Record<string, number>