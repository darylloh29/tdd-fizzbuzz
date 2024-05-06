const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
    test("input of 1 returns 1", () => {
        expect(fizzbuzz(1)).toBe("1");
    });
    test("input of 3 returns Fizz", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });
    test("input of 5 returns Buzz", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
    });
    test("input of 15 returns FizzBuzz", () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz");
    });
});
