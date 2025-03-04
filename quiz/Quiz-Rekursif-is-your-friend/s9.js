/**
Virus Check Recursive
---------------------
Implementasikan function `virusCheckRecursive` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `virus` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  virus: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  virus: 'h|r' ==> berarti mencari h dan r

outuput: 3


RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function virusCheckRecursive
  - Dilarang mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - Dilarang menambahkan function di luar maupun di dalam function virusCheckRecursive

*/

function virusCheckRecursive(str, viruses) {
    if(viruses === undefined){
        return "There is no virus";
    } else if(str.length === 0 ){
        return 0;
    }
    let pertama = str[0];
    str = str.slice(1);

    for (let i = 0; i < viruses.length; i++){
        if(pertama === viruses[i]){
            return parseInt(1) + virusCheckRecursive(str, viruses);
        }
    }

    // console.log(pertama)
    // console.log(str)

    return virusCheckRecursive(str, viruses);
    
    // if(viruses.includes(pertama)){
        // console.log(str.join(""));
        // return 1 + virusCheckRecursive(str.join(""), viruses.join("|"));
    // }

    // return viruses;
}

console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 4
console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 0
console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 4
console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
console.log(virusCheckRecursive('')); // There is no virus