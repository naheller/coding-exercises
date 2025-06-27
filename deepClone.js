function handleArray(arr) { const result = []
	arr.forEach((val, idx) => {
		if (typeof val !== 'object') {
			result[idx] = val
		} else if (Array.isArray(val)) {
			result[idx] = handleArray(val)
		} else {
			result[idx] = deepClone(val)
		}
	})
	return result;
}


function deepClone(obj) {
	const result = {}
	Object.entries(obj).forEach(([key, val]) => {
		if (typeof val !== 'object') {
			result[key] = val
		} else if (Array.isArray(val)) {
			result[key] = handleArray(val)
		} else {
			result[key] = deepClone(val)
		}
	})
	return result
}

const ex1 = {
	name: 'steve',
	user: {role: 'admin'},
	fav_colors: [
		'blue',
		{custom: '#FF123'}
	],
	nested: {'this': { 'that': { 'the other': true } } }
}

const ex0 = 'test'
const ex2 = {a: 1, b: null}
console.log(deepClone(ex1))
console.log(deepClone(ex0))
console.log(deepClone(ex2)) // TODO: handle null
