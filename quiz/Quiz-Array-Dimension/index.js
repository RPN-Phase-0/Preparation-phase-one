function doubleReverse(arr) {
    if (arr.length === 0) return "invalid input parameter";
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let word = arr[i];
        if (word.length % 2 === 0) {
            let reversedWord = "";
            for (let j = word.length - 1; j >= 0; j--) {
                reversedWord += word[j];
            }
            result.push(reversedWord);
        } else {
            result.push(word);
        }
    }
    return result;
}
console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
// invalid input parameter
function findNotRelative(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let found = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(arr1[i]);
        }
    }
    return result;
}
console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]
function minDistanceBetweenGreatest(arr) {
    let maxNum = arr[0];
    let maxIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
            maxIndexes = [i];
        } else if (arr[i] === maxNum) {
            maxIndexes.push(i);
        }
    }
    if (maxIndexes.length < 2) return 0;
    let minDistance = arr.length;
    for (let i = 1; i < maxIndexes.length; i++) {
        let distance = maxIndexes[i] - maxIndexes[i - 1];
        if (distance < minDistance) {
            minDistance = distance;
        }
    }
    return minDistance;
}
console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0
function averageLengthWord(words) {
    let wordArr = words.replace(/[^a-zA-Z ]/g, "").split(" ");
    let totalLength = 0;
    for (let i = 0; i < wordArr.length; i++) {
        totalLength += wordArr[i].length;
    }
    let avgLength = Math.round(totalLength / wordArr.length);
    let result = [];
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length === avgLength) {
            result.push(wordArr[i]);
        }
    }
    return result;
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []