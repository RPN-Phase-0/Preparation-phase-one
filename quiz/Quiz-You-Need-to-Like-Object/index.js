// Soal 1
function ganjilGenapAsianGames(date, data) {
  if (date < 1 || date > 31) return "invalid dates";
  let count = 0;
  let isDateOdd = date % 2 !== 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === "Mobil") {
      let platNumbers = data[i].plat.split(" ");
      let lastDigit = parseInt(platNumbers[platNumbers.length - 2].slice(-1));
      let isPlateOdd = lastDigit % 2 !== 0;
      if (isDateOdd !== isPlateOdd) {
        count++;
      }
    }
  }
  return count;
}
console.log(
  ganjilGenapAsianGames(30, [
    {
      plat: "B 1234 ABC",
      type: "Mobil",
    },
    {
      plat: "A 2457 HE",
      type: "Motor",
    },
    {
      plat: "AB 87 RFS",
      type: "Motor",
    },
    {
      plat: "Z 999 ERT",
      type: "Mobil",
    },
  ])
); // 1

console.log(
  ganjilGenapAsianGames(26, [
    {
      plat: "A 24 HE",
      type: "Mobil",
    },
    {
      plat: "AB 871 RFS",
      type: "Mobil",
    },
    {
      plat: "Z 9992 ERT",
      type: "Mobil",
    },
  ])
); // 1

console.log(
  ganjilGenapAsianGames(1, [
    {
      plat: "A 24 WE",
      type: "Mobil",
    },
    {
      plat: "AB 871 RFS",
      type: "Mobil",
    },
    {
      plat: "Z 9992 XOXO",
      type: "Mobil",
    },
  ])
); // 2

console.log(
  ganjilGenapAsianGames(1, [
    {
      plat: "A 2431 HE",
      type: "Motor",
    },
    {
      plat: "AB 8711 RFS",
      type: "Motor",
    },
    {
      plat: "Z 999 ERT",
      type: "Motor",
    },
  ])
); // 0

console.log(
  ganjilGenapAsianGames(32, [
    {
      plat: "X 123 HAHA",
      type: "Mobil",
    },
  ])
); // invalid dates

console.log(
  ganjilGenapAsianGames(0, [
    {
      plat: "X 123 HAHA",
      type: "Mobil",
    },
  ])
); // invalid dates

// Soal 2
function economyChangeSummary(tradeActivity) {
  let accounts = {
    "Jeff Bezos": { deposit: 100000, owner: "Amazon" },
    "Larry Page": { deposit: 95000, owner: "Google" },
    "Jack Ma": { deposit: 90000, owner: "Alibaba" },
  };
  let result = [];
  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      let transaction = tradeActivity[i][j];
      let name = "";
      let percent = "";
      for (let k = 0; k < transaction.length; k++) {
        if (transaction[k] === "+" || transaction[k] === "-") {
          name = transaction.slice(0, k);
          percent = transaction.slice(k);
          break;
        }
      }
      let change = (parseInt(percent) / 100) * accounts[name].deposit;
      if (percent.includes("-")) {
        accounts[name].deposit -= change;
      } else {
        accounts[name].deposit += change;
      }
      result.push({
        name,
        deposit: accounts[name].deposit,
        owner: accounts[name].owner,
      });
    }
  }
  return result;
}
console.log(
  economyChangeSummary([
    ["Jeff Bezos+5%", "Larry Page+10%", "Jeff Bezos-3%"],
    ["Larry Page+2%", "Larry Page-1%"],
    ["Jack Ma+4%"],
    ["Larry Page-8%", "Jack Ma+20%", "Jeff Bezos-3%", "Jeff Bezos+8%"],
  ])
);
console.log(
  "=============================================================================="
);

console.log(economyChangeSummary([["Jeff Bezos-10%"]]));
// Soal 3
function initialObjectGrouping(studentsArr) {
  let result = {};
  for (let i = 0; i < studentsArr.length; i++) {
    let initial = studentsArr[i][0];
    if (!result[initial]) {
      result[initial] = [];
    }
    result[initial].push(studentsArr[i]);
  }
  return result;
}
console.log(initialObjectGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/
console.log(
  initialObjectGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/
console.log(
  initialObjectGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
// Soal 4
function travelingIndonesia(arr, emoney) {
  let transportCost = { Pesawat: 275000, Kereta: 250000, Bis: 225000 };
  let discount = { OVO: 0.15, Dana: 0.1, Gopay: 0.05, Cash: 0 };
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let info = arr[i].split("-");
    let name = info[0];
    let departureCity = info[1];
    let destinationCity = info[2];
    let transport = info[3];
    let totalCost = transportCost[transport] * (1 - discount[emoney]);
    result.push({ name, departureCity, destinationCity, transport, totalCost });
  }
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

// Soal 5
function deleteUndefinedKeys(data) {
  if (data.length === 0) return "No data";
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let obj = {};
    for (let key in data[i]) {
      if (data[i][key] !== undefined) {
        obj[key] = data[i][key];
      }
    }
    result.push(obj);
  }
  return result;
}
console.log(deleteUndefinedKeys([{
    name: 'Dimitri',
    address: undefined,
    email: 'dimitri@mail.com',
    age: undefined,
    gender: 'male'
  },
  {
    name: 'Alexei',
    address: 'Earth',
    email: undefined,
    age: 18,
    gender: 'male'
  }
]));
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(deleteUndefinedKeys([{
    band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

console.log(deleteUndefinedKeys([]));