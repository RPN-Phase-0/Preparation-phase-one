/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang
 menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang 
hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
- Tidak boleh membuat variable diluar function
- Tidak boleh menambahkan parameter baru
- Tidak boleh menggunakan looping while/for    
*/

function dividableRecursive(array, num) {
    if (array.length == 0) {
        console.log("habis");
        return 0
    } else {
        if (array[0] % num == 0) {
            return array[0] + dividableRecursive(array.substring(1, array.length), num)
        }
    }
}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)) // 66 33