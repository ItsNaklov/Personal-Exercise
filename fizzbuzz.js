function fizzBuzz(n, m) {
  for (let i = 1; i <= 100; i++) {
    if (i % n === 0 && i % m === 0) {
      console.log("FizzBuzz");
    } else if (i % n === 0) {
      console.log("Fizz");
    } else if (i % m === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(4, 12);
