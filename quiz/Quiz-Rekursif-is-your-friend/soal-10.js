/*
===================================
Recursive Mastery : Number Iterator
===================================
Nama:________
[INSTRUCTION]
Diberikan sebuah function bernama numberIterator yang merupakan sebuah function yang menerima satu parameter num berupa number.
Buatlah dengan metode rekursif iterasi angka tersebut dari 0.
[EXAMPLE]
input: 5
output: 012345
input: 7
output: 01234567
[CONSTRAINTS]
Wajib menggunakan metode rekursif
Dilarang menggunakan sintaks for / while dan regex
*/
function numberIterator(num) {
    //code here
    // Basis rekursif: jika num adalah 0, kembalikan "0"
    if (num === 0) {
        return "0";
    }

    // Rekursif: panggil fungsi dengan num - 1, lalu tambahkan angka saat ini
    return numberIterator(num - 1) + num;
}
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'