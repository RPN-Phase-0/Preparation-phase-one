function missingNum(arr) {
    if (!arr.length) {
        return [];
    }

    let set = new Set();
    let min = Number.MAX_VALUE;
    let max = -1;

    for (const item of arr) {
        for (const num of item) {
            if (typeof(num) === "number") {
                set.add(num);

                if (num < min) {
                    min = num;
                }

                if (num > max) {
                    max = num;
                }
            }
        }
    }

    let res = [];

    for (let i = min; i < max; i++) {
        if (!set.has(i)) {
            res.push(i);
        }
    }

    return res;
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
