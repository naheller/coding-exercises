// Binary search on sorted array

export function binarySearch(array, target) {
    let leftIdx = 0
    let rightIdx = array.length - 1

    while (leftIdx < rightIdx) {
	const midIdx = Math.floor((leftIdx + rightIdx) / 2)

	if (array[midIdx] === target) {
	    return midIdx
	}

	if (array[midIdx] < target) {
	    leftIdx = midIdx + 1
	} else {
	    rightIdx = midIdx - 1
	}
    }

    return -1
}

const t = [1,4,6,14,56,89,95]

