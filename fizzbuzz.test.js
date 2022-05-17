const fizzbuzz = require('./fizzbuzz')
describe('fizzbuzz', () => {
    test('should be a number', () => {
        const expected = 'ERROR: the input isn\'t a number'
        const result = fizzbuzz('hola mundo');
        expect(expected).toBe(result);
    })
    test('should print fizz if they receive a multiple of 3', () => {
        const expected = 'fizz';
        const result = fizzbuzz(12);
        expect(expected).toBe(result);
    })
    test('should print fizz if they receive multiple of 5', () => {
        const expected = 'buzz';
        const result = fizzbuzz(125);
        expect(expected).toBe(result);
    })
    test('should print fizzbuzz if they receive multiple of 5 and 3', () => {
        const expected = 'fizzbuzz';
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    })
    /* / BASIC RULE GENERATOR EXAMPLE
    test('should print 1 if they receive 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });
    test("test", () => {
        expect(true).toBe(true);
    }) / */
});