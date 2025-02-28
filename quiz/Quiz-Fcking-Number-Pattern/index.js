//soal 1
function missingNum(arr) {
    if (!arr.length) return [];
    
    let nums = new Set(arr.flat().filter(x => x !== ' '));
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let missing = [];
  
    for (let i = min; i <= max; i++) {
      if (!nums.has(i)) missing.push(i);
    }
    
    return missing;
  }
  
  
  console.log(missingNum([
    [3, ' ', 5],
    [1, ' ', 7],
    [9, ' ', ' ']
  ])) // [ 2, 4, 6, 8 ]
  console.log(missingNum([
    [2, ' '],
    [' ', 5]
  ])) // [ 3, 4 ]
  console.log(missingNum([
    [11, ' ', 13],
    [17, ' ', 19],
    [' ', 16, ' ']
  ])) // [ 12, 14, 15, 18 ]
  console.log(missingNum([
    [3, ' ', 5, 15],
    [1, ' ', 7, 13],
    [9, ' ', ' ', 12],
    [' ', 16, ' ', ' ']
  ])) // [ 2, 4, 6, 8, 10, 11, 14 ]
  console.log(missingNum([])) // []

//soal 2
  function squareNumber(num) {
    if (num < 3) return 'Minimal input adalah 3';
    let result = Array.from({ length: num }, () => []);
    let counter = num * num;
    
    for (let i = 0; i < num; i++) {
      if (i % 2 === 0) {
        for (let j = num - 1; j >= 0; j--) result[i][j] = counter--;
      } else {
        for (let j = 0; j < num; j++) result[i][j] = counter--;
      }
    }
    
    return result;
  }
  
  console.log(squareNumber(3));
  // [ [x, o, x],  [o, x, #], [x, #, x] ]
  
  console.log(squareNumber(4));
  // [ [ x, o, x, # ],
  //   [ #, x, o, x ],
  //   [ x, o, x, # ],
  //   [ #, x, o, x ] ]
  
  console.log(squareNumber(5));
  // [ 
  //   [ x, o, x, #, x ],
  //   [ o, x, #, x, o ],
  //   [ x, o, x, #, x ],
  //   [ #, x, o, x, # ],
  //   [ x, o, x, #, x ] 
  // ]
  
  console.log(squareNumber(2)); // Minimal input adalah 3