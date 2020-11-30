function* generatorFn() {
    console.log('foobar')
    return 'foo'
}

const g = generatorFn()

console.log(g)
console.log(g.next())
console.log(generatorFn()[Symbol.iterator])
console.log(g === g[Symbol.iterator]())


function* func() {
    yield 'foo'
    yield 'bar'
    return 'baz'
}

const generatorObject = func()

console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())

for (const x of func()) {
    console.log(x)
}

function* gen(initial) {
    console.log(initial)
    console.log(yield)
    console.log(yield)
}

let genObj = gen('foo')

genObj.next('')
genObj.next('baz')
genObj.next('qux')

function* gen1 () {
    return yield 'foo'
}

let genObj1 = gen1()

console.log(genObj1.next())
console.log(genObj1.next('bar'))

function* counter() {
    for (let i = 0;;++i) {
        yield i
    }
}

let c = counter()

console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)
console.log(c.next().value)


function* nTimes(n) {
    let i = 0
    while (n--) {
        yield i++
    }
}

for (const x of nTimes(3)) {
    console.log(x)
}

function* range(start, end) {
    while (start < end) {
        yield start++
    }
}

for (const x of range(4, 7)) {
    console.log(x)
}

function* zeroes(n) {
    while (n--) {
        yield 0
    }
}

console.log(Array.from(zeroes(8)))

function* gen2() {
    yield* [1, 2, 3]
}

for (const x of gen2()) {
    console.log(x)
}


function* innerGeneratorFn() {
    yield 'foo'
    return 'bar'
}

function* outerGeneratorFn(genObj) {
    console.log('iter value:', yield* innerGeneratorFn())
}

for (const x of outerGeneratorFn()) {
    console.log('value:', x)
}
