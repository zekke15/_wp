function sumArray(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

console.log(sumArray([1, 2, 3, 4]));