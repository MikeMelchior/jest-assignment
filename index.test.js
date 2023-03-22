import * as funcs from './index';


test('capitalizes string', () => {
    expect(funcs.capitalize('hello')).toBe('Hello')
})

test('reverses string', () => {
    expect(funcs.reverseString('hello')).toBe('olleh')
})

test('calculator adds', () => {
    expect(funcs.calculator.add(1, 2)).toBe(3)
});

test('calculator subtracts', () => {
    expect(funcs.calculator.subtract(3, 2)).toBe(1)
});

test('calculator multiplies', () => {
    expect(funcs.calculator.multiply(1, 2)).toBe(2)
});

test('calculator divides', () => {
    expect(funcs.calculator.divide(6, 1)).toBe(6)
});

test('cipher encrypts', () => {
    expect(funcs.caesarCipher('atTack ,,,,at dawn', 7)).toBe('haAhjr ,,,,ha khdu')
})

test('all numbers', () => {
    expect(funcs.analyzeArray([0, 'a', 3])).toBe('Error, array must contain only numbers')
})

test('returns object', () => {
    expect(typeof funcs.analyzeArray([])).toBe('object');
})

test('correct average', () => {
    expect(funcs.analyzeArray([1, 2, 3]).average).toBe(2);
})

test('correct min value', () => {
    expect(funcs.analyzeArray([1, 2, 3]).min).toBe(1);
})

test('correct max value', () => {
    expect(funcs.analyzeArray([1, 2, 3]).max).toBe(3);
})

test('correct length', () => {
    expect(funcs.analyzeArray([1, 2, 3, 4]).length).toBe(4);
})