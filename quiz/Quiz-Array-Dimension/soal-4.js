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
  let cleanWord = words.replace(/[^a-zA-Z\s]/g, "").split(" ");

  // count length of the word
  let totalLength = 0;
  let wordCount = 0;
  for (let word of cleanWord) {
    if (word.length > 0) {
      totalLength += word.length;
      wordCount++;
    }
  }

  // Menghitung rata-rata panjang kata lalu dibulatkan
  let averageLength = Math.round(totalLength / wordCount);

  // filter word have a length same with average
  let result = [];
  for (let word of cleanWord) {
    if (word.length === averageLength) result.push(word);
  }

  return result;
}

console.log(averageLengthWord("Do you want to become a great coder ?")); // ['you']
console.log(
  averageLengthWord("You dont know what you have until you lose it!")
); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord("I am diligent")); // []
