module.exports = function SystematicSampling(e, num){
    let arr = [], length = e.length, i;
    if(num>length)
    {num = length;}
    let int = Math.floor(length/num);
    for (i = 0; i < length; i = i + int)
    {if(arr.length === num){
            continue;
        }
        arr.push(e[i]);}
    return arr;};