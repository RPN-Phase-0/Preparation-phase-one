function squareNumber(number) {
    if (number < 3) return "Minimal input adalah 3"

    let res = []
    let tmp = []
    let row = 0
    let num = number * number

    for (let i = num; i > 0; i--) {
        if (number % 2 === 1)
            row % 2 === 1 ? tmp.push(i) : tmp.unshift(i)
        else
            row % 2 === 0 ? tmp.push(i) : tmp.unshift(i)

        if (tmp.length === number) {
            res.push(tmp)
            tmp = []
            row++
        }
    }

    return res
}

console.log(squareNumber(3));
// [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]

console.log(squareNumber(4));
// [ [ 16, 15, 14, 13 ],
//   [ 9, 10, 11, 12 ],
//   [ 8, 7, 6, 5 ],
//   [ 1, 2, 3, 4 ] ]

console.log(squareNumber(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3