function sumArray(array) {
  if (array == null) {
    return 0;
  }
  let newArr = array.sort((a,b) => (a-b)).slice(1, array.length - 1);
  return newArr.reduce((a,b)=>a+b, 0);
}

console.log(sumArray([6,2,1,8,10]));
console.log(sumArray([6,2,1,8]));
console.log(sumArray([]));