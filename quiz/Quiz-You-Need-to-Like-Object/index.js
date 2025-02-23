function ganjilGenapAsianGames(date, data) {
    if (date < 1 || date > 31) {
      return 'invalid dates';
    }
  
    let violations = 0; 
    for (let i = 0; i < data.length; i++) {
      let vehicle = data[i];
      let plat = vehicle.plat.split(' ')[1];
      let lastDigit = parseInt(plat.charAt(plat.length - 1));
  
      if (vehicle.type === 'Mobil') {
        if (date % 2 === 0 && lastDigit % 2 !== 0) {
          violations++;
        } else if (date % 2 !== 0 && lastDigit % 2 === 0) {
          violations++;
        }
      }
    }
  
    return violations; 
  }
  
  // Test cases
  console.log(ganjilGenapAsianGames(30, [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'AB 87 RFS',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }])) // 1
  
  console.log(ganjilGenapAsianGames(26, [{
    plat: 'A 24 HE',
    type: 'Mobil'
  }, {
    plat: 'AB 871 RFS',
    type: 'Mobil'
  }, {
    plat: 'Z 9992 ERT',
    type: 'Mobil'
  }])) // 1
  
  console.log(ganjilGenapAsianGames(1, [{
    plat: 'A 24 WE',
    type: 'Mobil'
  }, {
    plat: 'AB 871 RFS',
    type: 'Mobil'
  }, {
    plat: 'Z 9992 XOXO',
    type: 'Mobil'
  }])) // 2
  
  console.log(ganjilGenapAsianGames(1, [{
    plat: 'A 2431 HE',
    type: 'Motor'
  }, {
    plat: 'AB 8711 RFS',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Motor'
  }])) // 0
  
  console.log(ganjilGenapAsianGames(32, [{
    plat: 'X 123 HAHA',
    type: 'Mobil'
  }])) // invalid dates
  
  console.log(ganjilGenapAsianGames(0, [{
    plat: 'X 123 HAHA',
    type: 'Mobil'
  }])) // invalid dates
  
  
  function economyChangeSummary(tradeActivity) {
    let duitJeff = 100000;
    let duitLarry = 95000;
    let duitJack = 90000;
    const result = [];
  
    function getNameAndPercentage(activity) {
      let name = '';
      let percentage = '';
      let isNameEnd = false;
  
      for (let i = 0; i < activity.length; i++) {
        if (activity[i] === '+' || activity[i] === '-') {
          isNameEnd = true;
          percentage += activity[i];
        } else if (isNameEnd) {
          percentage += activity[i];
        } else {
          name += activity[i];
        }
      }
      return { name: name.trim(), percentage: parseFloat(percentage) };
    }
  
    for (let i = 0; i < tradeActivity.length; i++) {
      let activities = tradeActivity[i];
      
      for (let j = 0; j < activities.length; j++) {
        const activity = activities[j];
        const { name, percentage } = getNameAndPercentage(activity);
        
        let owner, deposit;
  
        if (name === 'Jeff Bezos') {
          owner = 'Amazon';
          deposit = duitJeff;
        } else if (name === 'Larry Page') {
          owner = 'Google';
          deposit = duitLarry;
        } else if (name === 'Jack Ma') {
          owner = 'Alibaba';
          deposit = duitJack;
        }
  
        if (activity.includes('+')) {
          deposit += deposit * (percentage / 100);
        } else if (activity.includes('-')) {
          deposit -= deposit * (percentage / 100);
        }
  
        result.push({ name: name, deposit: deposit, owner: owner });
  
        if (name === 'Jeff Bezos') duitJeff = deposit;
        else if (name === 'Larry Page') duitLarry = deposit;
        else if (name === 'Jack Ma') duitJack = deposit;
      }
    }
  
    return result;
  }
  
  console.log(economyChangeSummary([
    ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
    ['Larry Page+2%', 'Larry Page-1%'],
    ['Jack Ma+4%'],
    ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
  ]));
  /* 
    [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
      { name: 'Larry Page', deposit: 104500, owner: 'Google' },
      { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
      { name: 'Larry Page', deposit: 106590, owner: 'Google' },
      { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
      { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
      { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
      { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
      { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
      { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
  */
  
  console.log(economyChangeSummary([
    ['Jeff Bezos-10%']
  ]));
  /*
    [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
  */
  function initialObjectGrouping(studentsArr) {
    let result = {}; 
  
    for (let i = 0; i < studentsArr.length; i++) {
      let name = studentsArr[i]; 
      let firstLetter = name[0]; 
      
      if (!result[firstLetter]) {
        result[firstLetter] = [];
      }
    
      result[firstLetter].push(name);
    }
  
    return result;
  }
  
  console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
  /* 
  {
    B: [ 'Budi', 'Badu' ],
    J: [ 'Joni', 'Jono' ]
  }
  */
  
  console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
  /* 
  {
    M: [ 'Mickey' ],
    Y: [ 'Yusuf' ],
    D: [ 'Donald' ],
    A: [ 'Ali' ],
    G: [ 'Gong' ]
  }
  */
  
  console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
  /* 
  {
    R: [ 'Rock', 'Rocker' ],
    S: [ 'Stone', 'Sticker' ],
    B: [ 'Brick' ]
  }
  */
  function travelingIndonesia(arr, emoney) {
  
    const transportCosts = {
      'Pesawat': 275000,
      'Kereta': 250000,
      'Bis': 225000
    };
  
  
    const discounts = {
      'OVO': 0.15,
      'Dana': 0.10,
      'Gopay': 0.05,
      'Cash': 0
    };
  
  
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      const data = arr[i].split('-');
      const name = data[0];
      const departureCity = data[1];
      const destinationCity = data[2];
      const transport = data[3];
  
  
      const baseCost = transportCosts[transport];
      const discount = discounts[emoney];
      const totalCost = baseCost - (baseCost * discount);
  
  
      let journey = {
        name: name,
        departureCity: departureCity,
        destinationCity: destinationCity,
        transport: transport,
        totalCost: totalCost
      };
  
    
      result.push(journey);
    }
  
    return result;
  }
  
  // Test cases
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
  /*
  [ { name: 'Shafur',
      departureCity: 'Surabaya',
      destinationCity: 'Yogyakarta',
      transport: 'Kereta',
      totalCost: 450000 },
    { name: 'Taufik',
      departureCity: 'Semarang',
      destinationCity: 'Surabaya',
      transport: 'Pesawat',
      totalCost: 247500 },
    { name: 'Alex',
      departureCity: 'Yogyakarta',
      destinationCity: 'Semarang',
      transport: 'Kereta',
      totalCost: 225000 } ]
  */
  
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
  /*
  [ { name: 'Katy',
      departureCity: 'Surabaya',
      destinationCity: 'Denpasar',
      transport: 'Pesawat',
      totalCost: 261250 },
    { name: 'Andika',
      departureCity: 'Denpasar',
      destinationCity: 'Surabaya',
      transport: 'Bis',
      totalCost: 213750 } ]
  */
  
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
  /*
  [ { name: 'Putra',
      departureCity: 'Denpasar',
      destinationCity: 'Yogyakarta',
      transport: 'Pesawat',
      totalCost: 825000 } ]
  */
  
  console.log(travelingIndonesia([], 'Cash')); // []
  
function deleteUndefinedKeys(data) {
    if (data.length === 0) {
      return 'No data';
    }
  
    for (let i = 0; i < data.length; i++) {
      for (let key in data[i]) {
        if (data[i][key] === undefined) {
          delete data[i][key];
        }
      }
    }
  
    return data;
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
  // No data
  