function angkaTerbesar(arr) {
    if (arr.length === 0) return -1;
    if (arr.length === 1) return arr[0];
    
    let rest = angkaTerbesar(arr.slice(1));
    return arr[0] > rest ? arr[0] : rest;
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])); // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])); // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])); // 8
console.log(angkaTerbesar([])); // -1
