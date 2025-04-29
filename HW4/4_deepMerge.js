function deepMerge(obj1, obj2) {
    for (let key in obj2) {
        if (obj2[key] instanceof Object && key in obj1 && obj1[key] instanceof Object) {
            deepMerge(obj1[key], obj2[key]);
        } else {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

const obj1 = { a: 1, b: { x: 2, y: 3 } };
const obj2 = { b: { y: 5, z: 6 }, c: 7 };
console.log(deepMerge(obj1, obj2));