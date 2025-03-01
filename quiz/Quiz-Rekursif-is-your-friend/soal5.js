function hapusSimbolRec(str) {
  if (str.length < 1) return ""

  let toBeReplaced = "!@#$%^&*()_+=-{}[]|';~`,./<>?\" "

  for (const char of toBeReplaced) {
    if (char === str[0])
      return "" + hapusSimbolRec(str.slice(1))
  }

  return str[0] + hapusSimbolRec(str.slice(1))
}

console.log(hapusSimbolRec('test4@aa')); //test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100