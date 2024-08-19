function numberIterator(num) {
    if (num === 0) return '0';
    return numberIterator(num - 1) + num;
}

// TEST CASES
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'
