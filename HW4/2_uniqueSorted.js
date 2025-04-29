function uniqueSorted(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(uniqueSorted([5, 3, 8, 3, 1, 5, 8]));