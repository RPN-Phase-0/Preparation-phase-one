function hapusSimbolRec(str) {
    if (str.length === 0) return '';
    
    let char = str[0];
    if (
        (char >= 'a' && char <= 'z') || 
        (char >= 'A' && char <= 'Z') || 
        (char >= '0' && char <= '9')
    ) {
        return char + hapusSimbolRec(str.slice(1));
    }
    
    return hapusSimbolRec(str.slice(1));
}

console.log(hapusSimbolRec('test4@aa')); // test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100
