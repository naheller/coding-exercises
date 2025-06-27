// Given an array of integers numbers, return a new array result where each element result[i] represents the product of all the elements in numbers except for numbers[i].

function arrProdExclCurr(numbers) {
	const products = []
	numbers.forEach((num, i) => {
		const arrExclCurr = numbers.slice(0, i).concat(numbers.slice(i+1))
		const product = arrExclCurr.reduce((acc, curr) => (
			acc *= curr
		), 1)
		products.push(product)
	})
	return products
}

const test = [1,2,3]
console.log(arrProdExclCurr(test))
