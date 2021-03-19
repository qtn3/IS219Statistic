const JStat = require('jstat');

module.exports = function CochranSampling(a, b, c)
    {let score = -JStat.normal.inv((1 - b) / 2, 0, 1);
    let result = ((Math.pow(score,2) * (c) * (1 - c)) / Math.pow(a, 2));
    return result};