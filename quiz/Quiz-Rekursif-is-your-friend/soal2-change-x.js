function changeXRecursive(data, jenis) {
    if (data.length < 1) {
        return "";
    }

    let str = "";
    let odd = Number(data[0]) % 2 == 1;

    if ((jenis == "ganjil" && !odd) || (jenis == "genap" && odd)) {
        str += "x";
    } else {
        str += data[0];
    }
    
    return str + changeXRecursive(data.slice(1), jenis);
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x
