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

function parseNumber(num) {
  //code here
    let equation = String(num); // 3333
    if (equation.length === 1) return equation; // Basis rekursi: jika hanya satu digit, langsung return

    let digit = equation[0]; // 3
    let zeroCount = equation.length - 1; // 3
    let value = digit * Math.pow(10, zeroCount); // 3000

    if (digit === "0") {
      return parseNumber(Number(equation.slice(1))); // Lewati jika digitnya nol
    }

    return (
      value +
      (equation.slice(1) === Array(equation.length).join("0") ? "" : "+") +
      parseNumber(Number(equation.slice(1)))
    );
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
