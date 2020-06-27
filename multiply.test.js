const multiply = require('./multiply');

function testMultiplication (a, b, expected) {
    expect(multiply(a, b)).toBe(expected)
}

test('multiply 1, 2 to be 2', () => testMultiplication(1, 2, 2))
test('multiply 4, 2 to be 8', () => testMultiplication(4, 2, 8))
test('multiply 6, 16 to be 96', () => testMultiplication(6, 16, 96))
test('multiply 10, 10 to be 100', () => testMultiplication(10, 10, 100))
test('multiply 4, 5 to be 20', () => testMultiplication(4, 5, 20))
