/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid input parameter";
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {
      return "Invalid input parameter";
    }
  }

  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let word = arr[i];

    if (word.length % 2 === 0) {
      let reverseWord = "";

      for (let j = word.length - 1; j >= 0; j--) {
        reverseWord += word[j];
      }

      result.push(reverseWord);
    } else {
      result.push(word);
    }
  }

  return result;
}

console.log(doubleReverse(["rabu", "cinta", "benci", "masuk", "nikmat"]));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(["aku", "sayang", "kamu"]));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(["pelakor", "perusak", "rumah", "tangga"]));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]));
// invalid input parameter
