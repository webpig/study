for (let i = 0; i <= 10; i++) {
    console.log(i)
}

const collection = ['foo', 'bar', 'baz']

for (let index = 0; index < collection.length; ++index) {
    console.log(collection[index])
}

collection.forEach((item) => console.log(item))

let num = 1
let obj = {}

console.log(num[Symbol.iterator])
console.log(obj[Symbol.iterator])

const str = 'abc'
const arr = ['a', 'b', 'c']
const map = new Map().set('a', 1).set('b', 2).set('c', 3)
const set = new Set().add('a').add('b').add('c')
// const els = document.querySelectorAll('div')

console.log(str[Symbol.iterator]()) // StringIterator {}
console.log(arr[Symbol.iterator]()) // ArrayIterator {}
console.log(map[Symbol.iterator]()) // MapIterator {}
console.log(set[Symbol.iterator]()) // SetIterator {}
// console.log(els[Symbol.iterator]()) // ArrayIterator {}

let arr1 = ['foo', 'bar', 'baz']

for (const el of arr1) {
    console.log(el)
}

let [a, b, c] = arr1
console.log(a, b, c)

let arr2 = [...arr]
console.log(arr2)

let arr3 = Array.from(arr1)
console.log(arr3)

let set1 = new Set(arr1)
console.log(set1)

let pairs = arr1.map((x, i) => [x, i])
console.log(pairs)
let map1 = new Map(pairs)
console.log(map1)

class FooArray extends Array {}
let fooArr = new FooArray('foo', 'bar', 'baz')

for (let el of fooArr) {
    console.log(el)
}
