export const getEllipses = (number: number): string => {
	let ellipses = ' . . . . . . '
	while (number > 1) {
		number /= 10
		ellipses = ellipses.slice(0, -1)
	}
	return ellipses
}

export const getFishQualityRowText = (
	fishName: string,
	fishItemValue: string,
	quality: string,
	total: number
) => {
	const ellipses = getEllipses(total)
	const textRightOfInput = `${ellipses} ${total}`
	const fishNameAndQuality = `${fishName} (${quality}) :`
	const multiplier = `${fishItemValue} x`
	return {
		fishNameAndQuality,
		multiplier,
		textRightOfInput
	}
}