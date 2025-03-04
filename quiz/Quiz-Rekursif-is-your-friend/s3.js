/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  if(sentences.length === 0){
    return 0;
  }
    sentences = sentences.toLowerCase();
    let pertama = sentences[0];
    let potongan = sentences.slice(1);

    if(pertama == "b" || pertama == "c" || pertama == "d" || pertama == "f" || pertama == "g" || pertama == "h" || pertama == "j" || pertama == "k" || pertama == "l" || pertama == "m" || pertama == "n" || pertama == "p" || pertama == "q" || pertama == "r" || pertama == "s" || pertama == "t" || pertama == "v" || pertama == "w" || pertama == "x" || pertama == "y" || pertama == "z" ) {
        return 1 + consonantCounterRecursive(potongan);
    }
    return consonantCounterRecursive(potongan)
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3