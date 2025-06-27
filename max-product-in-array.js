// Max product in contiguous sub-array

function getMaxProduct(arr) {
	let max = -Infinity
	for (let i = 0; i < arr.length; i++) {
		let temp = arr[i]
		if (temp > max) {
			max = temp
		}	
		for (let j = i+1; j < arr.length; j++) {
			temp *= arr[j]
			if (temp > max) {
				max = temp
			}
		}
		
	}
	return max
}

const test = [1,2,-3,5,1]
const test2 = [1,2,0,-1,8,-4]
const test3 = [4,-1,3]
//console.log(getMaxProduct(test))
//console.log(getMaxProduct(test2))
console.log(getMaxProduct(test3))
