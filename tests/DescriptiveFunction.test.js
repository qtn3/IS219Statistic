const MeanFunction = require('../src/Operations/StatisticsFunctions/MeanFunction');
const MedianFunction = require('../src/Operations/StatisticsFunctions/MedianFunction');
const ModeFunction = require('../src/Operations/StatisticsFunctions/ModeFunction');
const VarianceFunction = require('../src/Operations/StatisticsFunctions/VarianceFunction');
const StandardDeviationFunction = require('../src/Operations/StatisticsFunctions/StandardDeviationFunction');
const QuartilesFunction = require('../src/Operations/StatisticsFunctions/QuartilesFunction');
const SkewnessFunction = require('../src/Operations/StatisticsFunctions/SkewnessFunction');
const SampleCorrelationFunction = require('../src/Operations/StatisticsFunctions/SampleCorrelationFunction');
const PopulationCorrelationFunction = require('../src/Operations/StatisticsFunctions/PopulationCorrelationFunction');
const ZScoreFunction = require('../src/Operations/StatisticsFunctions/ZScoreFunction');
const MeanAbsoluteDeviation = require('../src/Operations/StatisticsFunctions/MeanAbsoluteDeviation');
const mathJS = require('mathjs');
const Calculation = require('../src/Models/Calculations');

test('Descriptive Mean Function', () => {
    const arr = [1,2,3,4,5];
    let op = MeanFunction;
    let cal = new Calculation(arr,op);
    expect(cal.GetResults()).toBe(3);
});
test('Descriptive Median Function', () => {
    const arr = [1,2,3,4,5];
    let op = MedianFunction;
    let cal = new Calculation(arr,op);
    expect(cal.GetResults()).toBe(3);
});
test('Descriptive Mode Function', () => {
    const arr = [1,2,3,4,5,5,5,6];
    let op = ModeFunction;
    let cal = new Calculation(arr,op);
    expect(cal.GetResults()).toStrictEqual([5]);
});
test('Descriptive Variance Function', () => {
    const arr = [1,2,3,4,5,6];
    let op = VarianceFunction;
    let cal = new Calculation(arr,op);
    expect(cal.GetResults()).toBe(2.9166666666666665);
});
test('Descriptive Standard Deviation Function', () => {
    const arr = [1,2,3,4,5,6];
    let op = StandardDeviationFunction;
    let cal = new Calculation(arr,op);
    expect(cal.GetResults()).toBe(mathJS.std(arr));
});
test('Test Quartiles Function', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let op = QuartilesFunction;
    let cal = new Calculation(arr,op);
    expect(cal.GetResults()).toBe('Lower: 4.5 Middle: 7 Upper: 11.5');
});
test('Descriptive Skewness Function', () => {
    const arr = [1,4,5,8,9,2];
    let op = SkewnessFunction;
    let cal = new Calculation(arr,op);
    expect(cal.GetResults()).toBe(0.22622132885439267);
});
test('Descriptive Mean Absolute Deviation Function', () => {
    const arr = [1,4,5,8,9,2];
    let op = MeanAbsoluteDeviation;
    let cal = new Calculation(arr,op);
    expect(cal.GetResults()).toBe(23.36111111111111);
});
test('Descriptive Zscore Function', () => {
    expect(ZScoreFunction(5,3,2)).toBe(1);
});
test('Sample Correlation Function', () => {
    let c = [[1,2,3,4,5,6,7,8,9],[2,3,4,5,6,7,8,9,10]];
    let result = SampleCorrelationFunction(c);
    expect(result).toBe(1);
});

