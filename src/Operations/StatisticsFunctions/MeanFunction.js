const Addition = require('../Addition');
const Divide = require('../Divide');

module.exports= function MeanFunction(arg) {
    const length = arg.length;
    let total = 0 ;
    for(let i=0; i<length; i++) {
        total = Addition(total, arg[i]);
    };
    return Divide(total, length);
}