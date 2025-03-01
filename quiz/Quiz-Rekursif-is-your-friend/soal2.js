function changeXRecursive(data, jenis) {
    let str = ""

    if (data.length < 1) return str

    if (Number(data[0]) % 2 === 0 && jenis === "ganjil")
        str += "x"
    else if (Number(data[0]) % 2 === 1 && jenis === "genap")
        str += "x"
    else
        str += data[0]

    return str + changeXRecursive(data.slice(1), jenis)
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x