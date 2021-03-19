const ZScore = require('../Operations/StatisticsFunctions/ZScoreFunction');
const StandardDeviationFunction = require('../Operations/StatisticsFunctions/StandardDeviationFunction');
const Root = require('../Operations/Root');

module.exports= function MarginofError(arg, num)
    {let zScore = ZScore(arg, num);
    let standard = StandardDeviationFunction(num);
    return (zScore * (standard/(Root(arg.length))));}