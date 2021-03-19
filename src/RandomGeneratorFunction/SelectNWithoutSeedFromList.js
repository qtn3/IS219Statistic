module.exports= class SelectNWithoutSeedFromList{
    SelectNWithoutSeed(arg, num){
        let arr = [];
        while(arr.length < num){
            let i = Math.random()*arg.length;
            let floor = Math.floor(i);
            arr.push(arg[floor]);
        }
        return arr;
    }
}