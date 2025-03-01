function missingNum(arr) {
    if (!arr.length) return []

    let tmp = {}
    let max = -Infinity
    let min = Infinity
    let res = []

    for (const sub of arr) {
        for (const num of sub) {
            if (typeof (num) === "number") {
                if (!tmp[num]) tmp[num] = true

                if (num > max) max = num
                if (num < min) min = num
            }
        }
    }

    for (let i = min; i < max; i++) {
        if (!tmp[i]) res.push(i)
    }

    return res
}

console.log(missingNum([
    [3, ' ', 5],
    [1, ' ', 7],
    [9, ' ', ' ']
])) // [ 2, 4, 6, 8 ]
console.log(missingNum([
    [2, ' '],
    [' ', 5]
])) // [ 3, 4 ]
console.log(missingNum([
    [11, ' ', 13],
    [17, ' ', 19],
    [' ', 16, ' ']
])) // [ 12, 14, 15, 18 ]
console.log(missingNum([
    [3, ' ', 5, 15],
    [1, ' ', 7, 13],
    [9, ' ', ' ', 12],
    [' ', 16, ' ', ' ']
])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []