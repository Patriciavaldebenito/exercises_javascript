
const first_value = (arr) => {
    let sum = 0;
    let pi = 0;
    for (let i = 0; i < arr.length; i++) {
        let value_one = arr[i][pi];
        pi = pi + 1;
        sum = sum + value_one;

    }
    return sum;
}
const second_value = (arr) => {
    let sum = 0;
    let pi = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        let value_second = arr[i][pi];
        pi = pi - 1;
        sum = sum + value_second;
    }
    return sum;
}

function diagonalDifference(arr) {

    let x = first_value(arr);
    let y = second_value(arr);

    return Math.abs(x - y)

}


const result = diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]);

console.log(result);