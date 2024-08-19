function consonantCounterRecursive(sentences) {
    if (sentences.length === 0) return 0;
    
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const char = sentences[0].toLowerCase();
    
    let count = consonants.includes(char) ? 1 : 0;
    
    return count + consonantCounterRecursive(sentences.slice(1));
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')); // 10
console.log(consonantCounterRecursive('AziZy')); // 3
console.log(consonantCounterRecursive('awt6an')); // 3
