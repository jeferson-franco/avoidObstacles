const solution = require('./avoidObstacles.js');

test('test 1', () => {
    expect(solution([5, 3, 6, 7, 9])).toBe(4);
});

test('test 2', () => {
    expect(solution([2, 3])).toBe(4);
});

test('test 3', () => {
    expect(solution([1, 4, 10, 6, 2])).toBe(7);
});

test('test 4', () => {
    expect(solution([1000, 999])).toBe(6);
});

test('test 5', () => {
    expect(solution([19, 32, 11, 23])).toBe(3);
});

test('test 6', () => {
    expect(solution([5, 8, 9, 13, 14])).toBe(6);
});
