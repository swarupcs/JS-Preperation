let car1 = {
    brand: 'Toyota',
    company: 'Toyota Motor Corporation'
};

function displayDetails(model, year) {
    console.log(`Brand: ${this.brand}, Company: ${this.company}, Model: ${model}, Year: ${year}`);
}
/*

displayDetails.apply(car1, ['Camry', 2020]); // Brand: Toyota, Company: Toyota Motor Corporation, Model: Camry, Year: 2020

*/




Function.prototype.myApply = function(context = {}, argsArray = []) {
    if(typeof this !== 'function') {
        throw new TypeError('Not a function');
    }

    if(!Array.isArray(argsArray)) {
        throw new TypeError('CreateListFromArrayLike called on non-object');
    }

    context.fn = this;
    context.fn(...argsArray);
}

displayDetails.myApply(car1, ['Camry', 2020]); // Brand: Toyota, Company: Toyota Motor Corporation, Model: Camry, Year: 2020