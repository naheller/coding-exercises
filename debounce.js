function debounce(fn, wait) {
	let interval = null;
	return function (...args) {
		if (interval) clearInterval(interval)
		interval = setInterval(() => {
			fn.apply(this, args)
		}, wait)
	}
}

var i = 0

function increment() {
	i++
	console.log(i)
}

var debounced = debounce(increment, 5000)
