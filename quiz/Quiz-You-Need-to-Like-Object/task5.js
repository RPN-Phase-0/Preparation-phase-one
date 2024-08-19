function deleteUndefinedKeys(data) {
    if (data.length === 0) return 'No data';
    
    let result = [];

    for (let obj of data) {
        let newObj = {};
        for (let key in obj) {
            if (obj[key] !== undefined) {
                newObj[key] = obj[key];
            }
        }
        result.push(newObj);
    }

    return result;
}

// TEST CASES
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
console.log(deleteUndefinedKeys([])); // No data
