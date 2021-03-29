class Calculation {
    constructor(a, op) {
        this.a = a;
        this.op = op;
    }

    GetResults() {
        return this.op(this.a)
    }
}
module.exports = Calculation;