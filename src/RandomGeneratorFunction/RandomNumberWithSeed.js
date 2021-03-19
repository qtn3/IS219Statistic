const seed = require('seedrandom');

module.exports= class RandomNumberWithSeed{
    IntWithSeed(minimum, maximum, rand){
        let seedRand = seed(rand);
        let num = seedRand() * (maximum - minimum) + minimum;
        return num
    }
    DecWithSeed(minimum, maximum, rand){
        let seedRand = seed(rand);
        let num = (seedRand() * (maximum - minimum) + minimum)/1.0;
        return num
    }
}