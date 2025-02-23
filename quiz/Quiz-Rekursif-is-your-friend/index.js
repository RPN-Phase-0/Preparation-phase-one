console.log("=========[tugas1]=========")
function angkaTerbesar(sentence) {
    if (sentence.length === 0) return -1;
    if (sentence.length === 1) return sentence[0];
    let max = angkaTerbesar(sentence.slice(1));
    return sentence[0] > max ? sentence[0] : max;
  }
  console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
console.log(angkaTerbesar([])) // -1

console.log("")
console.log("=========[tugas2]=========")
function changeXRecursive(data, jenis) {
    if (data.length === 0) return '';
    let currentChar = data[0];
    if (jenis === 'ganjil' && parseInt(currentChar) % 2 === 0) {
      currentChar = 'x';
    } else if (jenis === 'genap' && parseInt(currentChar) % 2 !== 0) {
      currentChar = 'x';
    }
    return currentChar + changeXRecursive(data.slice(1), jenis);
  }

  console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x

console.log("")
console.log("=========[tugas3]=========")
function consonantCounterRecursive(sentences) {
    if (sentences.length === 0) return 0;
    let consonant = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    return (consonant.includes(sentences[0]) ? 1 : 0) + consonantCounterRecursive(sentences.slice(1));
  }
  console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3

console.log("")
console.log("=========[tugas4]=========")
function dividableRecursive(array, num) {
    if (array.length === 0) return [];
    let result = array[0] % num === 0 ? [array[0]] : [];
    return result.concat(dividableRecursive(array.slice(1), num));
  }
  console.log(dividableRecursive([66, 33, 55, 44, 11], 3)) // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)) // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)) // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)) // 66 132

console.log("")
console.log("=========[tugas5]=========")

function hapusSimbolRec(str) {
    if (str.length === 0) return '';
    let char = str[0];
    if (/[a-zA-Z0-9]/.test(char)) {
      return char + hapusSimbolRec(str.slice(1));
    }
    return hapusSimbolRec(str.slice(1));
  }
  
console.log(hapusSimbolRec('test4@aa')); //test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100

console.log("")
console.log("=========[tugas6]=========")
function palindromeRecursive(sentence) {
    if (sentence.length <= 1) return true;
    if (sentence[0] !== sentence[sentence.length - 1]) return false;
    return palindromeRecursive(sentence.slice(1, sentence.length - 1));
  }
  console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false

console.log("")
console.log("=========[tugas7]=========")
function parseNumber(equation) {
    if (equation === 0) return '0';
    let str = equation.toString();
    if (str.length === 1) return str;
    let num = str[0] + '0'.repeat(str.length - 1);
    return num + (equation % Math.pow(10, str.length - 1) === 0 ? '' : '+' + parseNumber(equation % Math.pow(10, str.length - 1)));
  }
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3

console.log("")
console.log("=========[tugas8]=========")
function piramid(n) {
    if (n === 0) return 0;
    return n + piramid(n - 1);
  }
  console.log(piramid(0)) // 0
console.log(piramid(1)) // 1
console.log(piramid(2)) // 3
console.log(piramid(3)) // 6
console.log(piramid(4)) // 10
console.log(piramid(5)) // 15
console.log(piramid(6)) // 21
console.log(piramid(100)) // 5050
console.log(piramid(888)) // 394716

console.log("")
console.log("=========[tugas9]=========")

function virusCheckRecursive(str, viruses) {
    // Fungsi rekursif untuk memeriksa karakter dalam string
    if (str === '') return 0; // Jika string kosong, return 0
    if (viruses.includes(str[0].toLowerCase())) {
      return 1 + virusCheckRecursive(str.slice(1), viruses); // Tambahkan 1 jika karakter ditemukan
    } else {
      return virusCheckRecursive(str.slice(1), viruses); // Lanjutkan ke karakter berikutnya
    }
  }
  
  // TEST CASES
  console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
  console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
  console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
  console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
  console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
  console.log(virusCheckRecursive('RsMFjBUjvIaP', '')); // There is no virus
  console.log(virusCheckRecursive('')); // There is no virus
  
  console.log("")
console.log("=========[tugas10]=========")
  function numberIterator(num) {
    if (num === 0) return '0';
    return numberIterator(num - 1) + num;
  }
  console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'