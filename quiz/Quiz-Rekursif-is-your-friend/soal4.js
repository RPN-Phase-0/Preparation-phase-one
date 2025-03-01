function dividableRecursive(array, num) {
    let str = ""

    if (array.length < 1) return str

    if (array[0] % num === 0) str += array[0] + " "

    return str + dividableRecursive(array.slice(1), num)
}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)) // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)) // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)) // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)) // 66 132