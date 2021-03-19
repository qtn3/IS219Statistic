const Square = require('../Square');
const MeanFunction = require('../StatisticsFunctions/MeanFunction');
const Divide = require('../Divide');

module.exports= function VarianceFunction(arg) {
    let meanFunction = MeanFunction(arg), length = arg.length, num = 0 ;
    for(let i=0; i<length; i++){
        num += Square(arg[i]-meanFunction, 2);
    }
    return Divide(num, length);
}