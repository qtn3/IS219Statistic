module.exports= class RandomItemFromList{
    RandomItem(arr){
        let rand = Math.floor(Math.random()*arr.length);
        return arr[rand];
    }
}