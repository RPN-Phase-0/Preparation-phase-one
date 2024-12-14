function averageLengthWord(words) {
    let arr = [];
    let str = "";
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== " ") {
            sum += 1;
            str += words[i];
        }

        if (words[i] === " " || i === words.length - 1) {
            arr.push(str);
            str = "";
        }
    }

    let mean = Math.round(sum / arr.length);
    let result = [];

    for (let word of arr) {
        if (word.length === mean) {
            result.push(word);
        }
    }

    return result;
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []
