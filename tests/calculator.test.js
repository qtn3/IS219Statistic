const Calculator = require('../src/Calculator');
const mathJS = require('mathjs');

test('Calculator divide 2 by  2 to equal 1', () => {
    let calc = new Calculator();
    let result = calc.Divide(2,2);
    expect(result).toBe(1);
    expect(calc.Result).toBe(1);

});
test('Calculator Add 2 by  2 to equal 4', () => {
    let calc = new Calculator();
    expect(calc.Sum(2, 3)).toBe(5);
    expect(calc.Result).toBe(5);

});
test('Calculator Subtract 6 by  2 to equal 12', () => {
    let calc = new Calculator();
    expect(calc.Difference(6, 2)).toBe(12);
    expect(calc.Result).toBe(12);

});
test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let Calc = new Calculator();
    expect(Calc.Multiply(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});

test('Calculator add array of 1,2,3,4 and get result 10', () => {
    let calc = new Calculator();
    let myArray = [1,2,3,4]
    expect(calc.Sum(myArray)).toBe(10);
    expect(calc.Result).toBe(10);

});
test('Descriptive Mean Function', () => {
    const arr = [1,2,3,4,5];
    let cal = Calculator.MeanFunction(arr);
    expect(cal).toBe(3);
});
test('Descriptive Median Function', () => {
    const arr = [1,2,3,4,5];
    let cal = Calculator.MedianFunction(arr);
    expect(cal).toBe(3);
});
test('Descriptive Mode Function', () => {
    const arr = [1,2,3,4,5,5,5,6];
    let cal = Calculator.ModeFunction(arr);
    expect(cal).toStrictEqual([5]);
});
test('Descriptive Variance Function', () => {
    const arr = [1,2,3,4,5,6];
    let cal = Calculator.VarianceFunction(arr);
    expect(cal).toBe(2.9166666666666665);
});
test('Descriptive Standard Deviation Function', () => {
    const arr = [1,2,3,4,5,6];
    let cal = Calculator.StandardDeviationFunction(arr);
    expect(cal).toBe(mathJS.std(arr));
});
test('Test Quartiles Function', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let cal = Calculator.QuartilesFunction(arr);
    expect(cal).toBe('Lower: 4.5 Middle: 7 Upper: 11.5');
});
test('Descriptive Skewness Function', () => {
    const arr = [1,4,5,8,9,2];
    let cal = Calculator.SkewnessFunction(arr);
    expect(cal).toBe(0.22622132885439267);
});
test('Descriptive Mean Absolute Deviation Function', () => {
    const arr = [1,4,5,8,9,2];
    let cal = Calculator.MeanAbsoluteDeviation(arr);
    expect(cal).toBe(23.36111111111111);
});
test('Descriptive Zscore Function', () => {
    expect(Calculator.ZScoreFunction(5,3,2)).toBe(1);
});
test('Sample Correlation Function', () => {
    let c = [[1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,10]];
    let result = Calculator.SampleCorrelationFunction(c);
    expect(result).toBe(1);
});