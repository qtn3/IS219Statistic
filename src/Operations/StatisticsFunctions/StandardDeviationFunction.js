const mathJS = require('mathjs');

module.exports= function StandardDeviationFunction (arg) {
    return mathJS.sqrt(mathJS.variance(arg));
}