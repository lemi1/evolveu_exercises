import lm from './Math';
test('this test will add 2 numbers', () => {
    expect(lm.add(3,7)).toBe(10);
    expect(lm.add(67,2)).toBe(69);
});

test('this test will subtract 2 numbers',() => {
    expect(lm.subtract(10,8)).toBe(2);
    expect(lm.subtract(11,5)).toBe(6);
});

test('this test will Multiply 2 numbers',() => {
    expect(lm.multiply(10,8)).toBe(80);
    expect(lm.multiply(2,8)).toBe(16);
});

test(' display if a number is even or odd',() => {
    expect(lm.even_Odd(10)).toBe('even');
    expect(lm.even_Odd(18)).toBe('even');
    expect(lm.even_Odd(7)).toBe('odd');
    expect(lm.even_Odd(35)).toBe('odd');
});



test(' display if a number is even or odd',() => {
    expect(lm.sum(7,4)).toBe(11);
    expect(lm.sum(3,5)).toBe(8);
});

test(' test math',() => {
    expect(lm.math('add',7,4)).toBe(11);
    expect(lm.math('subtract',6,5)).toBe(1);
    expect(lm.math('multiply',7,4)).toBe(28);
    // expect(lm.math(even_Odd(3))).toBe('odd');
    // expect(lm.math(even_Odd(3))).toBe('odd');

});

test(' test math2',() => {
    expect(lm.math2('add',7,4)).toBe(11);
    expect(lm.math2('subtract',7,4)).toBe(3);
    expect(lm.math2('multiply',7,4)).toBe(28);
});

test(' testing lookup',() => {
    expect(lm.lookup(1)).toBe('one');
    expect(lm.lookup(2)).toBe('two');
    expect(lm.lookup(3)).toBe('three');
    // expect(lm.lookup(123)).toBe('three');
});









