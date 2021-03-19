const mathJS = require('mathjs');

module.exports= function QuartilesFunction(arg) {
    let q1 = mathJS.quantileSeq(arg, 0.25, this.sorted);
    let q3 = mathJS.quantileSeq(arg, 0.75, this.sorted);
    let q2 = q3 - q1;
    let q = 'Lower: ' + q1 + ' Middle: ' + q2 + ' Upper: ' + q3;
    return q;
}