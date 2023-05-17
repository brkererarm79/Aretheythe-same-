function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }

  const sortedArray1 = array1.sort((a, b) => a - b);
  const sortedArray2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] * sortedArray1[i] !== sortedArray2[i]) {
      return false;
    }
  }

  return true;
}


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
// Output: true

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]));
// Output: false
