function isBalanced(str) {
	const stack = []
	const pairs = {
		']': '[',
		')': '(',
		'}': '{'
	}
	const closers = Object.keys(pairs)
		
	for (const char of str) {
		if (closers.includes(char)) {
			if (stack[stack.length-1] === pairs[char]) {
				stack.pop()
			} else {
				return false
			}
		} else {
			stack.push(char)
		}
	}

	return stack.length === 0
}

const test = '([)]'
const test2 = '([])'
console.log(isBalanced(test))
console.log(isBalanced(test2))
