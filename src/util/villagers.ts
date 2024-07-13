export const getSeasonFromSeasonId = (seasonId: number): string => {
	switch (seasonId) {
		case 1:
			return 'Spring'
		case 2:
			return 'Summer'
		case 3:
			return 'Fall'
		case 4:
			return 'Winter'
		default:
			return ''
	}
}