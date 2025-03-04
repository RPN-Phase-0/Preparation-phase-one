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
    if(equation == 0){
        return "";
    }else if(equation.length < 2){
        return " "+ String(equation);
    }
    equation = String(equation).split("");
    let pertama = equation.shift();
    if(equation.length >= 1 && equation[0] != 0){
        for(let i = 0; i < equation.length; i++){
            if(equation[i] != "0"){
                pertama += "0";
            } else {
                pertama += equation[i];
            }
        }
    } else{
        return pertama + equation.join("");
    }
    // console.log(equation);
    // console.log(pertama);
    return `${pertama} + ` + parseNumber(equation.join(""))

};

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3