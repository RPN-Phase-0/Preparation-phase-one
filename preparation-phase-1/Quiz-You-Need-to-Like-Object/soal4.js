/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  //code here
  let hasil = [];
  let daftarKota = ["Yogyakarta",  "Semarang",  "Surabaya",  "Denpasar"];
  let transportasi = {
    Pesawat: 275000,
    Kereta: 250000,
    Bis: 225000
  }
  let platformPembayaran = {
    OVO: 15,
    Dana: 10,
    Gopay: 5,
    Cash: 0
  }
  let urutkan = [];  
  for(let j=0; j < arr.length; j++) {
     let splitArr = arr[j].split("-");

      if (splitArr[3] === "Pesawat") {
        urutkan[0] = arr[j];
      } else if (splitArr[3] === "Kereta") {
        urutkan[1] = arr[j];
      } else {
        urutkan[2] = arr[j];
      }
  }
  let urutkanLagi = [];
  for (let i = 0; i < urutkan.length; i++) {
    if (urutkan[i] !== undefined) {
      urutkanLagi[urutkanLagi.length] = urutkan[i];
    }
  }
  for(let k = 0; k < urutkanLagi.length; k++) {
    let pisahKata = urutkanLagi[k].split("-");
    let nama = pisahKata[0]
    let berangkatDari = pisahKata[1];
    let menujuKe = pisahKata[2];
    let transport = pisahKata[3]
    let indexBerangkat = 0; //2
    let indexMenujuKe = 0; // 3
   

    for (let i = 0; i < daftarKota.length; i++) {
      if (daftarKota[i] === berangkatDari) {
        indexBerangkat = i;
      }
    }

    for(let z = 0; z < daftarKota.length; z++) {
      if (daftarKota[z] === menujuKe) {
        indexMenujuKe = z;
      }
    }

     let jarak = Math.abs(indexBerangkat - indexMenujuKe);

   

     function totalCost() {
       let promo = 0;
       for (key in platformPembayaran) {
         if (key === emoney) {
           promo = platformPembayaran[key];
         }
       }
       let biaya = 0;
       for (key in transportasi) {
         if (key === transport) {
           biaya = transportasi[key];
         }
       } 

         let akhirCost = biaya * jarak;
         return akhirCost - (akhirCost * promo / 100);
     }

      hasil.push({
        name: nama,
        departureCity: berangkatDari,
        destinationCity: menujuKe,
        transport: transport,
        totalcost: totalCost(),
      })
  }
  return hasil;
}







//Bis, pesawat, ker
console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO"
  )
);
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
// console.log(
//   "=================================================================================================="
// );
// console.log(
//   travelingIndonesia(
//     [
//       "Shafur-Surabaya-Yogyakarta-Kereta",
//       "Taufik-Semarang-Surabaya-Pesawat",
//       "Alex-Yogyakarta-Semarang-Kereta",
//     ],
//     "Dana"
//   )
// );
// // /*
// // [ { name: 'Shafur',
// //     departureCity: 'Surabaya',
// //     destinationCity: 'Yogyakarta',
// //     transport: 'Kereta',
// //     totalCost: 450000 },
// //   { name: 'Taufik',
// //     departureCity: 'Semarang',
// //     destinationCity: 'Surabaya',
// //     transport: 'Pesawat',
// //     totalCost: 247500 },
// //   { name: 'Alex',
// //     departureCity: 'Yogyakarta',
// //     destinationCity: 'Semarang',
// //     transport: 'Kereta',
// //     totalCost: 225000 } ]
// // */
// console.log(
//   "=================================================================================================="
// );
// console.log(
//   travelingIndonesia(
//     ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
//     "Gopay"
//   )
// );
// // /*
// // [ { name: 'Katy',
// //     departureCity: 'Surabaya',
// //     destinationCity: 'Denpasar',
// //     transport: 'Pesawat',
// //     totalCost: 261250 },
// //   { name: 'Andika',
// //     departureCity: 'Denpasar',
// //     destinationCity: 'Surabaya',
// //     transport: 'Bis',
// //     totalCost: 213750 } ]
// // */
// console.log(
//   "=================================================================================================="
// );
// console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// // /*
// // [ { name: 'Putra',
// //     departureCity: 'Denpasar',
// //     destinationCity: 'Yogyakarta',
// //     transport: 'Pesawat',
// //     totalCost: 825000 } ]
// // */
// console.log(travelingIndonesia([], "Cash")); // [];
