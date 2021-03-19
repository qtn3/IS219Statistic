module.exports= class RandomNumberWithoutSeed{
    IntWithoutSeed(minimum, maximum){
        let num = Math.random() * (maximum - minimum) + minimum;
        return num
    }
    DecWithoutSeed(minimum, maximum){
        let num = Math.floor((Math.random() * (maximum - minimum) + minimum));
        return num/1.0;
    }
}