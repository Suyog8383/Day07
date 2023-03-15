function fibonacciSeries(num) {
  let result = [];
  let a = 0,
    b = 1;
  result.push(a, b);
  for (let i = 1; i <= num - 2; i++) {
    let c = a + b;
    result.push(c);
    a = b;
    b = c;
  }
  return result;
}
console.log("@SN ", fibonacciSeries(7));
