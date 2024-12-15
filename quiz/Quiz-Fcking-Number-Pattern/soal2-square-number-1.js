function squareNumber(num) {
    if (num < 3) {
        return "Minimal input adalah 3";
    }

    let res = [];
    let arr = [];

    for (let i = 1; i <= num * num; i++) {
        if (i % 4 == 0) {
            arr.push("#");
        } else if (i % 2 == 0) {
            arr.push("o");
        } else {
            arr.push("x");
        }

        if (arr.length == num) {
            res.push(arr);
            arr = [];
        }
    }

    for (let i = 0; i < res.length; i++) {
        if (i % 2 == 1) {
            res[i] = res[i].reverse();
        }
    }

    return res;
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]

console.log(squareNumber(2)); // Minimal input adalah 3
