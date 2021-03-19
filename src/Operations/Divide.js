function Divide(a, b) {
    let quotient = a / b;
    if(quotient !== quotient){
        throw new Error(a + " / " + b);
    }
    return a / b;
}
module.exports = Divide;