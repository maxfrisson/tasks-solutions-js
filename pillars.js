function pillars(numPill, dist, width) {
  return numPill > 1 ? (((width+dist*100)*(numPill-1))-width) : 0;
}

console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));
console.log(pillars(4, 20, 25));
console.log(pillars(11, 15, 30));