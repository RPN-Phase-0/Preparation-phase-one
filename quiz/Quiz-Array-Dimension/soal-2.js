/*
==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

function findNotRelative(arr1, arr2) {
  //code here
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    const element2 = arr2.indexOf(element)
    if(element2 === -1) {
      newArr.push(element);
    }
  }
  return newArr;
}

console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]