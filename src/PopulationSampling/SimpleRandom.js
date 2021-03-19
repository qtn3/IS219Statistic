const random = require('random');

function SimpleRandom(e, num){
    let remain = [...e], result = [], length = e.length, i;
    if(num>length)
    {num = length;}
    for (i = 0; i < num; i++)
    {let ind = random.int(0,remain.length-1);
        result.push(remain[ind]);
        remain.splice(ind, 1);}
    return result;
};
module.exports= SimpleRandom;