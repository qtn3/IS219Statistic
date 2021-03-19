module.exports= function ModeFunction(arg) {
    let arr = []
    let total = [];
    let num;
    let maximum = 0;

    for (let i = 0; i < arg.length; i += 1) {
        num = arg[i];
        total[num] = (total[num] || 0) + 1;
        if (total[num] > maximum) {
            maximum = total[num];
        }
    }

    for (let i in total)
        if (total.hasOwnProperty(i)) {
            if (total[i] === maximum) {
                arr.push(Number(i));
            }
        }

    return arr;
}