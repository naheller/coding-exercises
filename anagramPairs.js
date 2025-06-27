function getAllSubstrings(str) {
	const substrings = []
	for (let i = 0; i <= str.length; i++) {
		for (let j = i+1; j <= str.length; j++) {
			substrings.push(str.substring(i, j))
		}
	}
	return substrings
}

function areAnagrams(s1, s2) {
	const s1Sorted = s1.split('').sort().join('')
	const s2Sorted = s2.split('').sort().join('')
	return s1Sorted === s2Sorted
}

function numAnagramPairs(s) {
	let totalPairs = 0
	const substrings = getAllSubstrings(s)
	const lengthDict = {}
	substrings.forEach(ss => {
		if (lengthDict[ss.length]) {
			lengthDict[ss.length].push(ss)
		} else {
			lengthDict[ss.length] = [ss]
		}
	})
	
	Object.keys(lengthDict).forEach(key => {
		if (lengthDict[key].length === 1) {
			return
		}
		for (let i = 0; i < lengthDict[key].length - 1; i++) {
			for (let j = i+1; j < lengthDict[key].length; j++) {
				if (areAnagrams(lengthDict[key][i], lengthDict[key][j])) {
					totalPairs++
				}
			}
		}
	})

	return totalPairs
}
			







