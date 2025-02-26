/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 5. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  //code here
  if (data.length === 0) {
    return "";
  }

  let arr = data[0]; //x + 1

  if (jenis === "ganjil") {
    if (parseInt(arr) % 2 === 0) {
      arr = "x";
    } else {
      arr = data[0]
    }
  }

  if(jenis === "genap") {
    if(parseInt(arr) % 2 !== 0) {
      arr = "x"
    } else {
      arr = data[0]
    }
  }
  
  return arr + changeXRecursive(data.substring(1), jenis); //x
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x






// changeXRecursive("123456", "genap")
// ↓
// "1" + changeXRecursive("23456", "genap")
// ↓
// "1" + "x" + changeXRecursive("3456", "genap")
// ↓
// "1" + "x" + "3" + changeXRecursive("456", "genap")
// ↓
// "1" + "x" + "3" + "x" + changeXRecursive("56", "genap")
// ↓
// "1" + "x" + "3" + "x" + "5" + changeXRecursive("6", "genap")
// ↓
// "1" + "x" + "3" + "x" + "5" + "x" + changeXRecursive("", "genap")
// ↓
// "1x3x5x" (karena `changeXRecursive(""  , "genap")` return `""`)

