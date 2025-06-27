// Max sum in contiguous sub-array

function getMaxSum(arr) {
	let max = -Infinity
	for (let i = 0; i < arr.length; i++) {
		let temp = arr[i]
		if (temp > max) {
			max = temp
		}	
		for (let j = i+1; j < arr.length; j++) {
			temp += arr[j]
			if (temp > max) {
				max = temp
			}
		}
		
	}
	return max
}

const test = [-1,5,-3,9,-11]
const test2 = [1,2,0,-1,8,-4]
const test3 = [4,-1,3]
console.log(getMaxSum(test))
//console.log(getMaxSum(test2))
//console.log(getMaxSum(test3))
