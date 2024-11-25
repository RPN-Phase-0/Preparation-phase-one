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

function parseNumber(equation) {
    //code here
    if(equation === 0) {
      return '';
    }

    let length = equation.toString().length - 1;
    let multyplier = Math.pow(10, length);
    let currentvalue = Math.floor(equation / multyplier) * multyplier;
    let remaining = equation % multyplier;

    // lakukan rekursi untuk memproses angka yang tersisa
    let restString = parseNumber(remaining);

    if(restString) {
      return currentvalue +  '+' + restString;
    } else {
      return currentvalue.toString();
    }
  };
  
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3