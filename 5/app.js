const calculator = require("./tools/calculator");

function calculate(a, b, func) {
    return func(a, b);
}

console.log(calculate(10, 5, calculator.sum));
console.log(calculate(10, 5, calculator.sub));
console.log(calculate(10, 5, calculator.mul));
console.log(calculate(10, 5, calculator.div));