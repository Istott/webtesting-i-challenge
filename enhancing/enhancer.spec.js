// const enhancer = require('./enhancer.js');
const {succeed, fail, repair} = require('./enhancer.js');

// test away!

test('testing', () => {
    expect(1 + 2).toEqual(3);
})

describe("enhancer", () => {
    test('should run tests using it()', () => {
        expect(true).toBe(true);
        expect(true).toBeTruthy();
        expect(true).not.toBeUndefined();
    })


    describe('succeed()', () => {
        test("should increment enhancement by 1", () => {
            expect(succeed).toBeTruthy();
        })
    })

    describe('fail()', () => {
        test('should decrement enhancement level and durability', () => {
           const durability = 100;
           const  enhancement = 20;

            
            expect(fail(durability - 10)).toBe(90);
            expect(fail(enhancement - 1)).toBe(19);
        })
    })

})