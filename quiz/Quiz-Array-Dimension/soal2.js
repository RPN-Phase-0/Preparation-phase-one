function findNotRelative(arr1, arr2) {
    let filter = {}
    let result = []

    for (let i = 0; i < arr2.length; i++) {
        if (!filter[arr2[i]]) filter[arr2[i]] = true
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!filter[arr1[i]]) result.push(arr1[i])
    }

    return result
}

console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]