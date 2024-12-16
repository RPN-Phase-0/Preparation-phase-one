function piramid(n) {
    if (n < 1) {
        return 0;
    }

    return n + piramid(n - 1);
}

// console.log(piramid()) // 0
console.log(piramid(0)) // 0
console.log(piramid(1)) // 1
console.log(piramid(2)) // 3
console.log(piramid(3)) // 6
console.log(piramid(4)) // 10
console.log(piramid(5)) // 15
console.log(piramid(6)) // 21
console.log(piramid(100)) // 5050
console.log(piramid(888)) // 394716
