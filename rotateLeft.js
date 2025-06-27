function rotateLeftOnce(arr) {
	return arr.map((item, idx) => {
		if (arr[idx+1]) {
			return arr[idx+1]
		} else {
			return arr[0]
		}
	})
}

function rotateLeftNTimes(arr, n) {
	let copy = [...arr]
	for (let i = 1; i <= n; i++) {
		copy = rotateLeftOnce(copy)
	}
	return copy
}
