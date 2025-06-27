// Given an array of numbers and an integer k, return the k most common numbers in the array

function mostCommon(numbers, k) {
	const freqs = {}
	for (const num of numbers) {
		if (freqs[num]) {
			freqs[num]++
		} else {
			freqs[num] = 1
		}
	}
	const sorted = Object.keys(freqs).sort((a, b) => {
		if (freqs[a] < freqs[b]) return 1
		else if (freqs[a] > freqs[b]) return -1
		else return 0
	})
	return sorted.slice(0, k).map(str => Number(str))
}

const test = [4,4,4,6,6,5,5,5]
const test2 = [7,7,7,8,8,9,9,9]
console.log(mostCommon(test, 2))
console.log(mostCommon(test2, 3))

