
const simpleArraySum = ar => {
    let sum = 0;
    let n = ar.length;
    for (let i = 0; i < n; i++) {
        sum = sum +  ar[i];
    }
    return sum;
}

console.log(simpleArraySum([1, 2, 3,4, 10, 11]));