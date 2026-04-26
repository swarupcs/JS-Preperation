// Array.reduce((acc, curr, i, arr) => {}, initialValue);

Array.prototype.myReduce = function(cb, initialValue) {
    let accumulator = initialValue;

    for(let i = 0; i < this.length; i++) {
        if(accumulator === undefined && i === 0) {
            accumulator = this[i];
        } else {
            accumulator = cb(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}

const nums = [1, 2, 3, 4, 5];

const sum = nums.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);

console.log(sum); // 15