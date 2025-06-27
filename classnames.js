// Classnames - conditionally join css class name together

function getString(item) {
    if (!item) return ''
    if (Array.isArray(item)) {
	return classNames(...item)
    }
    if (typeof item === 'object') {
	const result = []
	Object.keys(item).forEach(key => {
	    if (item[key]) {
		result.push(key)
	    }
	})
	return result.join(' ')
    } else {
	return `${item}`
    }
}

function classNames(...args) {
    if (args.length <= 1) {
	return getString(args[0])
    }
    // "Trim" falsey values in front of args array
    const trimmedArgs = [...args]
    while (!trimmedArgs[0]) {
	trimmedArgs.shift()
    }
    if (trimmedArgs.length <= 1) {
	return getString(trimmedArgs[0])
    }

    return getString(trimmedArgs[0]).concat(' ', classNames(...trimmedArgs.slice(1))).trim() // And trim end of string
}

const t = ['foo', 'bar']
console.log(classNames('foo', 'bar', 'hi'))
console.log(classNames({ bar: true, foo: true, baz: false }))
console.log(classNames({ foo: true }, { bar: true }))
console.log(classNames('a', ['b', { c: true, d: false }]))
console.log(classNames([]))
console.log(classNames(
        'foo',
        {
          bar: true,
          duck: false,
        },
        'baz',
        { quux: true },
      )
    )
console.log(classNames('boo', true && 'loo', false && 'booz', {
        foo: true,
        bar: false,
        baz: 1,
      }))
console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''))
console.log(classNames('hi', '', 'there', ''))

