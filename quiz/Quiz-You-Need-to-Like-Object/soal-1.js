/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range 
    tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat 'ganjil'    
*/

function ganjilGenapAsianGames(date, data) {
  if (date < 1 || date > 31) return "invalid dates";

  let violation = 0;

  for (let i = 0; i < data.length; i++) {
    const vehicle = data[i];
    // return vehicle.type;

    if (vehicle.type === "Mobil") {
      const platNumber = vehicle.plat.split(" ")[1];
      const lastNumber = parseInt(platNumber[platNumber.length - 1], 10);

      // return lastNumber;

      const isDateEven = date % 2 !== 0;
      const isPlatEven = lastNumber % 2 !== 0;

      if (isDateEven !== isPlatEven) violation++;
    }
  }

  return violation;
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
