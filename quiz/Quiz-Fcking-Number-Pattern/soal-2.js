/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/


function squareNumber(num) {
    //code here
    const arr = [];
    let nums = '';
    for (let i = 1; i <= num * num; i++) {
        if (i % num === 0) {
            nums += String(i)
            arr.push([nums])
            nums = ''
        } else {
            nums += `${String(i)},`
        }
    }
    const arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if ((i + 1) % 2 === 0) {
            let reverse = [];
            for (let j = element[0].split(',').length - 1; j >= 0; j--) {
                const element2 = element[0].split(',')[j];
                reverse.push(element2)
            }
            arrNew.push(reverse);
        } else {
            arrNew.push(element[0].split(','));
        }
    }

    const arrPattern = [];
    for (let i = 0; i < arrNew.length; i++) {
        const element = arrNew[i];
        let pattern = [];
        for (let j = 0; j < element.length; j++) {
            const el = element[j];
            if(el % 2 === 0 && el % 4 === 0) {
                pattern.push('#')
            } else if(el % 2 === 0 && el % 4 !== 0) {
                pattern.push('o')
            } else {
                pattern.push('x')
            }
        }

        arrPattern.push(pattern)
        // pattern = [];
    }
    return arrPattern.length > 2 ? arrPattern : 'Minimal input adalah 3';
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// // [ [ x, o, x, # ],
// //   [ #, x, o, x ],
// //   [ x, o, x, # ],
// //   [ #, x, o, x ] ]

console.log(squareNumber(5));
// // [ [ x, o, x, #, x ],
// //   [ o, x, #, x, o ],
// //   [ x, #, x, o, x ],
// //   [ #, x, o, x, # ],
// //   [ x, o, x, #, o ] ]

console.log(squareNumber(2)); // Minimal input adalah 3