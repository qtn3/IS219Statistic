function SampleCorrelationFunction(c) {
    let num = c[0], arr = [], numA = [], numB = [], i, length = num.length;
    let totalA = 0, totalB = 0, totalAB = 0, total = 0, total2 = 0;
    for (i = 0; i < length; i++) {
        arr.push(num[i] * c[1][i]);
        numA.push(num[i] * num[i]);
        numB.push(c[1][i] * c[1][i]);
    }
    for (i = 0; i < length; i++) {
        totalA += num[i];
        totalB += c[1][i];
        totalAB += arr[i];
        total += numA[i];
        total2 += numB[i];
    }
    let result = ((length * totalAB) - (totalA * totalB)) / (Math.sqrt(((length * total) - (totalA * totalA)) * ((length * total2) - (totalB * totalB))));
    return result;
}
module.exports = SampleCorrelationFunction;