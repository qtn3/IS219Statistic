const PopulationSamplingFunctions = require('../src/PopulationSampling/PopulationSamplingFunctions');

function Count(e)
    {let lst = {};
    e.forEach(function(num)
    {if(num in lst)
    {lst[num]++;}
    else {lst[num] = 1;}})
    return lst;}
function CheckMargin(e, sub)
    {let a = Count(e), b = Count(sub), i;
    for(i in b)
    {if(a[i]<b[i])
    {return false;}}
    return true;}
test('Simple Random Checks for Correcting Amount ', () => {
    expect(PopulationSamplingFunctions.SimpleRandomFunction([5,8,1,4], 3)).toHaveLength(3);
});
test('Simple Random Checks for Duplicating ', () => {
    let e = [5,8,1,4,7,14,18,21,54,62,114,165,190,48,46,86,97,38,239,50];
    let length = e.length - 1;
    let result = PopulationSamplingFunctions.SimpleRandomFunction(e, length);
    expect(CheckMargin(e,result)).toBeTruthy();
});
test('Simple Random Checks for Array and Empty Array ', () => {
    expect(()=>{PopulationSamplingFunctions.SimpleRandomFunction("5", 2)}).toThrowError("Please Input an Array");
    expect(()=>{PopulationSamplingFunctions.SimpleRandomFunction([], 4)}).toThrowError("Cannot be Empty");
});
test('Systematic Checks for Correcting Amount', () => {
    expect(PopulationSamplingFunctions.SystematicFunction([15,92,31,41], 4)).toHaveLength(4);
    expect(PopulationSamplingFunctions.SystematicFunction([16,25,38,34,15,69,75,81], 8)).toHaveLength(8);
});
test('Systematic Checks Correcting Array Numbers', () => {
    expect(PopulationSamplingFunctions.SystematicFunction([4,2,5,6], 4)).toEqual([4,2,5,6]);
    expect(PopulationSamplingFunctions.SystematicFunction([2,5,7,8,1,4,15,68,45], 8)).toEqual([2,5,7,8,1,4,15,68]);
});
test('Systematic Checks for Array and Empty Array ', () => {
    expect(()=>{PopulationSamplingFunctions.SystematicFunction("5", 2)}).toThrowError("Please Input an Array");
    expect(()=>{PopulationSamplingFunctions.SystematicFunction([], 4)}).toThrowError("Cannot be Empty");
});
test('Confidence Interval Checks for Correct', () => {
    let num = PopulationSamplingFunctions.ConfidenceIntervalFunction([24,5,7,8,14,68,54,89], 0.95);
    expect(num[1]).toBeCloseTo(54.594489419918446, 27.125510580081553);
});
test('Confidence Interval Checks for Array and Empty Array ', () => {
    expect(()=>{PopulationSamplingFunctions.ConfidenceIntervalFunction("5", 2)}).toThrowError("Please Input an Array");
    expect(()=>{PopulationSamplingFunctions.ConfidenceIntervalFunction([], 4)}).toThrowError("Cannot be Empty");
});
test('Margin of Error Checks Array and Empty Array', () => {
    expect(()=>{PopulationSamplingFunctions.MarginErrorFunction("5", 2)}).toThrowError("Please Input an Array");
    expect(()=>{PopulationSamplingFunctions.MarginErrorFunction([], 4)}).toThrowError("Cannot be Empty");
});
test('Cochran Checks for Correct', () => {
    let num = PopulationSamplingFunctions.CochranFunction(0.2, 0.5, 0.15);
    expect(Math.ceil(num)).toBeCloseTo(2);
});

test('Confidence Interval without Standard Deviation', () => {
    let num = PopulationSamplingFunctions.ConfidenceIntervalStdFunction(0.2, 0.5);
    expect(Math.ceil(num)).toBeCloseTo(1);
});
test('Confidence Interval with Standard Deviation ', () => {
    let num = PopulationSamplingFunctions.ConfidenceIntervalStdFunction(0.2, 0.5, 1.6);
    expect(Math.ceil(num)).toBeCloseTo(3);
});