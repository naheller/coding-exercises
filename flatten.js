// Implement a function flatten that returns a newly-created array with all sub-array elements concatenated recursively into a single level.

function flatten(value) {
    if (!value.length) {
	return []
    }

    if (Array.isArray(value[0])) {
	return [...flatten(value[0]), ...flatten(value.slice(1))]
    }

    return [value[0], ...flatten(value.slice(1))]
}

const test = [1, 2, 3]
const test2 = [1, [2, 3]]
const test3 = [
  [1, 2],
  [3, 4],
]

console.log(flatten(test))
console.log(flatten(test2))
console.log(flatten(test3))
