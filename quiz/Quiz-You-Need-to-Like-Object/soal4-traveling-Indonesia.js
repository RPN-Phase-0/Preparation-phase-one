const strToArr = (arr) => {
    const result = [];

    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "-") {
            str += arr[i];
        }

        if (arr[i + 1] == "-" || i == arr.length - 1) {
            result.push(str);
            str = "";
        }
    }

    return result;
};

const calculateCosts = (transport, departure, destination, payment) => {
    const costs = {
        "Pesawat": 275000,
        "Kereta": 250000,
        "Bis": 225000,
    };

    const discounts = {
        "OVO": 0.15,
        "Dana": 0.10,
        "Gopay": 0.05,
        "Cash": 0.00
    };

    const distances = {
        "Yogyakarta": 0,
        "Semarang":  1,
        "Surabaya": 2,
        "Denpasar": 3
    };

    const range = distances[departure] - distances[destination]; 
    const distance = range < 0 ? -range : range;

    const discount = costs[transport] * discounts[payment];

    const cost = (costs[transport] - discount) * distance;

    return cost;
};

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].totalCost < arr[j + 1].totalCost) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
};

function travelingIndonesia(arr, emoney) {
    if (!arr.length) {
        return [];
    }

    const result = [];

    for (const element of arr) {
        const [ name, departureCity, destinationCity, transport ] = strToArr(element);

        const totalCost = calculateCosts(transport, departureCity, destinationCity, emoney);

        result.push({ name, departureCity, destinationCity, transport, totalCost });
    }

    bubbleSort(result);

    return result;
}

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
console.log(travelingIndonesia([], 'Cash')); // [];
