function curry(fn, len = fn.length) {
    return _curry.call(this, fn, len)
}

function _curry(fn, len, ...outerArgs) {
    return function (...innerArgs) {
        const args = [...outerArgs, ...innerArgs]
        if (args.length >= len) {
            fn.apply(this, args)
        } else {
            return _curry(fn, len, ...args)
        }
    }
}

const fn = curry(function(a, b, c, d, e) {
    console.log(a, b, c, d, e)
})

fn(1, 2, 3, 4, 5)
fn(1)(2, 3, 4, 5)
fn(1, 2)(3, 4, 5)
fn(1)(2)(3, 4, 5)
fn(1, 2)(3, 4)(5)
fn(1)(2)(3)(4)(5)
