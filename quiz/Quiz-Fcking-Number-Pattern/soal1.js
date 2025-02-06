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
    let allArr = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] != ' '){
                allArr.push(arr[i][j])
            }
        }
    }
    for(let m = 0; m < allArr.length; m++){
        for(let o = 0; o < allArr.length - 1 - m; o++){
            if(allArr[o]> allArr[o+1]){
                [allArr[o], allArr[o+1]] = [allArr[o+1], allArr[o]]
            }
        }
    }
    
    let newArray = []
    for(let k = allArr[0]; k <= allArr[allArr.length - 1]; k++){
        newArray.push(k)
    }
    // console.log(allArr)
    let resultArray = []
    for(let l = 0; l < newArray.length; l++){
        if(allArr.indexOf(newArray[l]) == -1){
            resultArray.push(newArray[l])
        }
    }
    return resultArray
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