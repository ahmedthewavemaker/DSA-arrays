function merge(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr.sort((a, b) => a - b);
}

merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);
