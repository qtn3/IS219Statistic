const MathOperations = require('./Operations/MathOperations');
const calculation = require('./Models/Calculation');
const MeanFunction = require('./Operations/StatisticsFunctions/MeanFunction');
const MedianFunction = require('./Operations/StatisticsFunctions/MedianFunction');
const ModeFunction = require('./Operations/StatisticsFunctions/ModeFunction');
const VarianceFunction = require('./Operations/StatisticsFunctions/VarianceFunction');
const StandardDeviationFunction = require('./Operations/StatisticsFunctions/StandardDeviationFunction');
const QuartilesFunction = require('./Operations/StatisticsFunctions/QuartilesFunction');
const SkewnessFunction = require('./Operations/StatisticsFunctions/SkewnessFunction');
const SampleCorrelationFunction = require('./Operations/StatisticsFunctions/SampleCorrelationFunction');
const PopulationCorrelationFunction = require('./Operations/StatisticsFunctions/PopulationCorrelationFunction');
const ZScoreFunction = require('./Operations/StatisticsFunctions/ZScoreFunction');
const MeanAbsoluteDeviation = require('./Operations/StatisticsFunctions/MeanAbsoluteDeviation');
const CheckEmpty = require('./CheckEmpty');

class Calculator {
    static arr = [];
    Sum(a = null, b = null) {
        if (Array.isArray(a)) {
            return this.Result = MathOperations.Sum(a);

        } else {
            return this.Result = MathOperations.Sum(a, b);
        }
    }
    Divide(a,b) {
        return this.Result = MathOperations.Quotient(a,b);
    }
    Multiply(a,b) {
        return this.Result = MathOperations.Product(a,b);
    }
    Difference(a,b) {
        return this.Result = MathOperations.Difference(a,b);
    }
    static MeanFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,MeanFunction));
        return new calculation(arg,MeanFunction).GetResults();
    }
    static MedianFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,MedianFunction));
        return new calculation(arg,MedianFunction).GetResults();
    }
    static ModeFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,ModeFunction));
        return new calculation(arg,ModeFunction).GetResults();
    }
    static VarianceFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,VarianceFunction));
        return new calculation(arg,VarianceFunction).GetResults();
    }
    static StandardDeviationFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,StandardDeviationFunction));
        return new calculation(arg,StandardDeviationFunction).GetResults();
    }
    static QuartilesFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,QuartilesFunction));
        return new calculation(arg,QuartilesFunction).GetResults();
    }
    static SkewnessFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,SkewnessFunction));
        return new calculation(arg,SkewnessFunction).GetResults();
    }
    static SampleCorrelationFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,SampleCorrelationFunction));
        return new calculation(arg,SampleCorrelationFunction).GetResults();
    }
    static PopulationCorrelationFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,PopulationCorrelationFunction));
        return new calculation(arg,PopulationCorrelationFunction).GetResults();
    }
    static ZScoreFunction(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,ZScoreFunction));
        return new calculation(arg,ZScoreFunction).GetResults();
    }
    static MeanAbsoluteDeviation(arg) {
        if(!CheckEmpty(arg) || !String(arg))
        {return false;}
        Calculator.arr.push(new calculation(arg,MeanAbsoluteDeviation));
        return new calculation(arg,MeanAbsoluteDeviation).GetResults();
    }
}
module.exports = Calculator;