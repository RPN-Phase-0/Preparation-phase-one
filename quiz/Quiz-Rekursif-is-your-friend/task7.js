function parseNumber(equation) {
    if (equation === 0) return '';
    
    let length = equation.toString().length;
    let firstDigit = Math.floor(equation / Math.pow(10, length - 1)) * Math.pow(10, length - 1);
    
    return firstDigit + (equation % Math.pow(10, length - 1) > 0 ? '+' : '') + parseNumber(equation % Math.pow(10, length - 1));
}

console.log(parseNumber(3333)); // 3000+300+30+3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
