const JStat = require('jstat');

module.exports = function ConfidenceIntervalStd(a, b, c = null){
    let num = 0;
    if(c!==null)
        {num = (-JStat.normal.inv((1 - a)/2, 0, 1)) * c;
        num = num / (b / 2);
        num = Math.pow(num,2);}
    else
        {num = Math.pow(((-JStat.normal.inv((1 - a)/2, 0, 1)) / (b / 2)),2);
        num = num * (0.5 * (1 - 0.5));}
    return num;};