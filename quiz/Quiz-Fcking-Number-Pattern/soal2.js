function squareNumber(number) {
    if (number < 3) return "Minimal input adalah 3"

    let res = []
    let tmp = []
    let row = 0
    let num = number * number

    for (let i = 1; i <= num; i++) {
        if (row % 2 === 0) {
            if (i % 4 === 0)
                tmp.push("#")
            else
                tmp.push(i % 2 === 0 ? "o" : "x")
        } else {
            if (i % 4 === 0)
                tmp.unshift("#")
            else
                tmp.unshift(i % 2 === 0 ? "o" : "x")
        }

        if (tmp.length === number) {
            res.push(tmp)
            tmp = []
            row++
        }
    }

    return res
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ 
//   [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, o, x, #, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, x ] 
// ]

console.log(squareNumber(2)); // Minimal input adalah 3