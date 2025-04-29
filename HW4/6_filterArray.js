function filterArray(arr, predicate) {
    let result = [];
    for (let item of arr) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0));