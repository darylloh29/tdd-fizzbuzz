const fizzbuzz = (a) => {
    if (a % 3 == 0) {
        return "Fizz";
    }
    return a.toString();
};

module.exports = fizzbuzz;
