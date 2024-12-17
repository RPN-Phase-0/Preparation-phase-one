function palindromeRecursive(sentence) {
    if (sentence.length <= 1) {
        return true;
    }
    
    if (sentence[0] != sentence[sentence.length - 1]) {
        return false;
    }

    return palindromeRecursive(sentence.slice(sentence[0], sentence[sentence.length - 1]));
}

// TEST CASES
console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false
