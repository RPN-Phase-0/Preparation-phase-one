function consonantCounterRecursive(sentences) {
    if (sentences.length < 1) {
        return 0;
    }

    sentences = sentences.toLowerCase();

    const set = new Set("aiueo 1234567890");

    if (set.has(sentences[0])) {
        return consonantCounterRecursive(sentences.slice(1));
    }

    return 1 + consonantCounterRecursive(sentences.slice(1));
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3
