module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) {
    return 0;
  }
  if (array.length == 1) {
    return 1;
  }  
  let sortedArr = InsertionSort(array);
  function InsertionSort(A) {
    for (let i = 0, n = A.length; i < n; i++) {
      let v = A[i], j = i - 1;
      while (j >= 0 && A[j] > v) {
        A[j + 1] = A[j];
        j--;
      }
      A[j + 1] = v;
    }
    return A;
  }
  let count = 1;
  let maxLen = 1;
  for (let k = 1, len = sortedArr.length; k < len; k++) {
    if (sortedArr[k] - sortedArr[k - 1] == 1) {
      count++;
    } else {
      count = 1;
    }
    maxLen = Math.max(maxLen, count);
  }
  return maxLen;
}