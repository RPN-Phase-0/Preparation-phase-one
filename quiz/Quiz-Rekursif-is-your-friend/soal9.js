function virusCheckRecursive(str, viruses) {
    // Handle cases where viruses are not provided or str is empty
    if (!viruses || viruses.length === 0) return "There is no virus";
    if (!str || str.length === 0) return 0; // Base case: jika string kosong, return 0
  
    const currentChar = str[0]; // Ambil karakter pertama
    const remainingStr = str.slice(1); // Sisa string
  
    // Cek apakah karakter pertama ada dalam daftar virus
    const isVirus = viruses.toLowerCase().split("|").includes(currentChar.toLowerCase());
  
    // Rekursif: tambahkan 1 jika karakter adalah virus, lalu lanjutkan ke sisa string
    return (isVirus ? 1 : 0) + virusCheckRecursive(remainingStr, viruses);
  }
  
  // Test Cases
  console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 4
  console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
  console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
  console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
  console.log(virusCheckRecursive('AIn4Ks05bBaa'))
  