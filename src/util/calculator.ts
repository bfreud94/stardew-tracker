export const getEllipses = (number: number): string => {
	let ellipses = ' . . . . . . '
	while (number > 1) {
		number /= 10
		ellipses = ellipses.slice(0, -1)
	}
	return ellipses
}

export * from './fish'
export * from './otherItems'