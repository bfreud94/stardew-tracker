import { FishName, QualityName } from '../'

export type FishData = Record<FishName, FishQuality>

type FishQuality = Record<QualityName, number>

export type OtherItemData = Record<string, number>