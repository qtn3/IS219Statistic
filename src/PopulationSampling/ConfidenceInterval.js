const JStat = require('jstat');

function MeanFunction(e)
    {let total = 0, length = e.length;
    e.forEach(function (num){
        total += num;})
    return total/length;}
module.exports = function ConfidenceInterval(e, b)
    {let mf = MeanFunction(e);
    return JStat.normalci(mf, 1 - b, e);};