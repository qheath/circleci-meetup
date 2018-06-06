const fizzBuzz = function(n) {
  // return 'Fizz' if n is multiples of 3
  if (n % 3 === 0) {
    // But, we want to return 'Fizz Buzz' if n is multiples of 3 and multiples of 5
    if (n % 5 === 0) {
      return "Fizz Buzz";
    }

    return "Fizz";
  }

  // return 'Buzz' if n is multiples of 5
  if (n % 5 === 0) {
    return "Buzz";
  }

  return n;
};

module.exports = fizzBuzz;
