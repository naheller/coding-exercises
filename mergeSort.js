function merge(a1, a2) {
	const result = []
	while (a1.length && a2.length) {
		if (a1[0] < a2[0]) {
			result.push(a1.shift())
		} else {
			result.push(a2.shift())
		}
	}
	return [...result, ...a1, ...a2]
}

export function mergeSort(a) {
	if (a.length < 2) {
		return a
	}
	
	const mid = Math.floor(a.length / 2)
	const left = a.slice(0, mid)
	const right = a.slice(mid, a.length)

	const leftSorted = mergeSort(left)
	const rightSorted = mergeSort(right)

	return merge(leftSorted, rightSorted)
}
