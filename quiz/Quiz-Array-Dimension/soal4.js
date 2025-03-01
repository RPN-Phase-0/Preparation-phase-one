function averageLengthWord(words) {
    let len = 1
    let sum = 0
    let tmp = []
    let str = ""

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== " ") {
            str += words[i]
            sum++
        }

        if (words[i] === " ") {
            tmp.push(str)
            str = ""
            len++
        }
    }
    tmp.push(str)

    let res = []

    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i].length === Math.round(sum / len))
            res.push(tmp[i])
    }

    return res
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []
