let car1 = {
    brand: 'Toyota',
    company: 'Toyota Motor Corporation'
};

function displayDetails(model, year) {
    console.log(`Brand: ${this.brand}, Company: ${this.company}, Model: ${model}, Year: ${year}`);
}
/*

displayDetails.call(car1, 'Camry', 2020); // Brand: Toyota, Company: Toyota Motor Corporation, Model: Camry, Year: 2020

*/

Function.prototype.myCall = function(context = {}, ...args) {
    if(typeof this !== 'function') {
        throw new TypeError('Not a function');
    }

    context.fn = this;
    context.fn(...args);
}

displayDetails.myCall(car1, 'Camry', 2020); // Brand: Toyota, Company: Toyota Motor Corporation, Model: Camry, Year: 2020