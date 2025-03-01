function virusCheckRecursive(str, viruses) {
    if (!viruses?.length) return "There is no virus"

    let counter = 0

    if (str.length < 1) return counter

    for (let i = 0; i < viruses.length; i++) {
        if (viruses[i] !== "|" &&
            str[0].toLowerCase() === viruses[i].toLowerCase()) {
            counter++
        }
    }

    return counter + virusCheckRecursive(str.slice(1), viruses)
}

console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
console.log(virusCheckRecursive('')); // There is no virus