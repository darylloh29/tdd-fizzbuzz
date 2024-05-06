const fizzbuzz = (a) => {
    if (a % 3 == 0 && a % 5 == 0) {
        return "FizzBuzz";
    }
    if (a % 3 == 0) {
        return "Fizz";
    }
    if (a % 5 == 0) {
        return "Buzz";
    }
    return a.toString();
};

module.exports = fizzbuzz;
