function flat(arr) {
    let res = []

    for (const item of arr) {
        if (Array.isArray(item)) {
            res = res.concat(flat(item))
        } else {
            res.push(item)
        }
    }

    return res
}

console.log(flat([[0], 1, 2, [3, 4], 5, [6, 7, [8, 9]]], 10))
