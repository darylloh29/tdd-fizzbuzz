const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
    test("input of 1 returns 1", () => {
        expect(fizzbuzz(1)).toBe("1");
    });
});
