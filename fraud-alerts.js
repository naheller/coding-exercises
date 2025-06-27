const { mergeSort } = require("./mergeSort.js")

function getNumAlerts(exp, days) {
	let numAlerts = 0;
	for (let i = days; i < exp.length; i++) {
		const lastNDaysSorted = mergeSort(exp.slice(i - days, i))
		let median
		if (days % 2 === 0) {
			const leftMid = lastNDaysSorted[Math.floor(days / 2)]
			const rightMid = lastNDaysSorted[Math.ceil(days / 2)]
			median = (leftMid + rightMid) / 2
		} else {
			median = lastNDaysSorted[Math.floor(days / 2)]
		}
		if (exp[i] >= median * 2) {
			numAlerts++
		}
	}
	return numAlerts;
}

const test = [10, 20, 30, 40, 50]
console.log(getNumAlerts(test, 3))
