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
  let allNumber = [];
  let min = Infinity;
  let max = -Infinity;

  for (let row of arr) {
    for (let num of row) {
      if (typeof num === "number") {
        allNumber.push(num);
        if (num < min) min = num;
        if (num > max) max = num;
      }
    }
  }

  let fullRange = [];
  for (let i = min; i <= max; i++) fullRange.push(i);

  let missing = [];
  for (let num of fullRange) {
    if (!allNumber.includes(num)) missing.push(num);
  }

  return missing;
}

console.log(
  missingNum([
    [3, " ", 5],
    [1, " ", 7],
    [9, " ", " "],
  ])
); // [ 2, 4, 6, 8 ]
console.log(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
); // [ 3, 4 ]
console.log(
  missingNum([
    [11, " ", 13],
    [17, " ", 19],
    [" ", 16, " "],
  ])
); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "],
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []
