const mathJS = require('mathjs');
const Subtraction = require('../Subtraction');

module.exports= function MeanAbsoluteDeviation(arg){
    let num = mathJS.mean(arg);
    return mathJS.mean(arg.map(function(number){
        return mathJS.abs(Subtraction(number, num));
    }));
}