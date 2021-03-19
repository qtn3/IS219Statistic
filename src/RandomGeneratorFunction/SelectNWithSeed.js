const seed = require('seedrandom');

module.exports= class SelectNWithSeed{
    SelectWithSeed(arg, num, rand){
        seed(rand, {global:true});
        let arr = [];
        while(arr.length < num){
            let i = Math.random()*arg.length;
            let floor = Math.floor(i);
            arr.push(arg[floor]);
        }
        return arr;
    }
}