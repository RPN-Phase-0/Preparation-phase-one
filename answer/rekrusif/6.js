function categorizeNumber(input) {
    /**
     * TODO:
     * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
     * Dengan ketentuan sebagai berikut:
     * 1. Jika input bukan number, bangkitkan (throw) error.
     * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
     * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
     * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
     * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
     * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
     */
    // 1. Jika input bukan number, bangkitkan (throw) error.
    if (typeof input !== "number") {
        throw new Error("Input harus berupa bilangan bulat");
    }

    // 5. Jika input adalah nol, kembalikan nilai "Nol".
    if (input === 0) {
        return "Nol";
    }

    // 6. Jika input negatif, kembalikan nilai "Negatif".
    if (input < 0) {
        return "Negatif";
    }

    // 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
    if (input % 2 === 0) {
        return "Genap";
    }

    // 3. Jika input adalah bilangan ganjil, periksa apakah itu bilangan prima.
    if (isPrime(input)) {
        return "Prima";
    } else {
        return "Ganjil";
    }
}

// Fungsi tambahan untuk mengecek bilangan prima
function isPrime(num) {
    if (num <= 1) return false; // 1 atau kurang bukan bilangan prima
    if (num <= 3) return true; // 2 dan 3 adalah bilangan prima
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Periksa faktor-faktor lain
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"
