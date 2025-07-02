// Given a sorted and rotated numbers numbers containing unique elements and an integer target, return the index of target if it is in numbers, or -1 if it is not.

import { binarySearch } from './binarySearch.js'

function findPivot(numbers) {
    let leftIdx = 0;
    let rightIdx = numbers.length-1

    while (leftIdx < rightIdx) {
	if (numbers[leftIdx] > numbers[leftIdx+1]) {
	    return leftIdx
	}
	const midIdx = Math.floor((leftIdx + rightIdx) / 2)
	if (numbers[midIdx] > numbers[rightIdx]) {
	    leftIdx = midIdx + 1
	} else {
	    rightIdx = midIdx
	}
    }
    return leftIdx
}


function findElem(numbers, target) {
    const pivotIdx = findPivot(numbers)
    const pivotNum = numbers[pivotIdx]
    console.log('pivotIdx', pivotIdx)
    if (target === pivotNum) {
	return pivotIdx
    }

    let leftIdx = 0
    let rightIdx = numbers.length - 1

    console.log('leftIdx', leftIdx)
    console.log('pivotIdx', pivotIdx)
    if (target >= numbers[pivotIdx+1] && target <= numbers[numbers.length]) {
	leftIdx = pivotIdx + 1
    } else {
	rightIdx = pivotIdx
    }

    while (leftIdx < rightIdx) {
	const midIdx = Math.floor((leftIdx + rightIdx) / 2)

	if (numbers[midIdx] === target) {
	    return midIdx
	}

	if (numbers[midIdx] < target) {
	    leftIdx = midIdx + 1
	} else {
	    rightIdx = midIdx - 1
	}
    }

    return -1
}

const t = [68,88,97,101,22,41,54]
console.log(findElem(t, 88))



