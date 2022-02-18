const isEven = function (num) { // regular func expression
    return num % 2 === 0;
}

const isEven = (num) => { // arrow func expression with parent around param
    return num % 2 === 0;
}

const isEven = num => { // no parent around param
    return num % 2 === 0;
}

const isEven = num => ( // implicit return !!! no ;!!! it works with only one exp !!!
    num % 2 === 0
);

const isEven = num => num % 2 === 0; // one -liner implicit return

