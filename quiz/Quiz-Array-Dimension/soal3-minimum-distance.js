function minDistanceBetweenGreatest(arr) {
    let map = {};
    let max = -1;

    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = [];
        }
        map[arr[i]].push(i);

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    if (map[max].length === 1) {
        return 0;
    }

    let min = Number.MAX_VALUE;

    for (let i = 0; i < map[max].length - 1; i++) {
        let low = map[max][i + 1] - map[max][i];
        if (low < min) {
            min = low;
        }
    }

    return min;
}

console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0
