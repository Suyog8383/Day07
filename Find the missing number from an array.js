let arr = [1, 2, 3, 4, 6];
function findMissingNumber(arr, num) {
  let temp = 1;
  for (let i = 2; i < num + 1; i++) {
    temp += i;
    temp -= arr[i - 2];
  }
  return temp;
}
console.log(findMissingNumber(arr, arr.length));
