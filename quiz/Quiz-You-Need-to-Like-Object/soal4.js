function travelingIndonesia(arr, emoney) {
    if (!arr?.length) return []

    let res = []

    for (const el of arr) {
        const [name, departureCity, destinationCity, transport] = convertStrToArr(el)

        const totalCost = calculateCosts(transport, departureCity, destinationCity, emoney)

        res.push({ name, departureCity, destinationCity, transport, totalCost })
    }

    sort(res)

    return res
}

function convertStrToArr(str) {
    let res = []
    let tmp = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "-") {
            tmp += str[i]
        }

        if (str[i + 1] === "-" || i === str.length - 1) {
            res.push(tmp)
            tmp = ""
        }
    }

    return res
}

function calculateCosts(transportType, departure, destination, paymentMethod) {
    let distances = {
        "Yogyakarta": 0,
        "Semarang": 1,
        "Surabaya": 2,
        "Denpasar": 3
    }

    let costs = {
        "Pesawat": 275000,
        "Kereta": 250000,
        "Bis": 225000,
    }

    let discounts = {
        "OVO": 0.15,
        "Dana": 0.10,
        "Gopay": 0.05,
        "Cash": 0.00
    }

    let distance = Math.abs(distances[departure] - distances[destination])

    let discount = costs[transportType] * discounts[paymentMethod]

    return distance * (costs[transportType] - discount)
}

function sort(arr) {
    let swapped = false

    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].totalCost < arr[j + 1].totalCost) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }
        if (!swapped) break
    }
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