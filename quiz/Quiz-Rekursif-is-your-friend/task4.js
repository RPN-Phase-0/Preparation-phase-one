function dividableRecursive(array, num) {
    if (array.length === 0) return '';
    
    let result = '';
    if (array[0] % num === 0) {
        result += array[0] + ' ';
    }
    
    return result + dividableRecursive(array.slice(1), num);
}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)); // 66 33 
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)); // 222 100 50 32 
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)); // 125 500 
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)); // 66 132 
