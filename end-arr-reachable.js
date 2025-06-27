/* Given array of numbers, where each number represents the max amout of positions that can be moved forward
 * from that index, determine whether it's possible to reach the end of the array from the first index.
 */

function isEndReachable(numbers) {
	let furthestIdx = 0
	while (furthestIdx < numbers.length) {
		if (numbers[furthestIdx] === 0) {
			return false
		}
		// Needed for extremely large arrays/elements
		if (numbers[furthestIdx] >= numbers.length) {
      			return true
    		}
		let maxIdx = furthestIdx+1
		for (let i = 1; i <= numbers[furthestIdx]; i++) {
			if (numbers[i+furthestIdx] > numbers[maxIdx]) {
				maxIdx = i+furthestIdx
			}
		}
		furthestIdx = maxIdx
	}
	return true
}

const test = [4,1,0,0,2,3]
const test2 = [1,0,0,0]
const test3 = [0,5]
const test4 = [2,2,0,3,2,2,4]
//console.log(isEndReachable(test))
//console.log(isEndReachable(test2))
//console.log(isEndReachable(test3))
console.log(isEndReachable(test4))
