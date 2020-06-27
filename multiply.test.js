const multiply = require('./multiply');

test('multiply 4 * 2 to equal 8', () => {
    expect(multiply(4, 2)).toBe(8);
});

test('multiply 6 * 16 to equal 96', () => {
    expect(multiply(6, 16)).toBe(96);
});
