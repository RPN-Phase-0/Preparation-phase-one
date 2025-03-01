function minDistanceBetweenGreatest(arr) {
    let listIdx = {}
    let n = arr.length
    let highest = arr[0]
    let minimum = Infinity

    for (let i = 0; i < arr.length; i++) {
        if (!listIdx[arr[i]])
            listIdx[arr[i]] = []

        listIdx[arr[i]].push(i)

        if (arr[i] >= highest)
            highest = arr[i]
    }

    highest = listIdx[highest]
    n = highest.length

    if (n === 1) return 0

    for (let i = 0; i < n - 1; i++) {
        if (highest[i + 1] - highest[i] < minimum)
            minimum = highest[i + 1] - highest[i]
    }

    return minimum
}

console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0