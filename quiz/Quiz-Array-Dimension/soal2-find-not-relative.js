function findNotRelative(arr1, arr2) {
    const current = new Set(arr2);
    const result = [];

    for (const num of arr1) {
        if (!current.has(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]
