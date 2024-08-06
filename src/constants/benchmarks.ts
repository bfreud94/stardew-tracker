import { BenchmarkCategory, SubCategory } from '../types'

const qualitiesAndCost: Array<SubCategory> = [{
	name: 'Copper',
	descriptor: 'Quality',
	cost: 2000
}, {
	name: 'Silver',
	descriptor: 'Quality',
	cost: 5000
}, {
	name: 'Gold',
	descriptor: 'Quality',
	cost: 10000
}, {
	name: 'Iridium',
	descriptor: 'Quality',
	cost: 25000
}]

const fishingRods: Array<SubCategory> = [{
	name: 'Fiberglass Rod',
	descriptor: 'Fishing Rod',
	cost: 1800
}, {
	name: 'Iridium Rod',
	descriptor: 'Fishing Rod',
	cost: 7500
}]

const communityCenterVault: Array<SubCategory> = [{
	name: '',
	descriptor: 'Vault Upgrade #1',
	cost: 2500
}, {
	name: '',
	descriptor: 'Vault Upgrade #2',
	cost: 5000
}, {
	name: '',
	descriptor: 'Vault Upgrade #3',
	cost: 10000
}, {
	name: '',
	descriptor: 'Vault Upgrade #4',
	cost: 25000
}]

export const categories: Array<BenchmarkCategory> = [{
	subCategory: 'Tools',
	benchmarks: qualitiesAndCost
}, {
	subCategory: 'Fishing Rods',
	benchmarks: fishingRods
}, {
	subCategory: 'Community Center',
	benchmarks: communityCenterVault
}]