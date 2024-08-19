function changeXRecursive(data, jenis) {
    if (data.length === 0) return '';
    
    let digit = data[0];
    if (jenis === 'ganjil' && digit % 2 === 0) {
        digit = 'x';
    } else if (jenis === 'genap' && digit % 2 !== 0) {
        digit = 'x';
    }
    
    return digit + changeXRecursive(data.slice(1), jenis);
}

console.log(changeXRecursive("012345678922468", "ganjil")); // x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); // 0x2x4x6x8x
