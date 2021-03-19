const Addition = require('../Addition');
const Divide = require('../Divide');

module.exports= function MedianFunction(arg) {
    arg.sort(function(a,b) {
        return a - b;
    });
    let c = Math.floor(arg.length/2);

    if(arg.length % 2) {
        return arg[c];
    }
    else
        return (Divide(Addition(arg[c-1], arg[c]), 2.0));
}
