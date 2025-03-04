/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
    if (str.length === 0){
        return "";
    }
    str = str.split("");
    let pertama = str.shift();
    str = str.join("")
    if (pertama == "a" || pertama == "i" || pertama == "u" || pertama == "e" || pertama == "o" || pertama == "b" || pertama == "c" || pertama == "d" || pertama == "f" || pertama == "g" || pertama == "h" || pertama == "j" || pertama == "k" || pertama == "l" || pertama == "m" || pertama == "n" || pertama == "p" || pertama == "q" || pertama == "r" || pertama == "s" || pertama == "t" || pertama == "v" || pertama == "w" || pertama == "x" || pertama == "y" || pertama == "z" || pertama == "0" || pertama == "1" || pertama == "2" || pertama == "3" || pertama == "4" || pertama == "5" || pertama == "6" || pertama == "7" || pertama == "8" || pertama == "9" ){

        return `${pertama}` + hapusSimbolRec(str);
    }
    return hapusSimbolRec(str);
}

console.log(hapusSimbolRec('test4@aa')); //test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100