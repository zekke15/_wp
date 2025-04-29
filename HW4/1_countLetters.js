function countLetters(str) {
    const map = new Map();
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }
    return map;
}

console.log(countLetters("banana"));