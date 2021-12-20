// Factorial using iteration
function loopFactorial(n) {
  let factorial = 1;

  for (let i = n; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
}

// Factorial using recursion
function recursionFactorial(n) {
  // Base condition
  if (n === 0) return 1;
  return n * recursionFactorial(n - 1);
}

recursionFactorial(4);
