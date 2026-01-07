function getSum(numbers) {
  let sum = 0;

  numbers.map((number) => {
    sum += number;
  });
  return sum;
}

console.log(getSum([1, 2, 3, 4]));
