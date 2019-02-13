
function add(v1, v2) {
    return v1 + v2;
}

function subtract(v1, v2) {
    return v1 - v2;
}

function multiply(v1, v2) {
    return v1 * v2;
}

function even_Odd(v1) {
    if (v1 % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

let sum = add;

const calc = {
    'add': add,
    'subtract': subtract,
    'multiply': multiply,
    'even_odd': even_Odd,
};

function math2(a, v1, v2) {

    return calc[a](v1, v2);


};

function math(a, v1, v2) {
    if (a === 'add') {
        return add(v1, v2);
    } else if (a === 'subtract') {
        return subtract(v1, v2);
    } else if (a === 'multiply') {
        return multiply(v1, v2);
    }
};



const dict = {
    1: 'one',
    2: 'two',
    3: 'three',
};
function lookup(xxxxx) {
    // console.log(dict[xxxxx])
    return dict[xxxxx];

};

export default { add, subtract, multiply, even_Odd, sum, calc, math, lookup, math2 };
