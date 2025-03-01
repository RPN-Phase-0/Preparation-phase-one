function doubleReverse(arr) {
    if (!arr.length) return 'Invalid input parameter'

    let reversedArr = []

    for (let i = arr.length - 1; i > -1; i--) {
        if (arr[i].length % 2 === 0)
            reversedArr.push(reverse(arr[i]))
        else
            reversedArr.push(arr[i])
    }

    return reversedArr
}

function reverse(str) {
    let reversed = ""

    for (let i = str.length - 1; i > -1; i--) {
        reversed += str[i]
    }

    return reversed
}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
// invalid input parameter