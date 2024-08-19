function palindromeRecursive(sentence) {
    if (sentence.length <= 1) return true;
    
    let firstChar = sentence[0];
    let lastChar = sentence[sentence.length - 1];
    
    if (firstChar !== lastChar) return false;
    
    return palindromeRecursive(sentence.slice(1, -1));
}

// TEST CASES
console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false
