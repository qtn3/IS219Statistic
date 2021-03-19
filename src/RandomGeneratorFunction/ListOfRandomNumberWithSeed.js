const seed = require('seedrandom');

module.exports= class ListOfRandomNumberWithSeed{
    constructor() {
        self.arr = [];
    }
    ListIntWithSeed(minimum, maximum, length, rand){
        seed(rand, {global:true});
        for(let i=0; i<length; i++){
            self.arr.push(Math.floor(Math.random()*(maximum-minimum)+minimum))
        }
        return self.arr;
    }
    ListDecWithSeed(minimum, maximum, length, rand){
        seed(rand, {global:true});
        for(let i=0; i<length; i++){
            self.arr.push(Math.random()*(maximum-minimum)+minimum);
        }
        return self.arr;
    }
}