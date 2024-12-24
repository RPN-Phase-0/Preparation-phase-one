/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
    //code here
    const arrNum = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if(element[j] !== ' ') {
                arrNum.push(element[j])
            }
        }
    }
    const sortedNum = arrNum.sort((a, b) => a - b);
    const missNum = [];
    for (let j = sortedNum[0]; j <= sortedNum[sortedNum.length - 1]; j++) {
        if(sortedNum.indexOf(j) === -1) {
            missNum.push(j)
        }
    }
    return missNum
}


console.log(missingNum([
    [3, ' ', 5],
    [1, ' ', 7],
    [9, ' ', ' ']
])) // [ 2, 4, 6, 8 ]
console.log(missingNum([
    [2, ' '],
    [' ', 5]
])) // [ 3, 4 ]
console.log(missingNum([
    [11, ' ', 13],
    [17, ' ', 19],
    [' ', 16, ' ']
])) // [ 12, 14, 15, 18 ]
console.log(missingNum([
    [3, ' ', 5, 15],
    [1, ' ', 7, 13],
    [9, ' ', ' ', 12],
    [' ', 16, ' ', ' ']
])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []