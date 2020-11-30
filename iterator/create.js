let arr = ['foo', 'bar']

console.log(arr[Symbol.iterator])

let iter = arr[Symbol.iterator]()
console.log(iter)

console.log(iter.next())

arr.unshift('baz')

console.log(iter.next())
console.log(iter.next())


class Foo {
    [Symbol.iterator]() {
        return {
            next() {
                return { done: false, value: 'foo' }
            }
        }
    }
}

let f = new Foo()
console.log(f[Symbol.iterator]())

// let a = new Array()
// console.log(a[Symbol.iterator]())


class Counter {
    constructor(limit) {
        this.limit = limit
    }

    [Symbol.iterator]() {
        let count = 1, limit = this.limit
        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ }
                } else {
                    return { done: true, value: undefined }
                }
            },
            return() {
                console.log('Exiting early')
                return { done: true }
            }
        }
    }
}

const counter = new Counter(3)
for (const i of counter) {
    if (i > 2) {
        break
    }
    console.log(i)
}

try {
    for (const i of counter) {
        if (i > 2) {
            throw 'err'
        }
        console.log(i)
    }
} catch (e) {}

let [a, b] = counter
console.log(a, b)

let a1 = [1, 2, 3, 4, 5]
let iter1 = a1[Symbol.iterator]()
iter1.return = function () {
    console.log('Exiting early')
    return { done: true }
}

for (let i of iter1) {
    console.log(i)
    if (i > 2) {
        break
    }
}

for (let i of iter1) {
    console.log(i)
}

