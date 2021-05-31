

function maxSum(arr) {
  let currentSum = 0;
  let largestSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > currentSum + arr[i + 1]) {
      largestSum = currentSum;
    }
  }
  return largestSum;
}

maxSum([4, 6, -3, 5, -2, 1]);
