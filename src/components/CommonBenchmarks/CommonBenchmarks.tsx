import { FC } from 'react'
import { categories } from '../../constants'
import { BenchmarkCategory, SubCategory } from '../../types'
import makeStyles from './CommonBenchmarks.styles'

const CommonBenchmarks: FC = () => {
	const styles = makeStyles()
	return (
		<div style={styles.commonBenchmarksContainer}>
			{categories.map(({ subCategory, benchmarks }: BenchmarkCategory) => (
				<div key={subCategory}>
					<h2>{subCategory}</h2>
					{benchmarks.map(({ name, descriptor, cost }: SubCategory) => (
						<div key={cost}>
							<p style={styles.zeroMargin}>{descriptor}: {name}</p>
							<p style={styles.cost}>Cost: {cost}</p>
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default CommonBenchmarks
