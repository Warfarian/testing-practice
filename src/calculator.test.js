const { experiments } = require('webpack');
const calculator = require('./calculator');

it("Calculates addition, subtraction, multiplication and division accurately", () => {
    let calc = new calculator();
    expect(calc.sum(1,2)).toBe(3);
    expect(calc.sub(1,2)).toBe(-1);
    expect(calc.mul(1,2)).toBe(2);
    expect(calc.div(1,2)).toBe(0.5);
})