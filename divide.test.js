const divide = require('./divide');

test('divide 10 / 5 to equal 2', () => {
    expect(divide(10, 5)).toBe(2);
});

test('divide 20 / 2 to equal 10', () => {
    expect(divide(20, 2)).toBe(10);
});