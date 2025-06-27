// Implement Array.prototype.myReduce, leaving the existing reduce intact

Array.prototype.myReduce = function (callbackFn, initialValue) {
	const noInitial = initialValue === undefined

	if (noInitial && !this[0]) throw 'error'
	if (noInitial) initialValue = this[0]
	
	let accumulator = initialValue

	for (let i = noInitial ? 1 : 0; i < this.length; i++) {
		if (this[i]) {
			accumulator = callbackFn(accumulator, this[i], i, this)
		}
	}

	return accumulator
}


const a = [1,2,3,4,5]
console.log(a.myReduce((acc, curr) => (acc + curr)))
console.log(a.myReduce((acc, curr) => (acc + curr), 1))

const b = [{name: 'bill', age: 64}, {name: 'sue', age: 43}, {name: 'agnes', age: 70}]
function hasEvenAge(person) {
	return person.age % 2 === 0
}
const numEvenAges = b.myReduce((acc, curr) => {
	if (hasEvenAge(curr)) return acc += 1
	else return acc
}, 0)
console.log(numEvenAges)
