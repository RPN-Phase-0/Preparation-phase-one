function virusCheckRecursive(str, viruses) {
    // Basis rekursi: jika string kosong
    if (str.length === 0) {
        return viruses ? 0 : 'There is no virus';
    }

    // Jika parameter viruses tidak diberikan
    if (viruses === undefined || viruses === '') {
        return 'There is no virus';
    }

    let virusArr = viruses.toLowerCase().split('|');
    let firstChar = str[0].toLowerCase();
    
    // Cek apakah karakter pertama adalah virus
    let virusCount = virusArr.includes(firstChar) ? 1 : 0;
    
    // Rekursi untuk sisa string
    return virusCount + virusCheckRecursive(str.slice(1), viruses);
}

// TEST CASES
console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
console.log(virusCheckRecursive('')); // There is no virus
