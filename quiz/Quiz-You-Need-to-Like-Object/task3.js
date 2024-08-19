function initialObjectGrouping(studentsArr) {
    let result = {};

    for (let name of studentsArr) {
        let initial = name[0];
        if (!result[initial]) {
            result[initial] = [];
        }
        result[initial].push(name);
    }

    return result;
}

// TEST CASES
console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
// Expected output: { B: ['Budi', 'Badu'], J: ['Joni', 'Jono'] }

console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
// Expected output: { M: ['Mickey'], Y: ['Yusuf'], D: ['Donald'], A: ['Ali'], G: ['Gong'] }

console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
// Expected output: { R: ['Rock', 'Rocker'], S: ['Stone', 'Sticker'], B: ['Brick'] }
