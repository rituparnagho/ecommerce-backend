function countTrue(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      count++;
    }
  }
  return count;
}

countTrue([true, false, false, true, false]);
