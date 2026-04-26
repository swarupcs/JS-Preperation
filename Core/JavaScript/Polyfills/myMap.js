// Array.map((num, i, arr) => {});


Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

const nums = [1, 2, 3, 4, 5];

const result = nums.myMap((num, i, arr) => {
    return num * 2;
});
console.log(result); // [2, 4, 6, 8, 10]