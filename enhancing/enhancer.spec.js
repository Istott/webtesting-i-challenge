// const enhancer = require('./enhancer.js');
const {succeed, fail, repair} = require('./enhancer.js');

// test away!

test('testing', () => {
    expect(1 + 2).toEqual(3);
})

const testerItem = {
    name: 'tester',
    enhancement: 17,
    durability: 40,
}

const bob = {
    name: 'bob',
    enhancement: 20,
    durability: 100,
}

describe("enhancer", () => {
    test('should run tests using it()', () => {
        expect(true).toBe(true);
        expect(true).toBeTruthy();
        expect(true).not.toBeUndefined();
    })


    describe('succeed()', () => {
        test("to make sure its changed", () => {
            expect(succeed(testerItem)).not.toBe(testerItem);
        })

        test('to make enhancement adds 1 or keeps at 20', () => {
            const expected1 = testerItem.enhancement < 20 ? testerItem.enhancement + 1 : testerItem.enhancement
            const expected2 = bob.enhancement < 20 ? bob.enhancement + 1 : bob.enhancement

            expect(succeed(testerItem).enhancement).toEqual(expected1)
            expect(succeed(bob).enhancement).toEqual(expected2)
        })
    })

    describe('fail()', () => {
        test("to make sure its changed", () => {
            expect(fail(testerItem)).not.toBe(testerItem);
            expect(fail(bob)).not.toBe(bob);
        })

        test('should decrement enhancement level and durability', () => {
            const expected1 = 
                {
                    name: 'tester',
                    enhancement: testerItem.enhancement > 16 ? testerItem.enhancement - 1 : testerItem.enhancement,
                    durability: testerItem.durability - (testerItem.durability >= 15 ? 10 : 5)
                };
            const expected2 = 
                {
                    name: 'bob',
                    enhancement: bob.enhancement > 16 ? bob.enhancement - 1 : bob.enhancement,
                    durability: bob.durability - (bob.durability >= 15 ? 10 : 5)
                };
            
            expect(fail(testerItem)).toEqual(expected1);
            expect(fail(bob)).toEqual(expected2);
        })
    })

    describe('repair()', () => {
        test("should restore durability to 100", () => {
            expect(repair(testerItem).durability).toEqual(100);
        })
    })

})