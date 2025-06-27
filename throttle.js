/*
Implement a throttle function which accepts a callback function and a wait duration.
Calling throttle() returns a function which throttled invocations of the callback function following the behavior described above.
*/

export function throttle(func, wait) {
    let canCall = true
    let timeoutId = null

    return function (...args) {
	if (canCall) {
	    func.apply(this, args)
	    canCall = false
	    timeoutId = setTimeout(() => {
		canCall = true
	    }, wait)
	}
    }
}
