function angkaTerbesar(arr) {
    if (!arr.length) {
        return -1;
    }

    if (arr.length == 1) {
        return arr[0];
    }

    if (arr[0] > arr[1]) {
        arr[1] = arr[0];
    }

    return angkaTerbesar(arr.slice(1));
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
console.log(angkaTerbesar([])) // -1
