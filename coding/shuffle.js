// function shuffle(items) {
//     return items.sort((a, b) => Math.random() > 0.5 ? -1: 1)
// }
//
// const weights = Array(9).fill(0)
//
// for (let i = 0; i < 10000; i++) {
//     const testItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     shuffle(testItems)
//     testItems.forEach((item, idx) => weights[idx] += item)
// }
//
// console.log(weights)

function* shuffle(items) {
    items = [...items]

    for (let i = items.length; i > 0; i--) {
        const idx = Math.floor(Math.random() * i);
        // const item = items.splice(idx, 1)[0]
        [items[idx], items[i - 1]] = [items[i - 1], items[idx]]
        yield items[i - 1]
    }
}

let items = [...new Array(100).keys()]
let n = 0

for (let item of shuffle(items)) {
    console.log(item)
    n++
    if (n >= 5) break
}
