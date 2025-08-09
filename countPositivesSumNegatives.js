function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return []
  }
  let posArr = input.filter(x => x>0);
  let negArr = input.filter(x => x<0).reduce((a,b) => a+b, 0);
  return [posArr.length, negArr]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));