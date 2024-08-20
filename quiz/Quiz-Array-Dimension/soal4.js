/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  let arr = [];

  let split = stringToArray(words);
  let mean = calculateMean(split);

  for (const word of split) {
    if (word.length === mean) {
      arr.push(word);
    }
  }

  return arr;
}

function stringToArray(string) {
  let arr = []; // array untuk menampung kata
  let word = ""; // string untuk menampung karakter

  for (const char of string) {
    // jika string diiterasi sekarang adalah karakter " "
    if (char === " ") {
      // jika word tidak kosong
      if (word) {
        // tambahkan word ke arr
        arr.push(word);
        // kosongkan kembali word (agar elemen arr tidak ada " ")
        word = "";
      }
    } else {
      // jika string diiterasi sekarang bukan " ", tambahkan karakter ke word
      word += char;
    }
  }

  // kata terakhir yang tidak dipisah oleh " "
  if (word) {
    arr.push(word);
  }

  return arr;
}

function calculateMean(array) {
  let sum = 0;

  // n = panjang kata dari setiap kalimat pada array
  for (const n of array) {
    sum += n.length
  }

  return Math.round(sum / array.length);
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []