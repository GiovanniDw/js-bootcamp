const countBs = function(x) {
  counter = 0;

  for (let i = 0; i < x.length; i++) {
    x[i];
    if (x[i] === "B") {
      counter++
    }
  }
  return counter;
}
const countChar = function(x,y) {
  counter = 0;

  for (let i = 0; i < x.length; i++) {
    x[i];
    if (x[i] === y) {
      counter++
    }
  }
  return counter;
}




console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));
