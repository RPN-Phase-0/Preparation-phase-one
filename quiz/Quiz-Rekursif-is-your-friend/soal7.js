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
    if(equation < 10){
        return equation.toString()
    }

    const length = Math.floor(Math.log10(equation)) + 1
    const countValue = Math.pow(10, length-1)
    const firstDigit = Math.floor(equation/countValue)
    const reminder = equation % countValue

    if(reminder === 0){
        return `${firstDigit * countValue}`
    }

    return `${firstDigit * countValue}+${parseNumber(reminder)}`
  };
  
  console.log(parseNumber(3333)) // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3