const skew = require('compute-skewness');
const mathJS = require('mathjs');

module.exports = function SkewnessFunction(arg) {
    return skew(arg);
}