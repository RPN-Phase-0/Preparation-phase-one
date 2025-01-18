/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text) {
  const counts = {};

  // Menyaring karakter agar tidak sensitif terhadap kapitalisasi (mengubah semuanya menjadi huruf kecil)
  text = text.toLowerCase();

  // Menghitung jumlah kemunculan setiap karakter
  for (let char of text) {
    counts[char] = (counts[char] || 0) + 1;
  }

  // Menghitung berapa karakter yang muncul lebih dari satu kali
  let duplicates = 0;
  for (let count of Object.values(counts)) {
    if (count > 1) {
      duplicates++;
    }
  }

  return duplicates;
}

console.log(duplicateCount("")); //0
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2
console.log(duplicateCount("abcabcdABcefGhg")); //4
