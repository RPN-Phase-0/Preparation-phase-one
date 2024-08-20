/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

// Fungsi Math
// Math.log10(num) => It essentially tells you the exponent to which 10 must be raised to get the number
// Math.floor(Math.log10(num)) => By applying Math.floor, we get the largest integer less than or equal to the logarithm. This integer represents the highest power of 10 that is less than or equal to num.
// Math.pow(10, power) => This function raises 10 to the power of power. It calculates the actual place value corresponding to the power.

function parseNumber(equation) {
  // Base case
  if (equation < 10) {
    return equation.toString();
  }

  // Menentukan nilai tempat
  // equation = 3000 => Math.pow(10, Math.floor(3.477)) => Math.pow(10, 3) => highestPlaceValue = 1000;
  let highestPlaceValue = Math.pow(10, Math.floor(Math.log10(equation)));

  // Menentukan angka pertama
  // Math.floor(3333 / 1000) => Math.floor(3.333) => currentDigit = 3;
  let currentDigit = Math.floor(equation / highestPlaceValue);

  // Membuat string berdasarkan nilai tempat
  // currentPlaceValueString = (3 * 1000).toString() => currentPlaceValueString = 3000;
  let currentPlaceValueString = (currentDigit * highestPlaceValue).toString();

  // Memproses sisa angka secara rekursif
  // remainder = 3333 % 1000 => remainder = 333 => parseNumber(333);
  let remainder = equation % highestPlaceValue;
  let remainderString = parseNumber(remainder);

  // Menyatukan string
  // Jika remainder = 0 (nilai tempat puluhan), tidak perlu menambahkan tanda +
  if (remainder === 0) {
    return currentPlaceValueString;
  } else {
    return currentPlaceValueString + '+' + remainderString;
  }
};

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3