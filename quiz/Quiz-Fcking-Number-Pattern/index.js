console.log("=========[tugas1]=========")
function missingNum(arr) {
    let allNumbers = Array.from({ length: 9 }, (_, i) => i + 1);
    let presentNumbers = new Set();
    arr.forEach(row => {
      row.forEach(cell => {
        if (typeof cell === 'number') {
          presentNumbers.add(cell);
        }
      });
    });
   let missingNumbers = allNumbers.filter(num => !presentNumbers.has(num));
      return missingNumbers;
  }
  
  // TEST CASES
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
  
console.log("")
console.log("=========[tugas2]=========")
function squareNumber(num) {
    if (num < 3) return 'Minimal input adalah 3';
    
    let result = Array(num).fill().map(() => Array(num).fill(0));
    let counter = 1;
    
    for (let i = 0; i < num; i++) {
      if (i % 2 === 0) {
        for (let j = 0; j < num; j++) {
          result[i][j] = counter++;
        }
      } else {
        for (let j = num - 1; j >= 0; j--) {
          result[i][j] = counter++;
        }
      }
    }
    
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        result[i][j] = result[i][j] % 4 === 0 ? '#' : result[i][j] % 2 === 0 ? 'o' : 'x';
      }
    }
    
    return result;
  }
  
  console.log(squareNumber(3));
  console.log(squareNumber(4));
  console.log(squareNumber(5));
  console.log(squareNumber(2));
  
console.log("")
console.log("=========[tugas3]=========")
function squareNumber(num) {
    if (num < 3) {
        return 'Minimal input adalah 3';
    }

    const board = Array.from({ length: num }, () => Array(num).fill(0));
    let value = 1;

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            board[i][i % 2 === 0 ? j : num - 1 - j] = value++;
        }
    }

    return board.reverse();
}

// Test cases
console.log(squareNumber(3));
console.log(squareNumber(4));
console.log(squareNumber(5));
console.log(squareNumber(2));
console.log("jangan jangan lagi pleasee ini mah pleasee banget")