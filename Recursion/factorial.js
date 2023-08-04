function factorialWithRecursion(num) {
  if (num < 0) {
    return "not gonna work";
  }
  if (num == 1 || num == 0) {
    return 1;
  } else {
    const ans = num * factorialWithRecursion(num - 1);
    return ans;
  }
}
console.log(factorialWithRecursion(9));

function findFactorialIterative(num) {
  let ans = 1;
  for (let i = num; i > 1; i--) {
    ans = ans * i;
  }
  return ans;
}
console.log(findFactorialIterative(9));
