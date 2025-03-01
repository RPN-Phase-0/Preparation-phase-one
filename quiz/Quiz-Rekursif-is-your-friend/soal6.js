function palindromeRecursive(sentence) {
    let n = sentence.length
    let first = sentence[0]
    let last = sentence[n - 1]

    if (n <= 1) return true

    if (first !== last) return false

    return palindromeRecursive(sentence.substring(first, last))
}

// TEST CASES
console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false