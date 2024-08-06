export type BenchmarkCategory = {
	subCategory: string
	benchmarks: Array<SubCategory>
}

export type SubCategory = {
	name: string
	descriptor: string
	cost: number
}