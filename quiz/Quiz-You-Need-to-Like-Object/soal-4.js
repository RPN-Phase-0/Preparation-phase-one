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
    const destination = ['Yogyakarta', 'Semarang', 'Surabaya', 'Denpasar'];
    const dataTravel = [];
    const arrObjTravel = [];
    let disc = 0;
    switch (emoney) {
        case 'OVO':
            disc = 15 / 100;
            break;
        case 'Dana':
            disc = 10 / 100;
            break;
        case 'Gopay':
            disc = 5 / 100;
            break;
        default:
            break;
    }
    for (let i = 0; i < arr.length; i++) {
        const data = [];
        const element = arr[i];
        let string = ''
        for (let j = 0; j < element.length; j++) {
            const element2 = element[j];
            if (element2 === '-') {
                data.push(string)
                string = ''
            } else {
                string += element2
            }
        }
        data.push(string)
        dataTravel.push(data);
    }
    for (let i = 0; i < dataTravel.length; i++) {
        const element = dataTravel[i];
        const name = element[0];
        const departureCity = element[1];
        const destinationCity = element[2];
        const transport = element[3];
        const distance = [];
        let totalCost = 0;
        for (let j = 0; j < destination.length; j++) {
            const data = destination[j];
            if (data === departureCity || data === destinationCity) {

                distance.push(j + 1)
            }
        }
        // - Pesawat, biayanya 275000
        // - Kereta, biayanya 250000
        // - Bis, biayanya 225000

        switch (transport) {
            case 'Pesawat':
                totalCost = (distance[1] - distance[0]) * 275000;
                totalCost -= (totalCost * disc);
                break;
            case 'Kereta':
                totalCost = (distance[1] - distance[0]) * 250000
                totalCost -= (totalCost * disc);
                break;
            case 'Bis':
                totalCost = (distance[1] - distance[0]) * 225000
                totalCost -= (totalCost * disc);
                break;
            default:
                break;
        }
        arrObjTravel.push({ name, departureCity, destinationCity, transport, totalCost: totalCost })
    }
    let n = arrObjTravel.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arrObjTravel[i]['totalCost'] < arrObjTravel[i + 1]['totalCost']) { // Descending comparison
                // Swap elements
                let temp = arrObjTravel[i];
                arrObjTravel[i] = arrObjTravel[i + 1];
                arrObjTravel[i + 1] = temp;
                swapped = true;
            }
        }
        n--; // Optimizes by reducing the range of comparison
    } while (swapped);
    console.log(arrObjTravel);

};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
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
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
// console.log(travelingIndonesia([], 'Cash')); // [];