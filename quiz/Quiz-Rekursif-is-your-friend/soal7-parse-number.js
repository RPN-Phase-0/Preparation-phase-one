function parseNumber(equation) {
    if (equation == 0) {
        return '';
    }

    const placeValue = Math.pow(10, String(equation).length - 1);
    const currentValue = Math.floor(equation / placeValue) * placeValue;
    const remainder = equation % placeValue;

    if (currentValue != 0) {
        const next = parseNumber(remainder);
        return next == '' ? String(currentValue) : currentValue + '+' + next;
    }
}

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3
