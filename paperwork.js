let paperwork = (n, m) => (n | m) < 0 ? 0 : n*m;

console.log(paperwork(5,5));
console.log(paperwork(5,-5));