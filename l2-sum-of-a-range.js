// var range = function (start, end) {
//   array = [];
//   for (let i = start; i <= end ; i++) {
//     array.push(i);
//   }
//   return array;
// }
var range = function (start, end, step) {
  array = [];
  if (step === undefined) {
    for (let i = start; i <= end ; i++) {
      array.push(i);
    }
  } else if (Math.sign(step) === -1){
  for (let i = start; i >= end ; i = i + step) {
    array.push(i);
  }
} else {
for (let i = start; i <= end ; i = i + step) {
  array.push(i);
}
}
  return array;
}

const sum = function (x) {
  let result = 0;
  for (let i = 0; i < Math.max.apply(null, x); i++) {
    result = result + x[i];
  }
  return result;
}






console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

console.log(range(1, 10, 2));

