const reverseWord = (str) => {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
};

function doubleReverse(arr) {
    if (!arr.length) {
        return "invalid input parameter";
    }

    const result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        const word = arr[i];
        result.push(word.length % 2 === 0 ? reverseWord(word) : word);
    }

    return result;
}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
//[ 'aggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
// invalid input parameter
