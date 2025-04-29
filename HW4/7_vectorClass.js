class Vector {
    constructor(values) {
        this.values = values;
    }
    add(vec) {
        let result = this.values.map((v, i) => v + vec.values[i]);
        return new Vector(result);
    }
    sub(vec) {
        let result = this.values.map((v, i) => v - vec.values[i]);
        return new Vector(result);
    }
    dot(vec) {
        return this.values.reduce((sum, v, i) => sum + v * vec.values[i], 0);
    }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);

console.log(a.add(b).sub(b).dot(b));