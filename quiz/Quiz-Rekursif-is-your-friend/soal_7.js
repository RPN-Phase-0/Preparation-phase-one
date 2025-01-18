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
  if (equation < 10) {
    return equation.toString();
  }
  
  const length = equation.toString().length;
  const firstDigit = Math.floor(equation / Math.pow(10, length - 1));
  const remainder = equation % Math.pow(10, length - 1);

  const result = firstDigit * Math.pow(10, length - 1);

  if (remainder === 0) {
    return result.toString();
  } else {
    return result + "+" + parseNumber(remainder);
  }
};

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3