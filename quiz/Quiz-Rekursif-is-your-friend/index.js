function angkaTerbesar(arr) {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0];
  const nextMax = angkaTerbesar(arr.slice(1));
  return arr[0] > nextMax ? arr[0] : nextMax;
}
// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])); // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])); // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])); // 8
console.log(angkaTerbesar([])); // -1

function changeXRecursive(data, jenis) {
  if (data.length === 0) return "";
  const first = data[0];
  const isEven = first % 2 === 0;
  const isTarget =
    (jenis === "ganjil" && isEven) || (jenis === "genap" && !isEven);
  return (isTarget ? "x" : first) + changeXRecursive(data.slice(1), jenis);
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x

function consonantCounterRecursive(sentences) {
  if (sentences.length === 0) return 0;
  const first = sentences[0].toLowerCase();
  const vowels = "aiueo";
  const isConsonant = first >= "a" && first <= "z" && !vowels.includes(first);
  return (isConsonant ? 1 : 0) + consonantCounterRecursive(sentences.slice(1));
}
console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3

function dividableRecursive(array, num) {
  if (array.length === 0) return "";
  const first = array[0] % num === 0 ? array[0] + " " : "";
  return first + dividableRecursive(array.slice(1), num);
}
// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)); // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)); // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)); // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)); // 66 132

function hapusSimbolRec(str) {
  if (str.length === 0) return "";
  const first = str[0];
  const isValid =
    (first >= "a" && first <= "z") || (first >= "0" && first <= "9");
  return (isValid ? first : "") + hapusSimbolRec(str.slice(1));
}

console.log(hapusSimbolRec("test4@aa")); //test4aa
console.log(hapusSimbolRec("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbolRec("ma@#k!an~")); // makan
console.log(hapusSimbolRec("coding")); // coding
console.log(hapusSimbolRec("1+3-5*2=100")); // 1352100

function palindromeRecursive(sentence) {
  if (sentence.length <= 1) return true;
  if (sentence[0] !== sentence[sentence.length - 1]) return false;
  return palindromeRecursive(sentence.slice(1, -1));
}
// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false

function parseNumber(equation) {
  if (equation === 0) return "0";
  const str = equation.toString();
  const firstDigit = str[0] * Math.pow(10, str.length - 1);
  const rest = parseInt(str.slice(1)) || 0;
  return rest ? firstDigit + "+" + parseNumber(rest) : firstDigit.toString();
}
console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3

function piramid(n) {
  if (n === 0) return 0;
  return n + piramid(n - 1);
}
// console.log(piramid()) // 0
console.log(piramid(0)) // 0
console.log(piramid(1)) // 1
console.log(piramid(2)) // 3
console.log(piramid(3)) // 6
console.log(piramid(4)) // 10
console.log(piramid(5)) // 15
console.log(piramid(6)) // 21
console.log(piramid(100)) // 5050
console.log(piramid(888)) // 394716

function virusCheckRecursive(str, viruses) {
  if (!viruses || str.length === 0) return viruses ? 0 : "There is no virus";
  const first = viruses.includes(str[0]) ? 1 : 0;
  return first + virusCheckRecursive(str.slice(1), viruses);
}
console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
console.log(virusCheckRecursive('')); // There is no virus

function numberIterator(num) {
  if (num === 0) return "0";
  return numberIterator(num - 1) + num;
}
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'